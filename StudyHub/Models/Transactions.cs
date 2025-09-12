using System.ComponentModel.DataAnnotations.Schema;

namespace StudyHub.Models
{
    public class Transactions
    {
        public int id { get; set; }
        public int total_credits { get; set; }
        public int user_id { get; set; }
        [ForeignKey("user_id")]
        public Users Users { get; set; }
        public int stutus {  get; set; }
        public DateTime? created_at { get; set; }
    }
}
