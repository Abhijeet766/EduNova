using System;
using System.Collections.Generic;

namespace EduNova.Models;

public partial class StudentExam
{
    public int StudentExamId { get; set; }

    public int? StudentId { get; set; }

    public int? ExamId { get; set; }

    public virtual Examination? Exam { get; set; }

    public virtual Student? Student { get; set; }
}
