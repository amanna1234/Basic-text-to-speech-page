let  text = document.querySelector('#text');
let playbutton = document.querySelector('#play-btn');
let pausebutton = document.querySelector('#pause-btn');
let resumebutton = document.querySelector('#resume-btn');
let stopbutton = document.querySelector('#stop-btn');
let clearbutton = document.querySelector('#clear-btn')


// play button event
playbutton.addEventListener('click', ()=>{
    if(speechSynthesis.pending == false && speechSynthesis.paused == false ){
       
        let speechtext = new SpeechSynthesisUtterance(text.value);
        speechSynthesis.speak(speechtext)
    } else{
        return;
    }
})

// pause button event
pausebutton.addEventListener('click', ()=>{
    if(speechSynthesis.speaking == true){
        speechSynthesis.pause()
    }else{
        return;
    }
})

// resume button event
resumebutton.addEventListener('click', ()=>{
    if(speechSynthesis.paused == true){
        speechSynthesis.resume()
    }
    else{
        return;
    }
})

// stop button event
stopbutton.addEventListener('click', ()=>{
         speechSynthesis.resume();
         console.log('resumed')
         speechSynthesis.cancel();
         console.log('canceled')
})


// clear button event
clearbutton.addEventListener('click', ()=>{
    if(text.value != '' && speechSynthesis.speaking != true){
        text.value = ''
        console.log('cleared')
    }
})






    

























