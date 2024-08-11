using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EduNova.Models;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class RegistrationController : ControllerBase
{
    private readonly EdunovadbContext _context;

    public RegistrationController(EdunovadbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Register([FromBody] RegistrationDTO registrationDto)
    {
        if (registrationDto == null)
        {
            return BadRequest("Invalid registration data.");
        }

        // Validate unique username and email
        if (await _context.Users.AnyAsync(u => u.Username == registrationDto.Username))
        {
            return BadRequest("Username already exists.");
        }

        if (await _context.Students.AnyAsync(s => s.Email == registrationDto.Email))
        {
            return BadRequest("Email already registered.");
        }

        // Create User entity
        var user = new User
        {
            RoleId = registrationDto.RoleId,
            Username = registrationDto.Username,
            Password = HashPassword(registrationDto.Password) // Implement password hashing
        };

        // Create Student entity
        var student = new Student
        {
            FirstName = registrationDto.FirstName,
            LastName = registrationDto.LastName,
            Email = registrationDto.Email,
            PhoneNo = registrationDto.PhoneNo,
            Qualification = registrationDto.Qualification,
            Enable = registrationDto.Enable,
            UIdNavigation = user
        };

        // Add entities to context
        _context.Users.Add(user);
        _context.Students.Add(student);

        // Save changes asynchronously
        await _context.SaveChangesAsync();

        return Ok("Registration successful.");
    }

    private string HashPassword(string password)
    {
        // Implement your password hashing logic here
        return BCrypt.Net.BCrypt.HashPassword(password);
    }
}


/*{
  "roleId": 1,
  "username": "Kanha_Kuche",
  "password": "Kanha@19",
  "firstName": "Kanhaiya",
  "lastName": "Kuche",
  "email": "kanhaiyakuche19@gmail.com",
  "phoneNo": "9763988547",
  "qualification": "B.Tech",
  "enable": true
}*/