var Person = function( params ) {
  // var params = JSON.parse( jsonString );
  this.name = params.name;
  this.height = params.height;
  this.mass = params.mass;
}

Person.prototype.bmi = function() {
  if( this.height === "unknown" || this.mass === "unknown" ) return "unknown";
  var heightInMeters = this.height / 100.0;
  var weight = parseInt( this.mass.replace(",",""))
  var bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
};