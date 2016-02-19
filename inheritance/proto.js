            var myMammal = {
            name : 'Feline',
            get_name : function ( ) {
            return this.name;
            }
            };
            var name = myMammal.get_name( );
            console.log(name);
            var myCat = Object.create(myMammal);
            myCat.name = 'Kitty';
            myCat.saying = 'meow';
            myCat.says = function ( ) {
            return this.saying || '';
            };
            myCat.get_name = function ( ) {
            return this.says( ) + ' ' + this.name + ' ' + this.says( );
            };
            var says = myCat.says( );
            var name = myCat.get_name( );
            console.log(says);
            console.log(name);