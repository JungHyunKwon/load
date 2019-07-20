/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	var _toString = Object.prototype.toString;

	window.load = {};

	/**
	 * @name isArray
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	function _isArray(value) {
		return _toString.call(value) === '[object Array]';
	}

	/**
	 * @name callback
	 * @param {object} event
	 * @since 2018-12-14
	 */
	function _callback(event) {
		//배열일 때
		if(_isArray(load)) {
			for(var i = 0, loadLength = load.length; i < loadLength; i++) {
				var element = load[i];

				//함수일 때
				if(typeof element === 'function') {
					element(event);
				}					
			}
		}	
	}
	
	//addEventListener가 있을 때
	if(window.addEventListener) {
		window.addEventListener('load', function(event) {
			_callback(event);
		}, false);
	
	//attachEvent가 있을 때
	}else if(window.attachEvent) {
		window.attachEvent('onload', function(event) {
			_callback(event);
		});
	}
})();