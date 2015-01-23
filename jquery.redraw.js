define([
  "jquery"
], function() {

  "use strict";

  jQuery.fn.redraw = function redraw(){

    var jQueryArray = this;
    this.each( _redraw );

    function _redraw( index ) {

      var element = jQueryArray[ index ];
      var originalDisplayValue = element.style.display;
      element.style.display = "none";
      var trick = element.offsetHeight;
      element.style.display = originalDisplayValue;
    }
  };
});
