 function SetUsername(usernme){
    this.usernme=usernme
    console.log("called");
 }
 function createsUsername(username,email,password){
    SetUsername.call(this,username)

    this.email=email
    this.password=password
 }
 let chai =new createsUsername("vikas","vikas@fb.com","123")
 console.log(chai); 