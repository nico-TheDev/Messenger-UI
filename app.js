console.log('working');

let appMessage = document.querySelector('.app__message'); // gets the message app 


// TIME
function getTime(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes() < 10 ? '0'+ time.getMinutes(): time.getMinutes();
    let currentTime = hour + ':' + minutes;
    let phoneTime = document.querySelector('.time');
phoneTime.textContent = currentTime;
}

let send = document.querySelector('.actions__send'); // gets the send button
let home = document.querySelector('.button3'); // gets the home button
let back = document.querySelector('.back'); // gets the back button
 
let newPage = document.querySelector('.new-screen'); // gets the new page class
let app = document.querySelector('.app'); // gets the app class
let pageOne = document.querySelector('.app > *'); // gets the pageOne items
let pageOneActions = document.querySelector('.actions'); //gets the action bar

let theText = document.querySelector('.app__text');
let theInsertMessage;

setInterval(getTime,1000); // refreshes clock

send.addEventListener('click',function(){ 

    //gets the message
    let messagebox = document.querySelector('.actions__message')
    // get the text of the message
    let newMessageContent = messagebox.value;

    if (newMessageContent === ''){
        console.log('Empty String');
    }

    else{
        //creates a clone of the app text element
        theInsertMessage = theText.cloneNode(true);
        //changes the clonedelement's text property to the new text value
        let finalMessage = theInsertMessage.textContent = newMessageContent;
        //adds the element to the body to access the properties;
        // document.body.appendChild(theInsertMessage);

        // Gets the css values of the new Message
        // let theInsert = getComputedStyle(theInsertMessage);
        // let heightOfInsert = theInsert.lineHeight;
        // let paddingTop = theInsert.paddingTop;
        // let paddingBottom = theInsert.paddingBottom;
        // let totalHeight = parseInt(heightOfInsert) + parseInt(paddingTop) + parseInt(paddingBottom);

        // adds the new Message as a child of the container which is the app message
        appMessage.appendChild(theInsertMessage);
        // empties the message
        messagebox.value = "";
        // appMessage.style.marginTop = appMessageMarginTop - totalHeight + 'px';

    }

    
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