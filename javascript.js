
const numberInput = document.getElementById('numberInput');
const callingP = document.getElementById('callingP');
const enterNumberDiv = document.getElementById('enterNumberDiv');
const callBtn = document.getElementById('CallBtn');
const error = document.getElementById('ErrorHandler');
const callingDiv = document.getElementById('calling');
const timeStamp = document.getElementById('time')
const callSound = new Audio('soundEffect.mp3');
const called = document.getElementById('calledDiv');
const videoDiv = document.querySelector('.videoDiv');
const phoneDiv = document.getElementById('phoneDiv');
const v1 = document.getElementById('playV1')
const v2 = document.getElementById('playV2')
let callState = 'number'

const numberClick = (id) => {
    if (numberInput.value.length > 9) {
        return
    }
    numberInput.value = (numberInput.value + id);
    callingP.innerText = ('Calling... ' + numberInput.value)
}


const handleMe = () => {
    callingP.innerText = ('Calling... ' + numberInput.value)

    if (numberInput.value.length > 9) {
        return numberInput.value = numberInput.value
    }
}



const call = () => {
    if (numberInput.value.length < 10) {
        error.innerText = 'Enter valid number';
        error.classList.add('error')
        return
    }

    if (callState === 'number') {
        enterNumberDiv.style.display = 'none';
        callingDiv.style.display = 'flex';
        error.classList.remove('error')
        error.innerText = 'Enter a Mobile Number to call'
        callBtn.innerText = 'END';
        callBtn.classList.add('called');
        callState = 'callingasdasd';
        callSound.play();
        const timeStop = Math.round(Math.random() * 2) + 1
        setTimeout(() => {
            callingDiv.style.display = 'none';
            videoDiv.style.display = 'flex'
            v1.play()
            phoneDiv.style.display = 'none'
            callSound.pause()
        }, 3000)
        return
    }

    if (callState === '54') {
        enterNumberDiv.style.display = 'flex';
        callingDiv.style.display = 'none';
        callBtn.innerText = 'CALL';
        callBtn.classList.remove('called');
        callState = 'number';
        videoDiv.style.display = 'none'
        phoneDiv.style.display = 'flex'
        isMusicStopped = true
        return
    }
}

// callSound.addEventListener("ended", () => {
//     enterNumberDiv.style.display = 'flex';
//     callingDiv.style.display = 'none';
//     callBtn.innerText = 'CALL';
//     callBtn.classList.remove('called');
//     callState = 'number';
//     isMusicStopped = true
// });

let pr = 0

const callEnd = ()=>{
    if (pr === 0) {
        const vid1 = document.getElementById('hVid1');
        vid1.style.display = 'none';
        const vid2 = document.getElementById('hVid2');
        vid2.style.display = 'flex';
        v1.pause()
        v2.play()
        console.log(pr)
        pr++
        return
    }
    if(pr === 1){
        enterNumberDiv.style.display = 'flex';
        callingDiv.style.display = 'none';
        callBtn.innerText = 'CALL';
        callBtn.classList.remove('called');
        callState = 'number';
        const vid1 = document.getElementById('hVid1');
        vid1.style.display = 'flex';
        const vid2 = document.getElementById('hVid2');
        vid2.style.display = 'none';
        v2.pause()
        videoDiv.style.display = 'none'
        phoneDiv.style.display = 'flex'
        isMusicStopped = true
        pr = 0;
        return
    }
}

v1.addEventListener('ended',()=>{
    enterNumberDiv.style.display = 'flex';
        callingDiv.style.display = 'none';
        callBtn.innerText = 'CALL';
        callBtn.classList.remove('called');
        callState = 'number';
        const vid1 = document.getElementById('hVid1');
        vid1.style.display = 'flex';
        const vid2 = document.getElementById('hVid2');
        vid2.style.display = 'none';
        v2.pause()
        videoDiv.style.display = 'none'
        phoneDiv.style.display = 'flex'
        isMusicStopped = true
        pr = 0;
})

v2.addEventListener('ended',()=>{
    enterNumberDiv.style.display = 'flex';
        callingDiv.style.display = 'none';
        callBtn.innerText = 'CALL';
        callBtn.classList.remove('called');
        callState = 'number';
        const vid1 = document.getElementById('hVid1');
        vid1.style.display = 'flex';
        const vid2 = document.getElementById('hVid2');
        vid2.style.display = 'none';
        v2.pause()
        videoDiv.style.display = 'none'
        phoneDiv.style.display = 'flex'
        isMusicStopped = true
        pr = 0;
})




const handleBack = () => {
    numberInput.value = numberInput.value.substr(0, numberInput.value.length - 1);
}

