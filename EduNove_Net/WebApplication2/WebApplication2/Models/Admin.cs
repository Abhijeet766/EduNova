using System;
using System.Collections.Generic;

namespace WebApplication2.Models;

public partial class Admin
{
    public int AdminId { get; set; }

    public string AdminName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public int? RoleId { get; set; }

    public virtual Role? Role { get; set; }
}
