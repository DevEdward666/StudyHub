using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;

namespace StudyHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserActivitiesController : ControllerBase
    {
        private readonly StudyHubContext _context;
        private IUserActivity _userActivity;

        public UserActivitiesController(StudyHubContext context, IUserActivity userActivity)
        {
            _context = context;
            _userActivity= userActivity;
        }
        [HttpGet]
        [Route("GetAllActivity")]
        public async Task<ActionResult<List<UserActivity>>> GetUserActivity()
        {
            return await _userActivity.GetAllActivity();
        }
        [HttpPost]
        [Route("CreateUserActivity")]
        public async Task<ActionResult<UserActivity>> CreateActivity(UserActivity userActivity)
        {
           return await _userActivity.CreateActivity(userActivity);
        }
    }
}
