(function() {
	var studentModule = angular.module("routingApp");
	studentModule.service("studentService", function($http) {
		var self = this;

		self.getStudents = function() {
			return $http.get("/students").then(function(response) {
				return response.data;
			}, function(reason) {
				console.log(reason);
			}, function(notification) {
				console.log(notification);
			})
		};

		self.getStudent = function(id) {
			return $http.get("/student/"+id).then(function(response) {
				return response.data;
			}, function(reason) {
				console.log(reason);
			}, function(notification) {
				console.log(notification);
			})
		};

		self.deleteStudent = function(id) {
			return $http.delete("/student/"+id).then(function(response) {
				return response.data;
			}, function(reason) {
				console.log(reason);
			}, function(notification) {
				console.log(notification);
			})
		}

	});
})();