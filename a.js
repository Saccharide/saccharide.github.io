
function sendXHR(type, url, data, callback) {
  var newXHR = new XMLHttpRequest() || new window.ActiveXObject("Microsoft.XMLHTTP");
  newXHR.open(type, url, true);
  newXHR.send(data);
  newXHR.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
      callback(this.response);
    }
  };
}

function a(){
sendXHR("GET", "admin.html", null, function(response) { // response contains the content of the description.txt file.
 console.log(response); // Use innerHTML to get or set the html content.
  alert(3);
});
}
