/* KNOPKA 
document.getElementById('id1').onclick=function (){
    //const button_id2=document.getElementById('id2');
    //button_id2.hidden = true
    document.getElementById('id2').hidden = true; //tak koroche
}*/

//"RICHAG"
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

