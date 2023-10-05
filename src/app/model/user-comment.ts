export class UserComment {
  public user: string;
  public date: Date;
  public comment: string;

  constructor(user: string, date: Date, comment: string) {
    this.user = user;
    this.date = date;
    this.comment = comment;
  }
}
