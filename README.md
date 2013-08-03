An Angular.js wrapper for the jQuery Flot Chart library. Allows for reusable charts.


The five steps:

1. Include the required libs:
```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
<script src="lib/jquery-1.7.2.min.js"></script>
<script src="lib/jquery.flot.js"></script>
<script src="lib/jquery.flot.orderBars.js"></script>
<script src="lib/jquery.flot.pie.js"></script>
<script src="lib/jquery.flot.resize.js"></script>
<script src="lib/flang.js"></script>
<script src="app.js"></script>
```

2. Add the Flang module to your app:
```
var app = angular.module("flangExample", ["flang"]);
```

3. Sprinkle in the HTML, example:
```
<pie-chart style="height: 500px;" ng-model="example_data"></piechart>
```

4. Stash your data in your controller:
```
app.controller("flangCtrl", function ($scope, $http) {
    $scope.example_data =
    [
        { label: "Series1",  data: 10},
        { label: "Series2",  data: 30},
        { label: "Series3",  data: 90},
        { label: "Series4",  data: 70},
        { label: "Series5",  data: 80},
        { label: "Series6",  data: 110}
    ];
```

5. Enjoy reusable flot charts.
