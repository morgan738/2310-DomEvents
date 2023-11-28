const button = document.querySelector("button")

button.addEventListener("click", () => {
    console.log("hello world")
})

const words = []
const form = document.querySelector("form")
const wordList = document.querySelector(".list")

function render() {
    const displayWords = words.map((word) => {
        return `<span> ${word} </span>`
    })
    console.log(displayWords)
    wordList.innerHTML = displayWords.join("")
}

form.addEventListener("submit" , (event) => {

    event.preventDefault()
    console.log(event.target.word.value)
    words.push(event.target.word.value)
    console.log("This is my array of words -->", words)
    event.target.word.value = ""
    render()
})

const darkMode = document.querySelector(".darkMode")
darkMode.addEventListener("click", (event) => {
    console.log(event.target.checked)
    const body = document.querySelector("body")
    if(event.target.checked){
        body.style.backgroundColor = "black"
        body.style.color = "white"
    }else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }
})