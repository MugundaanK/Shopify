<<<<<<< HEAD
app.controller('postcontrol', ['$scope', 'userservices','$location', function($scope, userservices, $location){
    $scope.postData=function(){
        // var pattern = !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

        // console.log('hi');
        var userobj={
            fnmae:$scope.fname,
            lname:$scope.lname,
            email:$scope.email,
            password:$scope.password
        };
            
        // Perform the password regex validation
        if ($scope.password.length < 6 ) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        // Check if passwords match
        else if ($scope.password !== $scope.confirmpassword) {
            alert("Passwords does not match.");
            return;
        }
        $scope.data = userservices.getuserData(function(data){       
            $scope.dataarr = data;
            var state = true;
    
            for(let i of data){
                if(($scope.email != null)&&($scope.email == i.email) ){   
                    alert("The User Email-id is Already Existing Please Login");
                    state = false;
                    $location.path('/login');
                }
            }
            if(state){
                userservices.postuserData(userobj, function(data){
                    console.log(data);
                    $location.path('/login');
                });
            }
        }); 
    }
    $scope.showPassword = false;
    $scope.showCpassword = false;

    $scope.passwordVisibility = function() {
        // console.log('showpassword');
        $scope.showPassword = !$scope.showPassword;
    }
    $scope.confirmpasswordVisibility = function() {
        // console.log('showconfirmpassword');
        $scope.showCpassword = !$scope.showCpassword;
    }
}])



=======
app.controller('postcontrol', ['$scope', 'userservices','$location', function($scope, userservices, $location){
    $scope.postData=function(){
        // var pattern = !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

        // console.log('hi');
        var userobj={
            fnmae:$scope.fname,
            lname:$scope.lname,
            email:$scope.email,
            password:$scope.password
        };
            
        // Perform the password regex validation
        if ($scope.password.length < 6 ) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        // Check if passwords match
        else if ($scope.password !== $scope.confirmpassword) {
            alert("Passwords does not match.");
            return;
        }
        $scope.data = userservices.getuserData(function(data){       
            $scope.dataarr = data;
            var state = true;
    
            for(let i of data){
                if(($scope.email != null)&&($scope.email == i.email) ){   
                    alert("The User Email-id is Already Existing Please Login");
                    state = false;
                    $location.path('/login');
                }
            }
            if(state){
                userservices.postuserData(userobj, function(data){
                    console.log(data);
                    $location.path('/login');
                });
            }
        }); 
    }
    $scope.showPassword = false;
    $scope.showCpassword = false;

    $scope.passwordVisibility = function() {
        // console.log('showpassword');
        $scope.showPassword = !$scope.showPassword;
    }
    $scope.confirmpasswordVisibility = function() {
        // console.log('showconfirmpassword');
        $scope.showCpassword = !$scope.showCpassword;
    }
}])



>>>>>>> 9545e20a93feee1bf998978b67c73a92db5dabca
