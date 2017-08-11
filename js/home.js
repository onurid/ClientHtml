app.controller('HomeController', function($scope) {
	
  $scope.message = 'Hello from HomeController';
  
  $scope.Test = function ()
  {
	alert(1);  
  };
  
   $scope.ProductList = [];
  
   $scope.GetProductList = function ()
   {
	    $scope.ProductList = [
	    { Name:"Portakal", Price:0.5, Description: "Portakal", ImagePath: "data/pic/meyveler/portakal/552394983196f8633cc580b6146d9942.jpg" },
		{ Name:"Elma", Price:1, Description: "Elma", ImagePath: "data/pic/meyveler/elma/1857bc2031244f8.jpg" },
		{ Name:"Muz", Price:3, Description: "Muz", ImagePath: "data/pic/meyveler/muz/1558047b86c364c.jpg" },
		{ Name:"Erik", Price:2, Description: "Erik", ImagePath: "data/pic/meyveler/erik/1657fca5d701cfa.jpg" }
		];
   };
  
   $scope.GetProductList();
  
});