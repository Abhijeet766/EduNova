using System;
using System.Collections.Generic;

namespace WebApplication2.Models;

public partial class Topic
{
    public int TopicId { get; set; }

    public string TopicName { get; set; } = null!;

    public int? SubjectId { get; set; }

    public int? PaymentId { get; set; }

    public virtual Payment? Payment { get; set; }

    public virtual ICollection<Pdf> Pdfs { get; set; } = new List<Pdf>();

    public virtual Subject? Subject { get; set; }

    public virtual ICollection<Video> Videos { get; set; } = new List<Video>();
}
