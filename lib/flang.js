var flang = angular.module('flang', []);

flang.directive('piechart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        link: function(scope, elem, attrs) {
            var chart_data = scope[attrs.ngModel];
            var options = {
            colors: ["#38a", "#222", "#666"],
            series: {
                pie: {
                    show: true,
                    label: {
                        show: false,
                        formatter: function(label, series){
                            return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">'+label+'<br/>'+series.percent+'%</div>';
                        },
                        threshold: 0.1
                    }
                }
            },
            legend: {
                show: true,
                noColumns: 1, // number of colums in legend table
                labelFormatter: null, // fn: string -> string
                labelBoxBorderColor: "#888", // border color for the little label boxes
                container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                position: "ne", // position of default legend container within plot
                margin: [5, 10], // distance from grid edge to default legend container within plot
                backgroundOpacity: 0 // set to 0 to avoid background
            },
            grid: { 
                hoverable: false,
                clickable: false
            },
            }
            scope.$watch(attrs.ngModel, function(v){ 
                if(v) 
                {
                    chart = $.plot(elem, v, options);
                    elem.show();
                }
            });
        }
    };
});

