using System;
using System.Collections.Generic;

namespace EduNova.Models;

public partial class Pdf
{
    public int PdfId { get; set; }

    public int? SubjectId { get; set; }

    public int? TopicId { get; set; }

    public virtual Subject? Subject { get; set; }

    public virtual Topic? Topic { get; set; }
}
