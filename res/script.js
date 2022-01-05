function get_ar() {

  var LANDSCAPE = 'landscape';
var PORTRAIT = 'portrait';
var SQUARE = 'square';
var IMAGE_PATH = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9487/';
var POSSIBLE_CSS_CLASS_NAMES = 'landscape portrait square ratio3by2 ratio4by3 ratio16by9 ratio16by10 ratio1by1';

var ratiosArray = ['16:9', '16:10', '3:2', '4:3', '1:1','4:3', '3:2', '16:10', '16:9'];
var ratioFloatsArray = [1.77, 1.6, 1.5, 1.33, 1, 0.75, 0.66, 0.625, 0.56];

function upd_l() {
   var width = $( window ).width();
   var height = $( window ).height();
   var currentRatioFloat = width/height;
   var matchedRatioFloat = parseFloat(closest(currentRatioFloat, ratioFloatsArray));
   var matchedRatio = ratiosArray[ratioFloatsArray.indexOf(matchedRatioFloat)];
   var orientation;
   if (matchedRatioFloat == 1) {
      orientation = SQUARE;
   } else if (matchedRatioFloat > 1) {
      orientation = LANDSCAPE;
   } else {
      orientation = PORTRAIT;
   }
   var filename = orientation + '_' + matchedRatio.replace(":", "by") + '.png';
   var imagePath = IMAGE_PATH + filename;
   var cssClassNames = orientation + ' ' + 'ratio' + matchedRatio.replace(":", "by");
   // console.log(imagePath);
   //
   // $('.width span').html( width + 'px' );
   // $('.height span').html( height + 'px' );
   // $('.currentRatioFloat span').html( Math.round(currentRatioFloat * 100) / 100 );
   // $('.matchedRatioFloat span').html( matchedRatioFloat );
   // $('.matchedRatio span').html( matchedRatio );
   // $('.orientation span').html( orientation );
   // $('.filename span').html( filename );
   // $('.css-class-names span').html( cssClassNames );
   //
   // $('.outer-wrapper').removeClass(POSSIBLE_CSS_CLASS_NAMES);
   // $('.outer-wrapper').addClass(cssClassNames);
   return matchedRatio;
}

function closest(num, arr) {
   var curr = arr[0];
   var diff = Math.abs(num - curr);
   for (var val = 0; val < arr.length; val++) {
      var newdiff = Math.abs(num - arr[val]);
      if (newdiff < diff) {
         diff = newdiff;
         curr = arr[val];
      }
   }
   return curr;
}

return upd_l();
}

function scroll_to(selector, time, container, off) {
  var time = time ? time : 400;
  var container = container ? container : 'html, body';
  var off = off ? off : 0;
  $(container).animate({
    scrollTop: $(selector).offset().top - off
  }, time);
}
