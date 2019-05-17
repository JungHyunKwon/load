/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
		
		window.load = {};

		/**
		 * @name callback
		 * @param {object} event
		 * @since 2018-12-14
		 */
		function _callback(event) {
			//배열일 때
			if(load) {
				for(var i in load) {
					var loadI = load[i];

					//함수일 때
					if(typeof loadI === 'function') {
						loadI(event);
					}					
				}

				load = undefined;
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
}catch(e) {
	console.error(e);
}