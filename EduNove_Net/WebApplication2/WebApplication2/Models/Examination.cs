//using System;
//using System.Collections.Generic;

//namespace WebApplication2.Models;

//public partial class Examination
//{
//    public int ExamId { get; set; }

//    public int? SubjectId { get; set; }

//    public string SubjectName { get; set; } = null!;

//    public DateOnly Date { get; set; }

//    public virtual ICollection<ExamQuestion> ExamQuestions { get; set; } = new List<ExamQuestion>();

//    public virtual ICollection<Result> Results { get; set; } = new List<Result>();

//    public virtual ICollection<StudentExam> StudentExams { get; set; } = new List<StudentExam>();

//    public virtual ICollection<StudentResult> StudentResults { get; set; } = new List<StudentResult>();

//    public virtual Subject? Subject { get; set; }
//}
