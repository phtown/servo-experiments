function Demo() {
	var iframes;
	var el = document.createElement('div');
	
	var urls = [
		'https://en.wikipedia.org/wiki/Mozilla',
		'https://en.wikipedia.org/wiki/Servo_(layout_engine)',
		'https://en.wikipedia.org/wiki/Rust_(programming_language)',
		'https://en.wikipedia.org/wiki/Compiler'
	];

	iframes = urls.map((url) => {
		var iframe = document.createElement('iframe');
		iframe.style.display = 'block';
		iframe.className = 'dormant';
		iframe.src = url;
		iframe.innerText = url;


		return iframe;
	});

	var selected = null;

	iframes.forEach(appender(el));
	window.addEventListener('keydown', onNumberKeyPress(_.partial(setSelected)));

	function setSelected(n) {
		(selected || {}).className = 'dormant';
		selected = iframes[n - 1];
		selected.className = '';
	}

	this.animate = function(t) {
		var t_ = t * 0.0025;
		var radius = 100;
		var num = iframes.length;
		var alpha = 0;
		var angIncrease = Math.PI * 2 / num;
		iframes.forEach(function(iframe) {
			var beta = t_ + alpha;
			var x = Math.round(radius * Math.sin(beta));
			var y = Math.round(radius * Math.cos(beta));
			//applyTranslate(iframe, x, y);
			
			alpha += angIncrease;
		});
		
	};

	this.dom = el;
}
