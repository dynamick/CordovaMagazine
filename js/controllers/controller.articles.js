angular.module('App.controller.articles', [ ])

    .controller('ArticlesCntl', ['$rootScope', '$routeParams', 'Repository', function ( $scope, $routeParams, Repository ) {
            this.params = $routeParams;

            $scope.init = function () {
                $scope.items = Repository.data;
            }

    }])

