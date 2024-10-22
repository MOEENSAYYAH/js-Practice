let $ = document
let inputElem = $.getElementById("input-field")
let containerElem = $.getElementById("listed")
let iconAdd = $.getElementById("btn-save")
let iconDelet = $.getElementById("btn-delete")
const saveButton = $.getElementById("save")
let windowContainer
function colorBox () {
    let Whitebox = $.getElementById("white-box")
    let FFD37FBox = $.getElementById("FFD37F-box")
    let FFFA81Box = $.getElementById("FFFA81-box")
    let D5FA80Box = $.getElementById("D5FA80-box")
    let F87FBox = $.getElementById("78F87F-box")
    let FBD6Box = $.getElementById("79FBD6-box")
    let FDFEBox = $.getElementById("79FDFE-box")
    let AD6FDBox = $.getElementById("7AD6FD-box")
    let B84FCBox = $.getElementById("7B84FC-box")
    let D687FCBox = $.getElementById("D687FC-box")
    let FF89FDBox = $.getElementById("FF89FD-box")
    Whitebox.addEventListener("click" , function () {
        let color = Whitebox.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    FFD37FBox.addEventListener("click" , function () {
        let color = FFD37FBox.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    FFFA81Box.addEventListener("click" , function () {
        let color = FFFA81Box.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    D5FA80Box.addEventListener("click" , function () {
        let color = D5FA80Box.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    F87FBox.addEventListener("click" , function () {
        let color = F87FBox.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    FBD6Box.addEventListener("click" , function () {
        let color = FBD6Box.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    FDFEBox.addEventListener("click" , function () {
        let color = FDFEBox.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    AD6FDBox.addEventListener("click" , function () {
        let color = AD6FDBox.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    B84FCBox.addEventListener("click" , function () {
        let color = B84FCBox.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    D687FCBox.addEventListener("click" , function () {
        let color = D687FCBox.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
    FF89FDBox.addEventListener("click" , function () {
        let color = FF89FDBox.style.backgroundColor
        inputElem.style.backgroundColor = color
    })
} colorBox()
function keydownInputhHandler (event) {
    if (inputElem.value) {
        if (event.key === "Enter") {
            let newNote = document.createElement("div")
            newNote.setAttribute("class" , "card shadow-sm rounded")
            newNote.style.backgroundColor = inputElem.style.backgroundColor
            let newTextNote = document.createElement("p")
            newTextNote.setAttribute("class" , "card-text p-3")
            newTextNote.innerHTML = inputElem.value 
            newNote.append(newTextNote)
            containerElem.append(newNote)
            inputElem.value = ""
            // newNote.addEventListener("click" , function () {
            //     newNote.remove()
            // })
        }
    }
}
containerElem.addEventListener("click" , function (event) {
    if (event.target.tagname = "p"){
        event.target.parentElement.remove()
    }
})
function clickIconHandler () {
    if (inputElem.value) {
        let newNote = document.createElement("div")
        newNote.setAttribute("class" , "card shadow-sm rounded")
        newNote.style.backgroundColor = inputElem.style.backgroundColor
        let newTextNote = document.createElement("p")
        newTextNote.setAttribute("class" , "card-text p-3")
        newTextNote.innerHTML = inputElem.value 
        newNote.append(newTextNote)
        containerElem.append(newNote)
        inputElem.value = ""
        windowContainer = containerElem.innerHTML
        // newNote.addEventListener("click" , function () {
        //     newNote.remove()
        // })
        console.log(containerElem.innerHTML);
    }
}
inputElem.addEventListener("keydown" , keydownInputhHandler)
iconAdd.addEventListener("click" , clickIconHandler)
iconDelet.addEventListener("click" , function () {
    inputElem.value = ""
})
saveButton.addEventListener("click" , function () {
    const divNotes = $.querySelectorAll(".card")
    console.log(divNotes);
    localStorage.setItem("notes" , JSON.stringify(divNotes))
})
// V:4u_GQ:3tT52zk
window.addEventListener("load" , function () {
    let notes = JSON.parse(localStorage.getItem("notes"))
    notes.forEach(function (element) {
        let newNote = document.createElement("div")
        newNote.setAttribute("class" , "card shadow-sm rounded")
        newNote.style.backgroundColor = inputElem.style.backgroundColor
        let newTextNote = document.createElement("p")
        newTextNote.setAttribute("class" , "card-text p-3")
        newTextNote.innerHTML = inputElem.value 
        newNote.append(newTextNote)
        containerElem.append(newNote)
        inputElem.value = ""
        windowContainer = containerElem.innerHTML
    })
})

