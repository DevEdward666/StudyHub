namespace StudyHub.Models
{
    public class Users
    {
        public int id { get; set; }
        public string firstname { get; set; }
        public string? middlename { get; set; }
        public string lastname { get; set; }
        public string? email { get; set; }
        public string? phone_no { get; set; }
        public int created_by { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string user_role { get; set; }
        public int total_credits { get; set; }
        public int status { get; set; } //0 = Pending, 1 = Approved, 2 = Declined, 3 = InActive
        public DateTime? created_at { get; set; }
        public DateTime? updated_at { get; set; }
    }
}
