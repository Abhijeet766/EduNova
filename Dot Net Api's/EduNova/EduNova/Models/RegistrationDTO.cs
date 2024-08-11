namespace EduNova.Models
{
    public class RegistrationDTO
    {
        public int? RoleId { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;

        // Student related properties
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? PhoneNo { get; set; }
        public string? Qualification { get; set; }
        public bool? Enable { get; set; }
    }
}
