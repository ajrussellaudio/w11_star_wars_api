var Person = function( params ) {
  // var params = JSON.parse( jsonString );
  this.name = params.name;
  this.height = params.height;
  this.homeworld = makeRequest( params.homeworld, function() {
    if( this.status !== 200 ) return;
    var jsonString = this.responseText;
    var homeworldJSON = JSON.parse( jsonString );
    console.log( homeworldJSON );
    return homeworldJSON.name;
  })
}