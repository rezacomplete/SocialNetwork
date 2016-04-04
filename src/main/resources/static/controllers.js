socialNetworkApp.controller("homeController", function($scope, $route, $resource, $location, $http) {
    
    comment1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt eget ante eget feugiat. Praesent adipiscing tortor eu tincidunt tempus. Sed convallis est in ante sodales, sit amet consectetur leo commodo.";
    reply11 = "Sed convallis est in ante sodales, sit amet consectetur leo commodo.";
    reply12 = "Sed convallis est in ante sodales, sit amet consectetur leo commodo.";
    var replies1 = [{text:reply11}, {text:reply12}];
    var userDetail1 = {numberOfLikes:7, comment:comment1, userName:"DevUser1", replies:replies1};
    
    comment2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt eget ante eget feugiat. Praesent adipiscing tortor eu.";
    reply21 = "Sed convallis est in ante sodales, sit amet consectetur leo commodo.";
    var replies2 = [{text:reply21}];
    var userDetail2 = {numberOfLikes:8, comment:comment2, userName:"DevUser2", replies:replies2};

    comment3 = "Adipiscing elit. In tincidunt eget ante eget feugiat. Praesent adipiscing tortor eu tincidunt tempus. Sed convallis est in ante sodales, sit amet consectetur leo commodo.";
    reply31 = "Sed convallis est in ante sodales, sit amet consectetur leo commodo.";
    reply32 = "Sed convallis est in ante sodales, sit amet consectetur leo commodo.";
    var replies3 = [{text:reply31}, {text:reply32}];
    var userDetail3 = {numberOfLikes:2, comment:comment3, userName:"DevUser3", replies:replies3};
    
    $scope.userDetails = [userDetail1, userDetail2, userDetail3];
    $scope.comment = "";
        
    $scope.addWallComment = function() {
    	$http.post("/addComment", {comment:$scope.comment})
    		 .then(function(response) {
    			 var userDetail = {numberOfLikes:0, comment:response.data, userName:"DevUserXXX", replies:[]};
    			 $scope.userDetails.unshift(userDetail);
    			 $scope.comment = "";
    		  });
    }
    	
    $scope.addReplyToComment = function() {
    	$http.post("/addReply", {reply:$scope.reply})
    		 .then(function(response)) {
    			
    		 }
    }
    
    groupName1 = "Sample Group One";
    groupDescription1 = "This is a Dobble social network sample group";
    var group1 = {name:groupName1, description:groupDescription1};

    groupName2 = "Sample Group Two";
    groupDescription2 = "This is a Dobble social network sample group";
    var group2 = {name:groupName2, description:groupDescription2};
    
    groupName3 = "Sample Group Three";
    groupDescription3 = "This is a Dobble social network sample group";
    var group3 = {name:groupName3, description:groupDescription3};
    $scope.groups = [group1, group2, group3];

});

socialNetworkApp.controller("membersController", function($scope, $route, $resource, $location) {
    $scope.members = [{name:"SomeUser01"}, {name:"SomeUser02"}, {name:"SomeUser03"}, {name:"SomeUser04"}];
});

socialNetworkApp.controller("groupsController", function($scope, $route, $resource, $location) {
});

socialNetworkApp.controller("photosController", function($scope, $route, $resource, $location) {
});

socialNetworkApp.controller("profileController", function($scope, $route, $resource, $location) {
});