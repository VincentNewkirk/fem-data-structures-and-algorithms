var Stack = function() {
  this.storage = '';
};

Stack.prototype.push = function(val) {
  this.storage = this.storage + '/' + val;
};

Stack.prototype.pop = function() {

};

Stack.prototype.size = function() {

};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');
