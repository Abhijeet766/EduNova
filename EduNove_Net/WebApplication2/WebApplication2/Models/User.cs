using System;
using System.Collections.Generic;

namespace WebApplication2.Models;

public partial class User
{
    public int UId { get; set; }

    public int? RoleId { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public virtual Role? Role { get; set; }

    public virtual ICollection<Student> Students { get; set; } = new List<Student>();

    public virtual ICollection<Trainer> Trainers { get; set; } = new List<Trainer>();
}
