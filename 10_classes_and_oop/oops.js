const user = {
    username:"prince",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
         console.log("Got user details from database")
    }
}

console.log(user.getUserDetails);
console.log(user.username);