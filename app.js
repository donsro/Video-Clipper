'use strict';

var app = angular.module('videoClipApp', ['ngRoute']);

app.controller('mainCtrl', ['$scope', 'videoFragments', function ($scope, videoFragments) {

	var videoEl = document.querySelector('#testVideo');

	$scope.list = videoFragments.getAll();
	$scope.addItem = videoFragments.addItem;
	$scope.removeItem = videoFragments.removeItem;

	$scope.edit = false;
	$scope.editFull = false;
	$scope.movieName = 'Full Movie';

	videoEl.addEventListener('loadedmetadata', function () {
		$scope.$apply( function () {
			$scope.videoUrl = videoEl.currentSrc.split('#')[0];
			$scope.duration = videoEl.duration;
			$scope.dRounded = Math.round($scope.duration);
		});
	}, false);

	$scope.playVideoFragment = function (start, end, name, itemIndex) {
		$scope.selected = itemIndex;
		$scope.clipName = name;
		if ( start !== -1 && end !== -1 ) { // If this is NOT a full video
			var videoFragment = '#t=' + start + ',' + end;
			videoEl.src = $scope.videoUrl + videoFragment;
		} else {
			videoEl.src = $scope.videoUrl; // Full video
		}
		videoEl.load();
		videoEl.play();
	};

	var playVideoTimeout = function (start, end, name, idx, scope) {
		return window.setTimeout( function () {
			scope.playVideoFragment(start, end, name, idx);
		}, 3000);
	};

	$scope.playAllFragments = function () {
		var fragCount = $scope.list.length - 1, i = 0, frag = $scope.list[0];
		videoEl.addEventListener('pause', function() {
			if (i < fragCount) {
				//videoEl.src = '';
				$scope.clipName = 'Timeout 3s';
				frag = $scope.list[++i];
				$scope.$apply(playVideoTimeout(frag.start, frag.end, frag.name, i, $scope));
			}
		}, false);
		$scope.playVideoFragment(frag.start, frag.end, frag.name, i);
	};
}]);

app.config(['$routeProvider', function (routeProvider) {
	routeProvider.
	when('/user', {
		templateUrl: 'user.html',
		controller: 'mainCtrl'
	}).
	otherwise({
		templateUrl: 'admin.html',
		controller: 'mainCtrl'
	});
}]);

app.service('videoFragments', function() {
	// Just a sample of dummy data for testing. Normally this should be $http service.
	var clips = [
		{ name: 'Clip 1', tag: 'a', start: 1, end: 5 },
		{ name: 'Clip 2', tag: 'b', start: 6, end: 9 },
		{ name: 'Clip 3', tag: 'c', start: 11, end: 14 },
		{ name: 'Clip 4', tag: 'a', start: 27, end: 31 },
		{ name: 'Clip 5', tag: 'b', start: 45, end: 48 }
	];
	return {
		getAll: function () {
			return clips;
		},
		addItem: function (item) {
			clips.push(item);
		},
		removeItem: function (itemIndex) {
			clips.splice(itemIndex,1);
		}
	}
});
