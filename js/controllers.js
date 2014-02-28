'use strict';

/* Controllers */

angular.module( 'myApp.controllers', [ 'App.controller.articles', 'App.controller.post' ] ).
controller('MainCntl', ['$scope', '$route', '$routeParams', '$location',
        function ($scope, $route, $routeParams, $location) {
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;

        var oldLocation = '';
        $scope.$on('$routeChangeStart', function (angularEvent, next) {
            console.log("routeChangeStart");
            var isDownwards = true;
            if (next && next.$$route) {
                var newLocation = next.$$route.originalPath;
                if (oldLocation !== newLocation && oldLocation.indexOf(newLocation) !== -1) {
                    isDownwards = false;
                }
                oldLocation = newLocation;
            }
            $scope.isDownwards = isDownwards;
        });

        $scope.go = function (path) {
            console.log("goooo: " + path);
            if (path != false) {
                $location.path(path);
            }
        }


    }]);
