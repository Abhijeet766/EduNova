package com.example.demo.entities;
import jakarta.persistence.*;
import java.util.Set;

@Entity
public class Role {


	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int roleId;

	    @Column(nullable = false)
	    private String roleName;

	    @OneToMany(mappedBy = "role")
	    private Set<User> users;

		public Role() {
			
		}

		public Role(int roleId, String roleName, Set<User> users) {
			super();
			this.roleId = roleId;
			this.roleName = roleName;
			this.users = users;
		}

		public int getRoleId() {
			return roleId;
		}

		public void setRoleId(int roleId) {
			this.roleId = roleId;
		}

		public String getRoleName() {
			return roleName;
		}

		public void setRoleName(String roleName) {
			this.roleName = roleName;
		}

		public Set<User> getUsers() {
			return users;
		}

		public void setUsers(Set<User> users) {
			this.users = users;
		}
	    
		
	    
}
