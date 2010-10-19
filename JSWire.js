/**
 * JSWire
 */

var JSWire = (function($) {
    
    // Define private variables in extendable object to maintain data
    var PVARS = {
        choice: false, 
    }
    
    
    
    // Private functions
    
    
    
    // Event binding functions
    
    
    
    // This is the object being returned, and thus holds all functions publically avaiable.
    return {
        
        init    : function(opts) {
            
            // extend options requires jquery to work
            PVARS = jQuery.extend(PVARS,opts);
            
            // jQuery event bindings etc
            
        }
    
    }
    
})(jQuery);



// Start the show. Uncomment the $(function()) calls if
// you're loading this script inbetween the browser's 
// <head> tags and not above the </body> end tag.

//$(function() { 


    JSWire.init({
        choice:true
    });


//})