console.log('working');

let appMessage = document.querySelector('.app__message');


// TIME

let time = new Date();
let hour = time.getHours();
let minutes = time.getMinutes() < 10 ? '0'+ time.getMinutes(): time.getMinutes();
let currentTime = hour + ':' + minutes;


let phoneTime = document.querySelector('.time');
phoneTime.textContent = currentTime;

let send = document.querySelector('.actions__send');
let home = document.querySelector('.button3');
let back = document.querySelector('.back');

let newPage = document.querySelector('.new-screen');
let app = document.querySelector('.app');
let pageOne = document.querySelector('.app > *');
let pageOneActions = document.querySelector('.actions');
send.addEventListener('click',function(){

    let appMessageMarginTop = parseInt(getComputedStyle(appMessage).marginTop);
    let messagebox = document.querySelector('.actions__message')
    // get the text of the message
    let newMessageContent = messagebox.value;

    

    let theInsertMessage = document.querySelector('.app__text').cloneNode(true);

    let finalMessage = theInsertMessage.textContent = newMessageContent;
    document.body.appendChild(theInsertMessage);

    // Gets the css values of the new Message
    let theInsert = getComputedStyle(theInsertMessage);
    let heightOfInsert = theInsert.lineHeight;
    let paddingTop = theInsert.paddingTop;
    let paddingBottom = theInsert.paddingBottom;
    let totalHeight = parseInt(heightOfInsert) + parseInt(paddingTop) + parseInt(paddingBottom);

    // adds the new Message as a child of the container which is the app message
    appMessage.appendChild(theInsertMessage);

    messagebox.value = "";
    // appMessage.style.marginTop = appMessageMarginTop - totalHeight + 'px';
    console.log(totalHeight,appMessageMarginTop);
    // Substract the margintop to the height of the new message
});


back.addEventListener('click',function(){
    console.log('back');
    newPage.style.transform = 'translateX(0)';
    pageOne.style.transform = 'translateX(100%)';
    pageOneActions.style.transform = 'translateX(100%)';
    pageOneActions.style.display = 'none'; 
    app.style.borderBottom = 'none';
});


function nextPage(){
    console.log('back');
    newPage.style.transform = 'translateX(-100%)';
    pageOne.style.transform = 'translateX(0)';
    pageOneActions.style.transform = 'translateX(0)';
    pageOneActions.style.display = 'flex'; 
    app.style.borderBottom = '1px solid gray';
}