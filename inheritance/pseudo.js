            var Mammal = function (name) {
            this.name = name;
            };
            Mammal.prototype.get_name = function ( ) {
            return this.name;
            };
            var myMammal = new Mammal('Herb the Mammal');
            var name = myMammal.get_name( );
            console.log(name);
            var Cat = function (name) {
            this.name = name;
            this.saying = 'meow';
            };
            Cat.prototype = new Mammal( );
            Cat.prototype.get_name = function ( ) {
            return this.says( ) + ' ' + this.name +
            ' ' + this.says( );
            };
            Cat.prototype.says = function ( ) {
            return this.saying;
            };
            var myCat = new Cat('Kitty');
            var says = myCat.says( );
            var name = myCat.get_name( );
            
            console.log(name);
            
            console.log(says);