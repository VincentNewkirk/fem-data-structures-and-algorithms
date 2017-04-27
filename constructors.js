const Apartment = function(sqMtr) {
  this.sqMtr = sqMtr;
};

Apartment.prototype.inquireSpace = function() {
  return this.sqMtr;
};

const Ueno = new Apartment(55);

console.log(Ueno.inquireSpace());
