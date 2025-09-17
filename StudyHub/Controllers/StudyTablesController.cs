using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;
using StudyHub.Repository;
using StudyHub.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudyTablesController : ControllerBase
    {
        private readonly StudyHubContext _context;
        private IStudayTablesRepo _studayTablesRepo;
        private IUserActivity _userActivity;
        private IUsersRepo _usersRepo;

        public StudyTablesController(StudyHubContext context, IStudayTablesRepo studayTablesRepo, IUserActivity userActivity, IUsersRepo usersRepo)
        {
            _context = context;
            _studayTablesRepo = studayTablesRepo;
            _userActivity = userActivity;
            _usersRepo = usersRepo;
        }

        [HttpGet]
        public async Task<ActionResult<List<StudyTables>>> GetStudyTables()
        {
            return await _studayTablesRepo.GetAllStudyTables();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SelectedStudyTable>> GetStudyTables(int id)
        {
            StudyTablesById studyTablesById = new StudyTablesById();
            studyTablesById.study_tables_id = id;
            var studyTables = await _studayTablesRepo.GetStudyTablesById(studyTablesById);

            if (studyTables == null)
            {
                return NotFound();
            }

            return studyTables;
        }

        [HttpPut]
        [Route("UpdateStudyTable")]
        public async Task<IActionResult> UpdateStudyTable(int id, StudyTablesDto studyTables)
        {
            if (id != studyTables.id)
            {
                return BadRequest();
            }
            try
            {
                await _studayTablesRepo.UpdateTables(studyTables);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudyTablesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        [HttpPut]
        [Route("EndSession")]
        public async Task<IActionResult> EndSession(int id, EndSessionDto endSessionDto)
        {
            if (id != endSessionDto.id)
            {
                return BadRequest();
            }
            try
            {
                await _studayTablesRepo.EndSession(endSessionDto);
                UserActivity userActivity = new UserActivity();
                userActivity.name = "End Session";
                userActivity.user_id = endSessionDto.user_id;
                userActivity.description = $"Session Ended by ${endSessionDto.user_id}";
                await _userActivity.CreateActivity(userActivity);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudyTablesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        [HttpPost]
        [Route("CustomerScanTable")]
        public async Task<ActionResult> CustomerScanTable(CustomerScanTableDto studyTables)
        {
            try
            {
                UserActivity userActivity = new UserActivity();
                StudyTablesById studyTablesById = new StudyTablesById();
                var user_id = studyTables.used_by ?? 0;
        
                var res = await _studayTablesRepo.CustomerScanTable(studyTables);
                studyTablesById.study_tables_id = res.id;
               var getstudyTables =  await _studayTablesRepo.GetStudyTablesById(studyTablesById);
                var user_details = await _usersRepo.GetUserById(user_id);
                userActivity.name = "Customer Uses Table";
                userActivity.user_id = user_id;
                userActivity.description = $"Customer ${user_details.firstname} ${user_details.lastname} Uses Table for ${getstudyTables.remaining_time}";
                await _userActivity.CreateActivity(userActivity);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudyTablesExists(studyTables.id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        [HttpPost]
        [Route("CreateStudyTable")]
        public async Task<ActionResult<StudyTables>> CreateStudyTable(StudyTablesDto studyTables)
        {
            try
            {
                var result = await _studayTablesRepo.CreateStudyTables(studyTables);

                return result;
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }


        private bool StudyTablesExists(int id)
        {
            return _context.StudyTables.Any(e => e.id == id);
        }
    }
}
