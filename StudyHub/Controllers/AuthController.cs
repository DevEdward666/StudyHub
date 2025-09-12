using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;
using StudyHub.ViewModels;

namespace StudyHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly StudyHubContext _context;
        private IAuthRepo _authRepo;
        public AuthController(StudyHubContext context, IAuthRepo authRepo)
        {
            _context = context;
            _authRepo = authRepo;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<Users>> LoginUser(UsersDto users)
        {
            return await _authRepo.LoginUser(users);
        }
    }
}
