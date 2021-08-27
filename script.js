window.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) {return}
    audio.currentTime = 0;
    audio.play()
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(key)
    key.classList.add("playing")
})

function removeTransition() {
    this.classList.remove("playing")
}
const keys = document.querySelectorAll(".key");
keys.forEach( key => key.addEventListener("transitionend", removeTransition))