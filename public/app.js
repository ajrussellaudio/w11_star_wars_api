var requestComplete = function() {
  if( this.status !== 200 ) return;
  var jsonString = this.responseText;
  var starshipsJSON = JSON.parse( jsonString );
  console.log( starshipsJSON );
}

var makeRequest = function( url, callback ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = callback;
  request.send();
}

var getShips = function() {
  var url = "https://swapi.co/api/starships";
  makeRequest( url, requestComplete );
}

window.onload = getShips;