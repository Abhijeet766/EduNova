using System;
using System.Collections.Generic;

namespace WebApplication2.Models;

public partial class Subject
{
    public int SubjectId { get; set; }

    public string SubjectName { get; set; } = null!;

    //public virtual ICollection<Examination> Examinations { get; set; } = new List<Examination>();

   // public virtual ICollection<Pdf> Pdfs { get; set; } = new List<Pdf>();

  //  public virtual ICollection<SubjectTrainer> SubjectTrainers { get; set; } = new List<SubjectTrainer>();

   // public virtual ICollection<Topic> Topics { get; set; } = new List<Topic>();

  //  public virtual ICollection<Video> Videos { get; set; } = new List<Video>();
}
