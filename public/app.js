var people = [];

var appendPerson = function( things ) {
  var target = document.querySelector("#content");
  things.forEach( function(item) {
    target.appendChild(item);
  })
}

var createH3 = function( tag, person ) {
  var h3 = document.createElement('h3');
  h3.innerText = tag + ": " + person.name;
  return h3;
}

var createPTag = function( tag, attribute ) {
  var pTag = document.createElement('p');
  pTag.innerText = tag + ": " + attribute;
  return pTag;
}

var addPerson = function( person ) {
  var name = createH3( "Name", person );
  var height = createPTag( "Height", person.height );
  // var homeworld = createPTag( "Homeworld", person.homeworld );
  appendPerson( [ name, height ] )
}

var addPeople = function( people ) {
  people.forEach( function( person ) {
    addPerson( person )
  });
}

var requestComplete = function() {
  if( this.status !== 200 ) return;
  var jsonString = this.responseText;
  var response = JSON.parse( jsonString );
  if( response.next ) makeRequest( response.next, requestComplete );
  var people = response.results.map( function( params ) {
    console.log(params);
    return new Person(params);
  });
  addPeople( people );
}

var makeRequest = function( url, callback ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = callback;
  request.send();
}

var getData = function() {
  var url = "http://swapi.co/api/people/";
  makeRequest( url, requestComplete );
}

window.onload = getData;