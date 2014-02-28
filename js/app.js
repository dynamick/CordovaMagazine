'use strict';

var resolve = {
    delay: function ($q, $timeout) {
        console.log("delay");
        var delay = $q.defer();
        $timeout(delay.resolve, 0, false);
        return delay.promise;
    }
};

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  //'ngTouch',
  'ngAnimate',
  'angular-md5',
  //'hmTouchEvents',
  'angular-carousel',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  //'wu.masonry',
  'ui.bootstrap'
]).
config(['$routeProvider', '$locationProvider', '$sceProvider',
  /*
  function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
    }
*/

 function ($routeProvider, $locationProvider, $sceProvider) {
        $routeProvider.when('/articles', {
            templateUrl: 'partials/articles.html',
            controller: 'ArticlesCntl',
            //controllerAs: 'list',
            resolve: resolve
        });
        $routeProvider.when('/articles/:articleId', {
            templateUrl: 'partials/post.html',
            controller: 'PostCntl',
            //controllerAs: 'post',
            resolve: resolve
        });
        $routeProvider.when('/Book/:bookId/ch/:chapterId', {
            templateUrl: 'partials/chapter.html',
            controller: 'ChapterCntl',
            controllerAs: 'chapter',
            resolve: resolve
        });
        $routeProvider.otherwise({
            redirectTo: '/articles'
        });
        //$locationProvider.html5Mode(true);

        $sceProvider.enabled(false);

 }]).run(["$rootScope", "$http", "$location", "$timeout", 'Repository',
    function ($rootScope, $http, $location, $timeout, Repository) {

        Repository.fetchData();


}]);