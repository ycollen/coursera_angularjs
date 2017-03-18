(function(){
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
  var ToBuy = this;
  ToBuy.items = ShoppingListCheckOffService.getItems();
  ToBuy.bought = function (index){
    ShoppingListCheckOffService.bought(index);
  };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
  var AlreadyBought = this;
  AlreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
};

function ShoppingListCheckOffService (){
  // Initializing items to buy
  this.toBuyItems = [{ name: "cookies", quantity: 10 },
                { name: "pepsi",   quantity: 3 },
                { name: "chips",   quantity: 5 },
                { name: "juice",   quantity: 2 },
                { name: "coke",    quantity: 1 }];

  // Initializing bought items to an empty array
  this.alreadyBoughtItems = [];

  // return toBuyItems
  this.getItems = function () {return this.toBuyItems};

  // return already bought items
  this.getAlreadyBoughtItems = function(){return this.alreadyBoughtItems};
  // Buy an item i.e. remove it from toBuyItems and add it to alreadyBoughtItems
  this.bought = function(index) {
    this.alreadyBoughtItems.push(this.toBuyItems[index]);
    this.toBuyItems.splice(index, 1);
  };
};

})();
