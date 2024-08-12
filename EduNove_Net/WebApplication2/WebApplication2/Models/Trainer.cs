using System;
using System.Collections.Generic;

namespace WebApplication2.Models;

public partial class Trainer
{
    public int TrainerId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Address { get; set; }

    public string? Qualification { get; set; }

    public string? Specialization { get; set; }

    public string? PhoneNo { get; set; }

    public int? UId { get; set; }

    public virtual ICollection<SubjectTrainer> SubjectTrainers { get; set; } = new List<SubjectTrainer>();

    public virtual User? UIdNavigation { get; set; }
}
