var app = angular.module("routingApp", ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);
	//$routeProvider.caseInsensitiveMatch = true;
	$routeProvider
	.when("/Home",{
		templateUrl: "/webpages/home.html",
		controller: "homeCtrl",
		controllerAs: "home"
		
	})
	.when("/Courses",{
		templateUrl: "/webpages/courses.html",
		controller: "coursesCtrl",
		controllerAs: "ctrl"
	})
	.when("/Students",{
		templateUrl: "/webpages/students.html",
		controller: "studentsCtrl",
		controllerAs: "ctrl"
	})
	.when("/Students/:id",{
		templateUrl: "/webpages/studentDetail.html",
		controller: "studentDetailCtrl",
		controllerAs: "ctrl"
	})
	.otherwise({
		redirectTo : "/Home"
	});
});

