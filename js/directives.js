angular.module('resume-directives', [])


.directive('navbar', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'http://steven-daniell-jackson.github.io/Client-Side-Developer-Questions/' 
  }; 
});