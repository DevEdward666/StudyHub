using StudyHub.Models;

namespace StudyHub.ViewModels
{
    public class StudyTablesDto
    {
        public int id { get; set; }
        public string table_no { get; set; }
        public int? used_by { get; set; }
        public int status { get; set; }
    }
    public class CustomerScanTableDto
    {
        public int id { get; set; }
        public int? used_by { get; set; }
        public int status { get; set; } // 0 Not Use, 1 Used
        public int credit_id { get; set; }

        public string? session_started { get; set; }
        public string? session_ended { get; set; } // session ended by user
        public string? session_finished { get; set; } // session should ended
    }

    public class EndSessionDto
    {
        public int id { get; set; }
        public int status { get; set; } // 0 Not Use, 1 Used
        public int user_id { get; set; }
        public string? session_started { get; set; }
        public string? session_ended { get; set; } // session ended by user
        public string? session_finished { get; set; } // session should ended
    }
    public class StudyTablesById
    {
        public int study_tables_id { get; set; }


    }
    public class SelectedStudyTable
    {
        public int id { get; set; }
        public string table_no { get; set; }
        public Users? user{ get; set; }
        public int status { get; set; }
        public TimeSpan remaining_time { get; set; }

    }
}
