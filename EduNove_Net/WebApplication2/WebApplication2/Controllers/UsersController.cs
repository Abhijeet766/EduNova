using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;
using Microsoft.AspNetCore.Cors;
using Mono.TextTemplating;
using WebApplication2.Models;

namespace APIConnect.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    [EnableCors]
    public class UsersController : ControllerBase
    {
        [HttpGet]

        public List<User> GetUser()
        {
            List<User> list = new List<User>();
            using (var db = new EdunovadbContext())
            {
                list = db.Users.ToList();
            }
            return list;
        }
        [HttpGet]
        public List<User> GetUserwithRole()
        {
            List<User> list = new List<User>();
            using (var db = new EdunovadbContext())
            {
                list = db.Users.Include(add => add.Role).ToList();
            }
            return list;
        }

        [HttpGet]
        public User? GetUserwithId(int id)
        {
            User? user = new User();
            using (var db = new EdunovadbContext())
            {
                user = db.Users.Find(id);
            }
            return user;
        }

        [HttpPost]
        public User SaveUser(User user)
        {
            using (var db = new EdunovadbContext())
            {
                user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

                db.Users.Add(user);
                db.SaveChanges();
            }
            return user;
        }
        [HttpPost]
        public IActionResult CheckLogin(User us)
        {

            User? user;

            using (var db = new EdunovadbContext())
            {
                user = db.Users.Where((u => u.Username == us.Username)).FirstOrDefault();
            }
            if (user != null && BCrypt.Net.BCrypt.Verify(us.Password, user.Password))
            {
                var response = new
                {
                    user.Username,
                    user.RoleId,
                };
                return Ok(response);
            }
            return Unauthorized(new { message = "Username or Password is Invalid" });
        }








    }


}
