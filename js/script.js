const burger = document.querySelector('.header__burger-icon'),
menu = document.querySelector('.header__list'),
body = document.querySelector('body');
document.addEventListener("click", open);
function open (event){
	if(event.target.closest('.header__burger-icon')){
		burger.classList.toggle('header__burger-icon_active');
		menu.classList.toggle('header__list_active');
		body.classList.toggle('lock');
	} if (!event.target.closest('.header__burger-icon')) {
		burger.classList.remove('header__burger-icon_active');
		menu.classList.remove('header__list_active');
		body.classList.remove('lock');
	}
}
const width = document.querySelector('.what__row').offsetWidth,
track = document.querySelector('.what__track'),
dots = document.querySelectorAll('.dot'),
count = document.querySelectorAll('.what__columt').length;
let position = 0;
function prev(){
	position--;
	if(position < 0){
		position = width-1;
	}
	scroll();
	pointer(position);
}
function next(){
	position++;
	if(position >= width){
		position = 0;
	}
	scroll();
	pointer(position);
}
function scroll(){
	track.style.transform = `translate(${-width * position}px)`;
}
function pointer(index){
	dots.forEach(item => item.classList.remove('dot_active'));
	dots[index].classList.add('dot_active');
}
dots.forEach((dot, index) => {
	dot.addEventListener("click", () =>{
		position = index;
		scroll();
		pointer(position);
	})
})