/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	var toStr = Object.prototype.toString;

	window.load = [];

	/**
	 * @name isArray
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	function isArray(value) {
		return toStr.call(value) === '[object Array]';
	}

	/**
	 * @name callback
	 * @param {object} event
	 * @since 2018-12-14
	 */
	function callback(event) {
		//배열일 때
		if(isArray(load)) {
			for(var i = 0, loadLength = load.length; i < loadLength; i++) {
				var value = load[i];

				//함수일 때
				if(typeof value === 'function') {
					value(event);
				}					
			}
		}	
	}
	
	//addEventListener가 있을 때
	if(window.addEventListener) {
		window.addEventListener('load', callback, false);
	
	//attachEvent가 있을 때
	}else if(window.attachEvent) {
		window.attachEvent('onload', callback);
	}
})();