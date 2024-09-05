function User(email, password){ // instead of using class and object we could also use function for get set
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', { // instead of using manually we could use this .defineproperty fn for simplicity
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);