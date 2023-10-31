export class User {
  userName!: string;
  nickName!: string;
  mail!: string;
  phone!: string;
  token!: string;
  session!: string;
  role!: string;
  active!: boolean;
  isAdmin!: boolean;
  userType!: string;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
