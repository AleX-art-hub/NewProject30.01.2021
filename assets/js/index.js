const users = [
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
        userListElem.append(creaateUserListElem(user));
    });

function createUserListElem(user){
    //sozdanie novogo elementa spiska
    const userListItemElem = document.createElement("li");

    //kontainer dlya kartochki/ novayta kartochka
    const userCardWrapperElem = document.createElement("div");
    //userCardWrapperElem.setAttribute("class", "userCardWrapper"); ili tak
    userCardWrapperElem.classList.add("userCardWrapper");// ili tak

    //kontainer dlya izobrazheniya polzovatelya
    const userImageContainerElem = document.createElement("div");
    userImageContainerElem.classList.add("userImageContainer");

    //samo izobrazhenie polzovatelya
    const userImageElem= document.createElement('img');
    userImageElem.classList.add("userImage");
    userImageElem.setAttribute("src", user.imageSrc);
    userImageElem.setAttribute("alt","user photo");

    //prisoedinyaem izobrazhenie v konteiner izobrazheniya
    userImageContainerElem.append(userImageElem);

    //prisoedinyaem kontainer foto v kartochku
    userCardWrapperElem.append(userImageContainerElem);

    //sozdayom FullName
    const userFullName = document.createElement("h1");
    userFullName.innerText = `${user.name} ${user.surname}`;
    userCardWrapperElem.append(userFullName);

    //prisoedinyaem kartochku v li
    userListItemElem.append(userCardWrapperElem)

    //ustanavlivaem noviy attribut dlya li <li id=1></li>
    userListItemElem.setAttribute("id", user.id);

    //vivodim
    return userListElem;

}

