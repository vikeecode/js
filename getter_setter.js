class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
}
//now use geeter setter 
//getter means to value get and setter means to value set
get email(){
    return this._email.toUpperCase();//in geeter aways write a return
}//if you write a getter and mandatory to write a setter
set email(value){//in setter to pass a value 
    this._email = value;//beacuse of stack maximum excced erroe if not cahnge a name of variable thats why change a variable now write a _email
}
//same for password
get password(){
    return this._password.toUpperCase();
}
set password(value){
    this._password = value;
}
}
const vikas = new User("V@vikas.ai","abc")
console.log(vikas.email);
console.log(vikas.password);

//through property to use getter and setter in use function
function User2(email,password){
    this._email=email;
    this._password=password;
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email=value;
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase();
        },
        set:function(value){
            this._password=value;
        }
    })
}
const chai = new User2("chai@chai.com","chai")//new is a constructor function
console.log(chai.email);
console.log(chai.password);
//using getter setter in object
const User3={
    _email:'v@vk.com',
    _password:'abc',
    get email(){
    return this._email.toUpperCase()
    },
    set email(value){
      this._email=value
    }
}
const tea = Object.create(User3)
console.log(tea.email);//_used for private variable but getter an setter overide in it

