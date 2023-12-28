<<<<<<< HEAD
var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    .when('/home',{
        templateUrl:'../pages/navigation.html',

    }).when('/register',{
        templateUrl:'../pages/registerpage.html',
        controller:'postcontrol'
        
    }).when('/login',{
        templateUrl:'../pages/loginpage.html',
        controller:'getcontrol'

    }).when('/dashboard',{
        templateUrl:'../pages/dashboardpage.html',
        controller:'getdashdata'

    }).when('/about',{
        templateUrl:'../pages/aboutpage.html',

    }).otherwise({
        redirectTo:"/home"
     })

});
=======
var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    .when('/home',{
        templateUrl:'../pages/navigation.html',

    }).when('/register',{
        templateUrl:'../pages/registerpage.html',
        controller:'postcontrol'
        
    }).when('/login',{
        templateUrl:'../pages/loginpage.html',
        controller:'getcontrol'

    }).when('/dashboard',{
        templateUrl:'../pages/dashboardpage.html',
        controller:'getdashdata'

    }).when('/about',{
        templateUrl:'../pages/aboutpage.html',

    }).otherwise({
        redirectTo:"/home"
     })

});
>>>>>>> 9545e20a93feee1bf998978b67c73a92db5dabca
