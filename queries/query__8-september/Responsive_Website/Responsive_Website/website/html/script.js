window.addEventListener('load', () => {
	window.App = {};

	App.totalProgressViewPort = 90;

	App.singleProgressSingleViewPort = App.totalProgressViewPort / 100;
	App.count = 0;
	App.progressBarElement = document.querySelector('.progress-bar');
	App.increaseWidthRecusively = function(){
		App.progressBarElement.style.width = (App.singleProgressSingleViewPort * App.count) + 'vw';
		App.count++;
		debugger;
		if(App.count >= 100){
			document.querySelector('.overlay').style.display = 'none';
			document.querySelector('.progress').style.display = 'none';
		}
	} 
	if(App.count < 100){
		setInterval(function(){ App.increaseWidthRecusively(); }, 30);
	}

});