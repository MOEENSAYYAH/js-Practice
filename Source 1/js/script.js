let $ = document
let ButtonElem = $.querySelector("button")
let modalElem = $.querySelector(".modal-parent")
let backgroundSection = $.querySelector("section")
let iconBack = $.querySelector("span")
function clickhandlerbutton () {
    modalElem.style.display = "block"
    backgroundSection.style.filter = "blur(10px)"
}
function clickiconbackhandler () {
    modalElem.style.display = "none"
    backgroundSection.style.filter = "blur(0px)"
}
function keyupbodyhandler (event) {
    if (event.key === "Escape") {
        modalElem.style.display = "none"
        backgroundSection.style.filter = "blur(0px)"
    }
}
ButtonElem.addEventListener("click" , clickhandlerbutton)
iconBack.addEventListener("click" , clickiconbackhandler)
document.body.addEventListener("keyup" , keyupbodyhandler)