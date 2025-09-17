using StudyHub.Models;

namespace StudyHub.Interface
{
    public interface IUserActivity
    {
        Task<UserActivity> CreateActivity(UserActivity userActivity);
        Task<List<UserActivity>> GetAllActivity();
    }
}
