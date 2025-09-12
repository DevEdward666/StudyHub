namespace StudyHub.ViewModels
{
    public class UsersDto
    {

        public string username { get; set; }
        public string password { get; set; }
    }
    public class UpdateUserDto
    {
        public int id { get; set; }
        public string firstname { get; set; }
        public string? middlename { get; set; }
        public string lastname { get; set; }
        public string? email { get; set; }
        public string? phone_no { get; set; }
        public string user_role { get; set; }
        public int status { get; set; } 
    }
    public class UserDto
    {
        public int id { get; set; }
        public string firstname { get; set; }
        public string? middlename { get; set; }
        public string lastname { get; set; }
        public string? email { get; set; }
        public string username { get; set; }
        public int total_credits { get; set; }
        public string? phone_no { get; set; }
        public string user_role { get; set; }
        public int status { get; set; }
    }
}
