/*const users = [
    {
        id: 1,
        name: 'name1',
        surname: "surname1",
        imageSrc: '#'
    },
    {
        id: 2,
        name: 'name2',
        surname: "surname2",
        imageSrc: '#'
    },
    {
        id: 3,
        name: 'name3',
        surname: "surname3",
        imageSrc: '#'
    },
];

const userListElem = document.getElementById('userList');

users.forEach((user)=>{
        userListElem.append(createUserListElem(user));
    });

function createUserImageElem({imageSrc}){
    const userImageContainerElem = document.createElement("div");
    userImageContainerElem.classList.add("userImageContainer");
    const userImageElem= document.createElement('img');
    userImageElem.classList.add("userImage");
    userImageElem.setAttribute("src", imageSrc);
    userImageElem.setAttribute("alt","user photo");
    userImageContainerElem.append(userImageElem);
    return userImageContainerElem;
}
//sozdanie odnoy novoy kartochki
function createUserFullNameElem({name, surname}){
    const userFullNameElem = document.createElement("h1");
    userFullNameElem.innerText = `${name} ${surname}`;
    return userFullNameElem;
}

function createUserCardElem(user){
    const userCardWrapperElem = document.createElement("div");
    userCardWrapperElem.classList.add("userCardWrapper");
    userCardWrapperElem.append(createUserImageElem(user));
    userCardWrapperElem.append(createUserFullNameElem(user));
    return userCardWrapperElem;
}

function createUserListElem(user){
    //sozdanie novogo elementa spiska
    const userListItemElem = document.createElement("li");
    //prisoedinyaem kartochku v li
    userListItemElem.append(createUserCardElem(user))
    //ustanavlivaem noviy attribut dlya li <li id=1></li>
    userListItemElem.setAttribute("id", user.id);
    //vivodim
    return userListElem;

}*/

/*
var rect = document.getElementById('rect');

rect.addEventListener('click', handlerFun2);

rect.addEventListener('mouseover', handlerFun2);

rect.addEventListener('mousemove', handlerFun2);

function handlerFun1(event){
    alert(event.type)
}
function handlerFun2(e){
    switch(e.type){
        case 'click': 
            e.target.style.backgroundColor = 'red';
            console.log(e.type);
            break;

        case 'mouseover': 
            e.target.style.backgroundColor = 'green';
            console.log(e.type);
            break;

        case 'mousemove': 
            e.target.style.backgroundColor = 'blue';
            console.log(e.type);
            break;

        default: 
            e.target.style.backgroundColor = 'black';
            console.log(e.type);
            break;
    }
}
*/

//Target: ukazivaet na element, na kotorom bilo vizvano sobitie
//type: ukazivaet na imya sobitiya


//Poluchaem blocki
const blocks = document.querySelectorAll('.changeColor');
//1 zadanie: po cliku izmenit cvet
for(let elem of blocks){
    elem.addEventListener("click", funChangeColor1);
}
function funChangeColor1(e){
    e.target.style.backgroundColor = "red";
    e.target.addEventListener("click", funChangeColor1);
}
function funChangeColor2(e){
    e.target.style.backgroundColor = "gray";
    e.target.removeEventListener("click", funChangeColor2);
    e.target.addEventListener("click", funChangeColor1);
}