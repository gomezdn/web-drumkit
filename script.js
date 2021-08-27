window.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) {return}
    audio.currentTime = 0;
    audio.play()
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add("playing")
})



function removeTransition() {
    this.classList.remove("playing")
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

keys.forEach(div => div.addEventListener("click", () => {
    let audio = document.querySelector(`audio[data-key="${div.getAttribute("data-key")}"]`)
    if (!audio) {return}
    audio.currentTime = 0;
    audio.play()
    let key = document.querySelector(`.key[data-key="${div.getAttribute("data-key")}"]`)
    key.classList.add("playing")
}))

