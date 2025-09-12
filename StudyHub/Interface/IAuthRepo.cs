using StudyHub.Models;
using StudyHub.ViewModels;

namespace StudyHub.Interface
{
    public interface IAuthRepo
    {

        Task<Users> LoginUser(UsersDto users);
    }
}
