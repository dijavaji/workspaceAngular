app.controller('MainController',['$scope',function($scope){
	$scope.titulo = 'App Market';
	$scope.promocion = 'Top promocion';

	$scope.move = {
    icon: 'img/logo.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/logo.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/images.png',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };
  //coleccion de info
  $scope.apps = [ 
  { 
    icon: 'img/images.png', 
    title: 'MOVE', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'img/logo.jpg', 
    title: 'Shutterbugg', 
    developer: 'Chico Dusty', 
    price: 2.99 
  },
    { 
    icon: 'img/images.png', 
    title: 'acolitapp', 
    developer: 'diego', 
    price: 2.99 
  }
];

}])