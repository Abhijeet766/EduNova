using System;
using System.Collections.Generic;

namespace EduNova.Models;

public partial class SubjectTrainer
{
    public int TrainerSubjectId { get; set; }

    public int? TrainerId { get; set; }

    public int? SubjectId { get; set; }

    public string? Duration { get; set; }

    public decimal? Fees { get; set; }

    public virtual ICollection<StudentEnrollment> StudentEnrollments { get; set; } = new List<StudentEnrollment>();

    public virtual Subject? Subject { get; set; }

    public virtual Trainer? Trainer { get; set; }
}
