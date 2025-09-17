namespace StudyHub.Models
{
    public class Logs
    {
        public int id { get; set; }
        public string title { get; set; }
        public string? description { get; set; }
        public DateTime? created_at { get; set; }
    }
}
