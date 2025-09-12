namespace StudyHub.Models
{
    public class StudyTables
    {
        public int id { get; set; }
        public string table_no { get; set; }
        public int? used_by { get; set; }
        public Users? Users { get; set; }
        public int status { get; set; } // 0 = idle, 1 = Active, 2 = Inactive, 3 = Paused
        public string? session_started { get; set; }
        public string? session_ended { get; set; } // session ended by user
        public string? session_finished { get; set; } // session should ended

    }
}
