app.controller('MainController',['$scope',function($scope){
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
	    cover: 'img/the-book-of-trees.jpg'  
    },
     { 
	    name: 'Program or be Programmed', 
	    price: 8, 
	    pubdate: new Date('2013', '08', '01'), 
	    cover: 'img/program-or-be-programmed.jpg' 
  	} 
	];

}])