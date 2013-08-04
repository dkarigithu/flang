var app = angular.module("flangExample", ["flang"]);

app.controller("flangCtrl", function ($scope, $http) { 
	$scope.pie_example = Object();
    $scope.pie_example.data = 
	[
		{ label: "Series1",  data: 10},
		{ label: "Series2",  data: 30},
		{ label: "Series3",  data: 90},
		{ label: "Series4",  data: 70},
		{ label: "Series5",  data: 80},
		{ label: "Series6",  data: 110}
	];

    $scope.pie_example.options = 
    {
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

    $scope.bar_example = Object();
	$scope.bar_example.data  = [[ [0, 3], [1, 3], [2, 5], [3, 7], [4, 8], [5, 10], [6, 11], [7, 9], [8, 5], [9, 13] ]];


    $scope.bar_example.options =
    {
    	bars: { show: true }
    }

});
