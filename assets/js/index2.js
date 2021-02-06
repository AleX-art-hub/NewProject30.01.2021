/* KNOPKA 
document.getElementById('id1').onclick=function (){
    //const button_id2=document.getElementById('id2');
    //button_id2.hidden = true
    document.getElementById('id2').hidden = true; //tak koroche
}*/

/*//"RICHAG"
let slider = document.querySelector('.slider');
let thumb = document.querySelector('.thumb');
thumb.onmousedown = function(event){
    event.preventDefault();
    let newShiftX = event.clientX - thumb.getBoundingClientRect().left;
    document.addEventListener('mousemove', onMouseMoveAction);
    document.addEventListener('mouseup', onMouseUpAction);

    function onMouseMoveAction(event){
        let leftPosition = event.clientX - newShiftX - slider.getBoundingClientRect().left;
        if(leftPosition<0) leftPosition=0;
        let rightPosition = slider.offsetWidth - thumb.offsetWidth;
        if(leftPosition > rightPosition) leftPosition=rightPosition;
        thumb.style.left = leftPosition + 'px';
        console.log('left:', leftPosition, 'right:', rightPosition);
        
    }

    function onMouseUpAction(){
        document.removeEventListener('mouseup', onMouseUpAction);
        document.removeEventListener('mousemove', onMouseMoveAction);
    }
}
*/


/* Home Work
Dan element div s id='elem'
- Dobavit emu class "www."
- Udalit u nego class "www"
- Proverit 
-
*/ 
let elem=document.getElementById('elem');
elem.classList.add('www');
elem.classList.remove('www');
let isContain = elem.classList.contains('www');
console.log('');
elem.innerText= "Hello!";
elem.addEventListener("click", hello);
function hello(event){
    alert('Element clicked');
}