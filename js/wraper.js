function bind(el, evenType, callback) {
	if(typeof el.addEventListener === 'function') {
		el.addEventListener(evenType, callback, false);
	}else if(typeof el.attachEvent === 'function'){
		el.attachEvent('on' + evenType, callback);
	}
}

function mouseoverHandler (e) {
	var target = e.target || e.srcElement;
	var subject = document.getElementById('subject');
	var oli = subject.getElementsByTagName('li');
	for(var i=0; i<oli.length; i++) {
		oli[i].className = '';
	}
	
	while(target.tagName.toUpperCase() != 'LI' && target.tagName != 'BODY') {
		target = target.parentNode;
	}
	
	target.className = 'big';
}

function init() {
	var subject = document.getElementById('subject');
	var oli = subject.getElementsByTagName('li');

	for(var i=0; i<oli.length; i++) {
		bind(oli[i], 'mouseover', mouseoverHandler);
	}
}

init();