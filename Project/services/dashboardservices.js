<<<<<<< HEAD
app.service('dashboardservices', ['$http', function($http){
    var myurl = 'https://dummyjson.com/products';
    this.getdashboardData = function(cb){
        $http(
            {
                method:'GET',
                url:myurl
            }
        ).then(function(response){
            console.log(response);
            cb(response.data.products);
        
        },function(e){
            console.log(e);
        });
    }
=======
app.service('dashboardservices', ['$http', function($http){
    var myurl = 'https://dummyjson.com/products';
    this.getdashboardData = function(cb){
        $http(
            {
                method:'GET',
                url:myurl
            }
        ).then(function(response){
            console.log(response);
            cb(response.data.products);
        
        },function(e){
            console.log(e);
        });
    }
>>>>>>> 9545e20a93feee1bf998978b67c73a92db5dabca
}]);