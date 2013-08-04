var flang = angular.module('flang', []);

flang.directive('pieChart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        link: function(scope, elem, attrs) {
            scope.$watch(attrs.ngModel, function(v){ 
                if(v) 
                {
                    chart = $.plot(elem, v.data, v.options);
                    elem.show();
                }
            });
        }
    };
});

flang.directive('barChart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        link: function(scope, elem, attrs) {
            scope.$watch(attrs.ngModel, function(v){
                if(v)
                {
                    chart = $.plot(elem, v.data, v.options);
                    elem.show();
                }
            });
       }
    }; 
});
