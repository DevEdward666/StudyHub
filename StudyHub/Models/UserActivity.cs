using System.ComponentModel.DataAnnotations.Schema;

namespace StudyHub.Models
{
    public class UserActivity
    {
        public int id { get; set; }
        public string? name { get; set; }
        public string? description { get; set; }
        public int? credits { get; set; }

        [ForeignKey("user_id")]
        public int user_id { get; set; }
        public Users Users { get; set; }

        public DateTime? created_at { get; set; }
    }
}
