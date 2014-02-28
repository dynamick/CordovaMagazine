'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('appVersion', ['version',
    function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
  }]).
directive('mySlideController', ['$swipe',
function ($swipe) {
        return {
            restrict: 'EA',
            link: function (scope, ele, attrs, ctrl) {
                var startX, pointX;
                $swipe.bind(ele, {
                    'start': function (coords) {
                        startX = coords.x;
                        pointX = coords.y;
                    },
                    'move': function (coords) {
                        var delta = coords.x - pointX;
                        // ...
                    },
                    'end': function (coords) {
                        // ...
                    },
                    'cancel': function (coords) {
                        // ...
                    }
                });
            }
        }
}]);