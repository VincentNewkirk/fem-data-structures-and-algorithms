var Stack = function() {
  this.storage = '';
};

Stack.prototype.push = function(val) {
  if (!this.storage) {
    this.storage = val;
  } else {
    this.storage = this.storage + '/' + val;
  }
};

Stack.prototype.pop = function() {
  const currentStorage = Array.from(this.storage).reverse();
  let keepGoing = true;
  currentStorage.forEach((element, index) => {
    if (element === '/' && keepGoing) {
      currentStorage.splice(0, index + 1);
      keepGoing = false;
    }
  });
  currentStorage.reverse();
  this.storage = currentStorage.join('');
};

Stack.prototype.size = function() {
  if (!this.storage) {
    return 0;
  };
  let itemCount = 1;
  const currentStorage = Array.from(this.storage).reverse();
  currentStorage.forEach((item) => {
    if (item === '/') {
      itemCount += 1;
    }
  });
  return itemCount;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');
myWeeklyMenu.push('Soba');
myWeeklyMenu.pop();
myWeeklyMenu.push('Coffee');
