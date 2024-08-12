using System;
using System.Collections.Generic;

namespace WebApplication2.Models;

public partial class Role
{
    public int RoleId { get; set; }

    public string RoleName { get; set; } = null!;

    public virtual ICollection<Admin> Admins { get; set; } = new List<Admin>();

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
