import { Model } from "@vuex-orm/core";

export class User extends Model {
  static entity = "users";
  static fields() {
    return {
      id: this.attr(null),
      roles: this.belongsToMany(Role, RoleUser, "user_id", "role_id")
    };
  }
}

export class Role extends Model {
  static entity = "roles";
  static fields() {
    return {
      id: this.attr(null)
    };
  }
}

export class RoleUser extends Model {
  static entity = "role_user";
  static primaryKey = ["user_id", "role_id"];
  static fields() {
    return {
      user_id: this.attr(null),
      role_id: this.attr(null)
    };
  }
}
