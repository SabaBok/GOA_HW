let input = document.querySelector("input")
let form = document.querySelector("form")
let bot = document.querySelector(".bot")
let arr = []

//spawns in alredy created list
const setThings = () =>{
    bot.innerHTML = ""
    let fullArr = JSON.parse(localStorage.getItem("todo"))
    for(let i of fullArr){
        bot.innerHTML += `
        <div class="todo-card">
            <p class="idk">${i}</p>
            <button class="delete">Delete</button>
        </div>
        `
    }
}
setThings()

//creating new event
form.addEventListener("submit", e=>{
    e.preventDefault()
    let text = e.target.text.value

    bot.innerHTML += `
    <div class="todo-card">
        <p class="idk">${text}</p>
        <button class="delete">Delete</button>
    </div>
    `
    arr.push(text)
    localStorage.setItem("todo",JSON.stringify(arr))
})

//deleting event
document.addEventListener("click", e=>{
    if(e.target.classList.contains("delete")){
        let parent = e.target.parentElement
        let botText = parent.querySelector("p")
        let fullArr = JSON.parse(localStorage.getItem("todo"))

        let kk = fullArr.filter(el=>{
            return el != botText.textContent
        })

        localStorage.setItem("todo",JSON.stringify(kk))
        setThings()
    }
})
