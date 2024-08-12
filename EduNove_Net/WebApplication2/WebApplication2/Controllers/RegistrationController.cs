using WebApplication2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using WebApplication2.Models;
namespace WebApplication2.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class RegistrationController : ControllerBase
    {
        [HttpPost]
        public Student saveStudent(Student student)
        {
            using (var db = new EdunovadbContext())
            {
                student.UIdNavigation.Password = BCrypt.Net.BCrypt.HashPassword(student.UIdNavigation.Password);
                db.Add(student);
                db.SaveChanges();
            }
            return student;
        }


        [HttpPost]

        public Trainer saveTrainer(Trainer trainer)
        {

            using (var db = new EdunovadbContext())
            {
                if (trainer.UIdNavigation != null)
                {
                    trainer.UIdNavigation.Password = BCrypt.Net.BCrypt.HashPassword(trainer.UIdNavigation.Password);
                }
                db.Add(trainer);
                db.SaveChanges();
            }
            return trainer;
        }
    }
}
