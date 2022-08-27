import {User} from "../user/user";

export class Location {
  id: number;
  country: string
  user: User[];

  constructor(){
    this.id=0;
    this.country="";
    this.user = [];
  }
}
