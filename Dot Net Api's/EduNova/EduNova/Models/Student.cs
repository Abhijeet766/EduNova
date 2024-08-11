using System;
using System.Collections.Generic;

namespace EduNova.Models;

public partial class Student
{
    public int StudentId { get; set; }

    public int? UId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? PhoneNo { get; set; }

    public string? Qualification { get; set; }

    public bool? Enable { get; set; }

    public virtual ICollection<StudentExam> StudentExams { get; set; } = new List<StudentExam>();

    public virtual ICollection<StudentResult> StudentResults { get; set; } = new List<StudentResult>();

    public virtual User? UIdNavigation { get; set; }
}
