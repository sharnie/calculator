window = window;

var App = {
    init: function() {
        App.Calculator.init({
            expression: '#expression',
            result: '#result'
        });
    },

    Calculator: {

        init: function( opt ) {
            if ( !opt ) {
                console.log( "Set 'expression' and 'result' selector." )
                return false;
            }

            this.run( opt );
        },

        eval: function( expression, callback ) {
            var value = null;

            if ( expression ) {
                try {
                    value = eval( expression ); // evaluate expression
                } catch ( e ) {
                    console.error( 'Invalid expression' );
                }
            }

            if ( typeof callback === 'function' ) callback( value );

            return value;
        },

        run: function( opt ) {
            var Calculator = this;
            var expression = document.querySelector( opt.expression );
            var result     = document.querySelector( opt.result );

            expression.addEventListener('keyup', function( evt ) {
                Calculator.eval(this.value, function( output ) {
                    if ( output ) {
                        result.innerHTML = output;
                        result.classList.remove( 'invalid' );
                    } else {
                        result.classList.add( 'invalid' );
                    }
                });
            });
        }
    }
};

window.addEventListener( 'DOMContentLoaded', App.init );