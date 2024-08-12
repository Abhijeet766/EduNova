using System;
using System.Collections.Generic;

namespace WebApplication2.Models;

public partial class Result
{
    public int ResultId { get; set; }

    public int? ExamId { get; set; }

    public bool IsCorrect { get; set; }

    public decimal TotalMarks { get; set; }

    public virtual Examination? Exam { get; set; }
}
