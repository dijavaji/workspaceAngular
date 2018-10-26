/*
Los controladores es donde definimos el comportamiento de nuestra aplicacion 
definiendo funciones y valores.
*/
app.controller('MainController',['$scope',function($scope){		// Declaramos el controlador llamado "MainController"
	$scope.titulo = 'technoloqie top seller';
	$scope.promocion = 'cualquier valor';
	$scope.producto = {
		nombre:'Nombre imagen',
		precio: 19,
		pubfecha: new Date('2014', '03', '08')
	};
	$scope.productos = [
	{
	 	name: 'The Book of Trees', 
	    price: 19, 
	    pubdate: new Date('2014', '03', '08'), 
	    cover: 'img/images.png',
	    likes: 0,
    	dislikes: 0  
    },
     { 
	    name: 'Program or be Programmed', 
	    price: 8, 
	    pubdate: new Date('2013', '08', '01'), 
	    cover: 'img/logo.jpg' ,
	    likes: 0,
    	dislikes: 0
  	} 
	];
	$scope.masUno = function(index) { 
  		$scope.productos[index].likes += 1; 
	};
	$scope.menosUno = function(index) { 
  		$scope.productos[index].dislikes -= 1; 
	};

}])