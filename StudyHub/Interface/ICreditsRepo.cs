using StudyHub.Models;
using StudyHub.ViewModels;

namespace StudyHub.Interface
{
    public interface ICreditsRepo
    {
        Task<Credits> BuyCredits(CreditsDto credits);
        Task<Credits> CreateCredits(Credits credits);
        Task<List<Credits>> GetAllCredits();
        Task<Credits> GetCreditsById(CreditsById credits);
        Task<Credits> UpdateCredits(UpdateCredits updateCredits);
    }
}
