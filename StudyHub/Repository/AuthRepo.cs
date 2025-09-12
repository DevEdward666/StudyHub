using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;
using StudyHub.ViewModels;

namespace StudyHub.Repository
{
    public class AuthRepo : IAuthRepo
    {
        private readonly StudyHubContext _context;

        public AuthRepo(StudyHubContext context)
        {
            _context = context;
        }

        public async Task<Users> LoginUser(UsersDto users)
        {
            if (users.username != null)
            {
                var getUser = await _context.Users.Where((v) => v.username.Equals(users.username)).FirstOrDefaultAsync();
                var isPasswordCorrect = PasswordHasher.VerifyPassword(users.password, getUser!.password);
                return isPasswordCorrect ? getUser : new Users();
            }
            return new Users();
        }
    }
}
