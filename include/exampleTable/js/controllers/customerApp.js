var customerApp = angular.module("customerApp", []);
customerApp.controller("customerController", function ($scope) {
												$scope.list = model;
												$scope.addItem = function (order) {
																	if( order.customer != "" && !isNaN(parseFloat(order.number))) {
																			$scope.list.items.push({ number:order.number,
																									 dataOrder:order.dataOrder,
																									 customer: order.customer, 
																									 email:order.email,
																									 summa: order.summa 
																									});
																			$scope.summa = '';
																			$scope.number= '';	
																	}
												}
												$scope.removeItem = function(number,dataOrder,customer) {
													for (var i = 0; i < $scope.list.items.length; i++ ) {
														if ($scope.list.items[i].number == number && $scope.list.items[i].customer == customer ) {
															$scope.list.items.splice(i,1);
															break;
														}
													}
												};
});