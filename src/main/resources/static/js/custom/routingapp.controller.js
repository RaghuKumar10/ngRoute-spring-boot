(function(){
	var routingApp = angular.module("routingApp")
	.controller("homeCtrl", function($route) {
		this.message = "Welcome AngularJs with Spring Boot";
		
	})
	.controller("coursesCtrl", function(courseService) {
		var self = this;
		courseService.getCourses().then(function(courses){
			self.courses = courses;
		});
	})
	.controller("studentsCtrl", function(studentService, $route, $scope, $location) {
		var slef = this;
		studentService.getStudents().then(function(students){
			slef.students = students;
		});
		
		$scope.$on("$routeChangeStart", function(event, next, current) {
			if(!confirm("Are sure you want to leave this page to " + next.$$route.originalPath)){
				event.preventDefault();
			}
		});
		this.reloadStudents = function(){
			console.log("route reload will occur");
			$route.reload();
		};
		
		this.search = function(){
			if(this.keyword){
				$location.url("/Students/"+this.keyword);
			}
			else{
				alert("please enter a keyword");
			}
		};
		
		$scope.$on("$locationChangeStart", function(event, next, current) {
			if(!confirm("Are sure you want to leave this page to " + next)){
				event.preventDefault();
			}
		});
		
		
		/**
		 * all route change events
		 * routeChangeStart
		 * routeChangeSuccess
		 * locationChangeStart
		 * locationChangeSuccess
		 * */
		
	})
	.controller("studentDetailCtrl", function(studentService,$routeParams) {
		var slef = this;
		studentService.getStudent($routeParams.id).then(function(student){
			slef.student = student;
		});
	})
})();