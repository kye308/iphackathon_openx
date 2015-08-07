
var ref = new Firebase("https://glowing-heat-7408.firebaseio.com/");

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  var appdata = snapshot.val();
  console.log(appdata.toilets);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});