

export class User{
    id;
    firstname :String;
    lastname:String;
    username:String;
    password:String;

    constructor(firstname,lastname,username,password){
        this.firstname=firstname;
        this.lastname=lastname;
        this.username=username;
        this.password=password;
    }
}