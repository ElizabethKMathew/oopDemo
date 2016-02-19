var User = function(options) {
        var name = options.name;
        var password = options.password;
        var birthYear = options.birthYear;
        var age;
        this.country = options.country;
        function privateMethod() {
            console.log('im a private method!');
        }
        var calculateAge = function() {
                var today = new Date();
                age = today.getFullYear() - birthYear;
                return age;
            }

            //Privileged method
        this.getAge = function() {
            return calculateAge(); // private variable
        }
    }
    //new instance of User
var u = new User({
    name: 'Anju',
    password: '***',
    birthYear: 1993,
    country: 'India'
});

console.log(u.name); //undefined
console.log(u.country); //India
console.log(u.age); //undefined
console.log(u.getAge()); //23
console.log(u.privateMethod ()); //throws error