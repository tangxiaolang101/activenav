document.addEventListener('DOMContentLoaded',function(){
	document.getElementById('main-navigation__button').addEventListener('click',function(e){
		e.preventDefault();
		this.classList.toggle('active');
		document.getElementById('main-header').classList.toggle('show');
	})
})