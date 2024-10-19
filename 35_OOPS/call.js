function firtsUser(username){
    this.username = username
    console.log("called");
    
}

function secondUser(username,email,number,division){
    firtsUser.call(this,username)
    this.email = email
    this.number = number
    this.division = division 
}

const varify = new secondUser("raj", "raj@gmail.com", "911", "H");
console.log(varify);
