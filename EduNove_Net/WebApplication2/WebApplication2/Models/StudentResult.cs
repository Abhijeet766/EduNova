using System;
using System.Collections.Generic;

namespace WebApplication2.Models;

public partial class StudentResult
{
    public int StudentResultId { get; set; }

    public int? StudentId { get; set; }

    public int? QuestionId { get; set; }

    public int? ExamId { get; set; }

    public string? Answer { get; set; }

    public decimal? Marks { get; set; }

    public virtual Examination? Exam { get; set; }

    public virtual Question? Question { get; set; }

    public virtual Student? Student { get; set; }
}
