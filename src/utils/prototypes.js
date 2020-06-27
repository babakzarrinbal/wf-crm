window.delay = async function(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
};
Number.prototype.round = function(digit) {
  let pow = window.Math.pow(10, digit);
  return window.Math.round(this * pow) / pow;
};
String.prototype.hashCode = function() {
  var hash = 0;
  if (this.length == 0) {
      return hash;
  }
  for (var i = 0; i < this.length; i++) {
      var char = this.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

window.jmoment = require("moment-jalaali");
// window.distanceinmath = (loc1, loc2, unit = "km") => {
//   if (!loc1 || !loc2) return null;
//   var p = 0.017453292519943295; // Math.PI / 180
//   var c = Math.cos;
//   var a =
//     0.5 -
//     c((loc2.lat - loc1.lat) * p) / 2 +
//     (c(loc1.lat * p) * c(loc2.lat * p) * (1 - c((loc2.lng - loc1.lng) * p))) /
//       2;
//   if (unit == "ml") {
//     return 7920 * Math.asin(Math.sqrt(a)); // 2 * R = 12742km , 7920 mile ; R = 6371 km 3960 ml,
//   } else if (unit == "km") {
//     return 12742 * Math.asin(Math.sqrt(a)); // 2 * R = 12742km , 7920 mile ; R = 6371 km 3960 ml,
//   } else {
//     return 0;
//   }
// };
