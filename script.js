var b=document.getElementById('enter');
var i=document.getElementById('userinput');
var ul=document.getElementById('ul');


function inputlength(){

return	i.value.length >0
}

function createListItems(){
	var li =document.createElement('li'); 
	li.appendChild(document.createTextNode(i.value));
	ul.appendChild(li);
	i.value='';
}

function buttonPress(){
if(inputlength() >0){	
	createListItems();
	}
}
function keyPress(e){
	if(inputlength() >0 &&e.keyCode===13){	
		createListItems();
	}

}

b.addEventListener('click',buttonPress);
i.addEventListener('keypress',keyPress);