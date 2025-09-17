using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;

namespace StudyHub.Repository
{
    public class UserActivityRepo : IUserActivity
    {
        private readonly StudyHubContext _context;

        public UserActivityRepo(StudyHubContext context)
        {
            _context = context;
        }
        public async Task<UserActivity> CreateActivity(UserActivity userActivity)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    _context.UserActivity.Add(userActivity);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return userActivity;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while creating activity.", ex);

                }
            }
        }
        public async Task<List<UserActivity>> GetAllActivity()
        {
                try
                {
                    var userActivity = await _context.UserActivity.ToListAsync();
                    return userActivity;
                }
                catch (Exception ex)
                {
                    throw new Exception("An error occurred while creating activity.", ex);

                }
        }
    }
}
