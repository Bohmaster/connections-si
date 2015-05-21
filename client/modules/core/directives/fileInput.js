angular
  .module('uai.module.core')
  .directive('fileInput', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
        elm.bind('change', function() {
          $parse(attrs.fileInput)
            .assign(scope, elm[0].files);
            scope.$apply();
        })
      }
    }
  });