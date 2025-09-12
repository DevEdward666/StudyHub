using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;
using StudyHub.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudyHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly StudyHubContext _context;
        private IUsersRepo _usersRepo;
        public UsersController(StudyHubContext context, IUsersRepo usersRepo)
        {
            _context = context;
            _usersRepo = usersRepo;
        }

        [HttpGet]
        public async Task<ActionResult<List<UserDto>>> GetUsers()
        {
            return await _usersRepo.GetAllUsers();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> GetUsers(int id)
        {
            return await _usersRepo.GetUserById(id);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<UpdateUserDto>> PutUsers(int id, UpdateUserDto users)
        {
            if (id != users.id)
            {
                return BadRequest();
            }


            try
            {
                await _usersRepo.UpdateUser(users);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersExists(id))
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
        public async Task<ActionResult<Users>> PostUsers(Users users)
        {
            return await _usersRepo.CreateUser(users);
        }
    

        private bool UsersExists(int id)
        {
            return _context.Users.Any(e => e.id == id);
        }
    }
}
