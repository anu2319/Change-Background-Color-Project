let colors=['red','blue','green','orange','pink','yellow','violet','black'];

let button=document.getElementById('button');

button.addEventListener('click',function(){
	var randomcolor=colors[Math.floor(Math.random()*colors.length)];
	
	let container=document.getElementById('container');
	container.style.background=randomcolor;
})