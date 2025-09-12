using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;
using StudyHub.ViewModels;

namespace StudyHub.Repository
{
    public class UsersRepo : IUsersRepo
    {
        private readonly StudyHubContext _context;

        public UsersRepo(StudyHubContext context)
        {
            _context = context;
        }
        public async Task<Users> CreateUser(Users users)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var userExist = await _context.Users.Where((v) => v.username.Equals(users.username)).ToListAsync();
                    if(userExist.Count() == 0)
                    {
                        users.password = PasswordHasher.HashPassword(users.password);

                        _context.Users.Add(users);
                        await _context.SaveChangesAsync();
                        await transaction.CommitAsync();
                        return users;
                    }
                    return users;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while creating user.", ex);

                }
            }
        }
        public async Task<UpdateUserDto> UpdateUser(UpdateUserDto users)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var updateUser = await _context.Users.Where((v) => v.id.Equals(users.id)).FirstOrDefaultAsync();
                    if (updateUser != null) {
                        updateUser.firstname = users.firstname;
                        updateUser.middlename = users.middlename;
                        updateUser.lastname = users.lastname;
                        updateUser.email = users.email;
                        updateUser.phone_no = users.phone_no;
                        updateUser.status = users.status;



                        await _context.SaveChangesAsync();
                        await transaction.CommitAsync();
                        return users;
                    }
                    return new UpdateUserDto();
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while creating user.", ex);

                }
            }
        }

        public async Task<List<UserDto>> GetAllUsers()
        {
            var users =  await _context.Users.ToListAsync();
            List<UserDto> userDtos = new List<UserDto>();
            foreach (var user in users)
            {
                var userDto = new UserDto
                {
                    id = user.id,
                    username = user.username,
                    firstname = user.firstname,
                    middlename = user.middlename,
                    user_role = user.user_role,
                    status = user.status,
                    email = user.email,
                    phone_no = user.phone_no,
                    lastname = user.lastname,
                    total_credits = user.total_credits,
                };

                userDtos.Add(userDto);
            }
            return userDtos;
        }
        public async Task<UserDto> GetUserById(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync();
          
                var userDto = new UserDto
                {
                    id = user.id,
                    username = user.username,
                    firstname = user.firstname,
                    middlename = user.middlename,
                    user_role = user.user_role,
                    status = user.status,
                    email = user.email,
                    phone_no = user.phone_no,
                    lastname = user.lastname,
                    total_credits = user.total_credits,
                };

            
            return userDto;
        }
    }
}
