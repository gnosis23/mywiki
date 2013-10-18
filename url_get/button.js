
var app = angular.module('myApp',[]);

app.run(function ($rootScope) {
	$rootScope.output = "";
});

var get_url = function (inputStr) {

	// 	REMOVE - CJK CHARACTER
	//  http://stackoverflow.com/questions/1366068
	//                /whats-the-complete-range-for-chinese-characters-in-unicode
	var outputStr = inputStr.replace(/[\u4E00-\u9FFF]+/g, "");
	
	//	REMOVE http://www[dfd] .baidu[A哈哈] .com 
	outputStr = outputStr.replace(/\s*\[[^\]]*\]\s*/g, "");
	return outputStr;
}


app.controller('ctrl', function($scope){
	$scope.trans = function(){
		if($scope.input != undefined)
			$scope.output = get_url($scope.input);
	};
});
