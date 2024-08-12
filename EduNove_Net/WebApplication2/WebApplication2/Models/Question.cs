using System;
using System.Collections.Generic;

namespace WebApplication2.Models;

public partial class Question
{
    public int QuestionId { get; set; }

    public string QuestionDescription { get; set; } = null!;

    public string OptionA { get; set; } = null!;

    public string OptionB { get; set; } = null!;

    public string OptionC { get; set; } = null!;

    public string OptionD { get; set; } = null!;

    public virtual ICollection<ExamQuestion> ExamQuestions { get; set; } = new List<ExamQuestion>();

    public virtual ICollection<StudentResult> StudentResults { get; set; } = new List<StudentResult>();
}
