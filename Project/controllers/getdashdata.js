<<<<<<< HEAD
app.controller('getdashdata', ['$scope','$location','dashboardservices', function($scope,$location,dashboardservices){
    $scope.dashdata;
    $scope.emailid = localStorage.getItem("useremail");

    if($scope.emailid != null){
        console.log($scope.emailid);
        $scope.data = dashboardservices.getdashboardData(function(data){
            $scope.dashdata = data;
            console.log($scope.dashdata);
        })
    }
    else{
        $location.path('/home');
    }
    
    
    $scope.sortbylow = () => {
        $scope.value = 'price';
        console.log($scope.value);
    }

    $scope.sortbyhigh = () => {
        $scope.value = '-price';
    }

    $scope.logout = () =>{
        console.log('hi');
        localStorage.clear();
        $location.path('#/home');
    }


}]) 
=======
app.controller('getdashdata', ['$scope','$location','dashboardservices', function($scope,$location,dashboardservices){
    $scope.dashdata;
    $scope.emailid = localStorage.getItem("useremail");

    if($scope.emailid != null){
        console.log($scope.emailid);
        $scope.data = dashboardservices.getdashboardData(function(data){
            $scope.dashdata = data;
            console.log($scope.dashdata);
        })
    }
    else{
        $location.path('/home');
    }
    
    
    $scope.sortbylow = () => {
        $scope.value = 'price';
        console.log($scope.value);
    }

    $scope.sortbyhigh = () => {
        $scope.value = '-price';
    }

    $scope.logout = () =>{
        console.log('hi');
        localStorage.clear();
        $location.path('#/home');
    }


}]) 
>>>>>>> 9545e20a93feee1bf998978b67c73a92db5dabca
