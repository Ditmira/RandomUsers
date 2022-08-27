import {Name} from "../name/name";
import {Location} from "../location/location";
export class User {
  id: number;
  gender: string;
  name: Name;
  email: string;
  location: Location;


  constructor(){
    this.id=0;
    this.gender="";
    this.name= <Name>{};
    this.email="";
    this.location= <Location>{};

  }


}
