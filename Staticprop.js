//static property(prop)
 class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME:${this.username}`);
    }
    static createId(){//static mrans not acces in every one
        return `123`
    }
 }
 const vikas = new User("vikas")
 //console.log(vikas.createId());
 console.log(User.createId());//it only acces in own class
 vikas.logMe();
 //static method
 class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
 }
}
const iphone = new Teacher("iphone","i@phone.com","2947")
//console.log(iphone.createId());//it show a error
