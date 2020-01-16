let guests = {
    adults: 0,
    children: 0,
    babies: 0
};
let adultsValue = document.querySelector("#adultsValue");
let adultsPlus = document.querySelector("#adultsPlus");
let adultsMinus = document.querySelector("#adultsMinus");

adultsPlus.addEventListener( 'click', () => {
    guests.adults += 1;  
    adultsValue.textContent = guests.adults;
});

adultsMinus.addEventListener( 'click', () => {
    guests.adults -= 1;  
    adultsValue.textContent = guests.adults;
});

let childrenValue = document.querySelector("#childrenValue");
let childrenPlus = document.querySelector("#childrenPlus");
let childrenMinus = document.querySelector("#childrenMinus");

childrenPlus.addEventListener( 'click', () => {
    guests.children += 1;  
    childrenValue.textContent = guests.children;
});

childrenMinus.addEventListener( 'click', () => {
    guests.children -= 1;  
    childrenValue.textContent = guests.children;
});


let babiesValue = document.querySelector("#babiesValue");
let babiesPlus = document.querySelector("#babiesPlus");
let babiesMinus = document.querySelector("#babiesMinus");

babiesPlus.addEventListener( 'click', () => {
    guests.babies += 1;  
    babiesValue.textContent = guests.babies;
});

babiesMinus.addEventListener( 'click', () => {
    guests.babies -= 1;  
    babiesValue.textContent = guests.babies;
});


let guestsCancel = document.querySelector("#guestsCancel");
let guestsApply = document.querySelector("#guestsApply");
let questsInput = document.querySelector("#questsInput");
let questsBlock = document.querySelector(".guests");


guestsApply.addEventListener( 'click', () => {
    questsInput.value = guests.adults + guests.children + guests.babies;
    questsBlock.style.visibility = "hidden";
});

guestsCancel.addEventListener( 'click', () => {
    questsBlock.style.visibility = "hidden";
});

questsInput.addEventListener( 'click', () => {
    questsBlock.style.visibility = "visible";
});
