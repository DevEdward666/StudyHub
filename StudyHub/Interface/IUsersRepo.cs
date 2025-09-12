using StudyHub.Models;
using StudyHub.ViewModels;

namespace StudyHub.Interface
{
    public interface IUsersRepo
    {
        Task<Users> CreateUser(Users users);
        Task<UpdateUserDto> UpdateUser(UpdateUserDto users);
        Task<List<UserDto>> GetAllUsers();
        Task<UserDto> GetUserById(int id);
    }
}
