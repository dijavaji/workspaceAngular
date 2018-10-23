/*Aqui escribimos piezas de nuestra aplicacion Angular. 
Encapsulamos codigo en los modulos, entonces esto hace que nuestro codigo sea 
mantenible, mas testeable y que tenga una mejor lectura.
En un modulo tambien definimos las dependencias de nuestra aplicacion, 
por ejemplo un modulo puede depender de otros 2 modulos. 
*/ 
var app = angular.module('miApp', []);	// Declaramos un modulo y el nombre de la aplicación "miApp"