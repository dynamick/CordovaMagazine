angular.module('App.controller.post', [])

.controller('PostCntl', ['$scope', '$routeParams', '$location', 'Repository',
    function ($scope, $routeParams, $location, Repository) {

        $scope.params = $routeParams;
        $scope.items = Repository.data;
        $scope.post = Repository.getPost($routeParams.articleId);
        $scope.slideIndex = Repository.getPostIndex($routeParams.articleId);

        $scope.$watch('slideIndex', function(newValue, oldValue) {
            console.log(newValue, oldValue, $scope.items.length);
            if (newValue >= $scope.items.length -1 ) {
                console.log("siamo alla fine!!!!");
            }
           });

        $scope.pushSlide = function() {
        //    addSlides($scope.slides4, 'people', 3);
        }

        $scope.prev = function() {
            console.log("prev");
            $scope.slideIndex-=1;
        }

        $scope.next = function() {
            console.log("next");
            $scope.slideIndex+=1;
        }
/*
        $scope.logme = function (event) {
            console.log("questo è swipe");
            console.log(event);
        }

        $scope.goNext = function () {
            next = Repository.getNext($scope.post.id);
            if (next == false) {
                return false;
            } else {
                return '/articles/' + next;
            }
        }

        $scope.goPrev = function () {
            prev = Repository.getPrev($scope.post.id);
            if (prev == false) {
                return false;
            } else {
                return '/articles/' + prev;
            }
        }
*/






    }]);