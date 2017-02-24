socialNetworkApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/members', {
        templateUrl: 'pages/members.html',
        controller: 'membersController'
    })
    .when('/groups', {
        templateUrl: 'pages/groups.html',
        controller: 'groupsController'
    })
    .when('/photos', {
        templateUrl: 'pages/photos.html',
        controller: 'photosController'
    })
    .when('/profile', {
        templateUrl: 'pages/profile.html',
        controller: 'profileController'
    })
});