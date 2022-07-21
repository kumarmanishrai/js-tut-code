console.log("hello");
let divElm = document.createElement('div');
let text = document.createTextNode('this is my element. click to edit it');
divElm.appendChild(text);
//give element id. style and class
divElm.setAttribute('id', 'elem');
divElm.setAttribute('class', '');
divElm.setAttribute('style', 'border: 2px solid red; width:154px; margin:34px; padding: 23px');
//grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


//insert the element before element with id first
container.insertBefore(divElm, first);

console.log(divElm, container, first);

//add event listener to div elem
divElm.addEventListener('click', function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    let html = elem.innerHTML;
    divElm.innerHTML = `<textarea class="form-control" class="textarea" id="textarea" rows="3">${html}</textarea>`;
});