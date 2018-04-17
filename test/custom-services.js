var userService = angular.module( 'userService', ['ngResource']);


userService.factory('UserList', ['$resource',
 	function($resource) {
 		return $resource("http://localhost:8080/UserManagement/rest/UserService/json/users", {}, {
 			get: {method: 'GET', cache: false, isArray: true},
 			save: {method: 'POST', cache: false, isArray: false}
 		});
 	}]);