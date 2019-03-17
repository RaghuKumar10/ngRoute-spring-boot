(function(){
	var cousesModule = angular.module("routingApp");
	
	cousesModule.service("courseService", function($http) {
		var self = this;
		
		self.getCourses = function(){
			return $http.get("/courses").then(function(response) {
				return response.data;
			}, function(reason) {
				console.log(reason);
			}, function(notification) {
				console.log(notification);
			});
		};
	});
	
})();