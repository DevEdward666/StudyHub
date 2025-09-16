using StudyHub.Models;

namespace StudyHub.ViewModels
{
    public class CreditsDto
    {

        public int credit_id { get; set; }
        public int user_id { get; set; }


    }
    public class CreditsById
    {
        public int credit_id { get; set; }

    }
    public class UpdateCredits
    {
        public int id{ get; set; }

        public string name { get; set; }
        public int credit_value { get; set; }
        public int credit_value_hours { get; set; }
        public int price { get; set; }
        public int status { get; set; }

    }
}
