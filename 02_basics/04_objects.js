// singleton object
const tinder = new Object()
tinder.id = "123abcd45"
tinder.name = "Sammy"
tinder.isLoggedIn = false

console.log(tinder);

const regularUser = {
    email: "prince@gmail.com",
    fullname:{
        userfullname:{
            firtname: "prince",
            lastname:"singh"
        }
    }
}

console.log(regularUser.fullname);