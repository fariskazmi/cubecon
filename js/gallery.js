var app = angular.module('app', ['ngAnimate'])

app.controller('mainCtrl', function($scope) {
	$scope.boxes = [{
		name: 'Friends',
        image: 'https://source.unsplash.com/uAgLGG1WBd4/900x900',
        text: "First text",
        heading: "First heading"
	},{
		name: 'Free',
		image: 'https://source.unsplash.com/Cp-LUHPRpWM/900x900',
        text: "Second text",
        heading: "Second heading"
	},{
		name: 'Explore',
		image: 'https://source.unsplash.com/7BjmDICVloE/900x900',
        text: "Third text",
        heading: "Third heading"
	}, {
		name: 'Vast',
		image: 'https://source.unsplash.com/WLUHO9A_xik/900x900',
        text: "Fourth text",
        heading: "Fourth heading"
	}, {
		name: 'Playful',
		image: 'https://source.unsplash.com/b2-fBVrfx0o/900x900',
        text: "Fifth text",
        heading: "Fifth heading"
	}, {
		name: 'Grand',
		image: 'https://source.unsplash.com/Ixp4YhCKZkI/900x900',
        text: "Sixth text",
        heading: "Sixth heading"
	}, ];

	$scope.selected = [];
	$scope.selectBox = function(item, position) {
        window.removeEventListener('wheel', scrolling, true);
        window.removeEventListener('scroll', scrolling, true);
		$scope.selected = [{
			item: item,
			position: position
		}];
		$scope.$apply();
	}
	$scope.clearSelection = function() {
        window.addEventListener('wheel', scrolling, true);
        window.addEventListener('scroll', scrolling, true);
		$scope.selected = [];
	}
})

app.directive('box', function() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
			onSelect: "=",
			item: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;

			box.goFullscreen = function(e) {
				box.onSelect(box.item, e.target.getBoundingClientRect())
			}
		},
		link: function(scope, element) {
			element.bind('click', scope.box.goFullscreen)
			element.css({
				'background-image': 'url(' + scope.box.item.image + ')'
            })
		}
	}
})

app.directive('bigBox', function($timeout) {
	return {
		restrict: 'AE',
		scope: {},
		bindToController: {
			position: "=",
			selected: "=",
			onSelect: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;
		},
		link: function(scope, element) {
			var css = {}
			for (var key in scope.box.position) {
				css[key] = scope.box.position[key] + 'px';
			}
			
			element.css(css);

			$timeout(function() {
				element.css({
					top: '50%',
					left: '10%'
				})
				element.addClass('image-out');
			}, 200)

			$timeout(function() {
				element.css({
					width: '80%',
					height: '100%'
				})
			}, 500)
			
			$timeout(function(){
				element.addClass('show');
			}, 800)
		}
	}
})