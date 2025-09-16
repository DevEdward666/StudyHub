using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyHub.Data;
using StudyHub.Interface;
using StudyHub.Models;
using StudyHub.ViewModels;

namespace StudyHub.Repository
{
    public class CreditsRepo : ICreditsRepo
    {
        private readonly StudyHubContext _context;

        public CreditsRepo(StudyHubContext context)
        {
            _context = context;
        }
        public async Task<Credits> BuyCredits(CreditsDto credits)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var getCredits = await _context.Credits.Where((v) => v.id.Equals(credits.credit_id)).FirstOrDefaultAsync();
                    if (getCredits != null)
                    {

                        var transactions = new Transactions
                        {
                            id = 0,
                            total_credits = getCredits.credit_value,
                            user_id = credits.user_id,
                            stutus = 1,
                            created_at = new DateTime(),
                        };
                        _context.Transactions.Add(transactions);

                        var user = await _context.Users.Where((v) => v.id.Equals(credits.user_id)).FirstOrDefaultAsync();
                        user.total_credits = user.total_credits + getCredits.credit_value;
                        await _context.SaveChangesAsync();
                        await transaction.CommitAsync();
                        return getCredits;
                    }

                    return new Credits();
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while Buying credits.", ex);
                 
                }
            }
        }
        public async Task<Credits> CreateCredits(Credits credits)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    if (credits.price <= 0 || credits.credit_value_hours <= 0 || credits.credit_value <= 0)
                    {
                        throw new Exception("Value must be greater than 0");
                    }
                    _context.Credits.Add(credits);
                    await _context.SaveChangesAsync();
                    await transaction.CommitAsync();
                    return credits;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while Buying credits.", ex);

                }
            }
        }

        public async Task<List<Credits>> GetAllCredits()
        {
           var getAllcredits =  await _context.Credits.ToListAsync();
            return getAllcredits;
        }
        public async Task<Credits> GetCreditsById(CreditsById credits)
        {
            var getSelectedCredits = await _context.Credits.FindAsync(credits.credit_id);
            return getSelectedCredits;
        }
        public async Task<Credits> UpdateCredits(UpdateCredits updateCredits)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var creditTobeUpdated = await _context.Credits
                        .Where(v => v.id == updateCredits.id)
                        .FirstOrDefaultAsync();

                    if (creditTobeUpdated == null)
                    {
                        throw new Exception("Credit not found.");
                    }
                    if(updateCredits.price <= 0|| updateCredits.credit_value_hours <= 0 || updateCredits.credit_value <=0)
                    {
                        throw new Exception("Value must be greater than 0");
                    }

                    creditTobeUpdated.status = updateCredits.status;
                    creditTobeUpdated.price = updateCredits.price;
                    creditTobeUpdated.credit_value_hours = updateCredits.credit_value_hours;
                    creditTobeUpdated.name = updateCredits.name;
                    creditTobeUpdated.credit_value = updateCredits.credit_value;

                    await _context.SaveChangesAsync();

                    await transaction.CommitAsync();

                    return creditTobeUpdated;
                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync();
                    throw new Exception("An error occurred while updating the credit.", ex);
                }
            }
        }
    }
}
