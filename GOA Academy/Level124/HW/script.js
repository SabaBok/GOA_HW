let info = []
const GetData = () => {
    const http = new XMLHttpRequest()
    http.onreadystatechange = function (){
        if(this.readyState == 4){
            if(this.status == 200){
                let response = JSON.parse(this.responseText)
                // console.log(JSON.parse(response))

                response.map(el => info.push(el))
                AddAllEvents()

            }
        }
    }

    http.open('GET','https://jsonplaceholder.typicode.com/todos')
    http.send()
}
GetData()



console.log(info)
const form = document.querySelector('form')
const container = document.querySelector('.event-list')
function AddAllEvents(){
    info.map(el =>{
        container.innerHTML+= `
        <div class="card">
            <h2>${el.title}</h2>

            <div class="card-right">
                <h1>ID: ${el.userID}</h1>
                <p>Event ID: ${el.id}</p>
                <p>Status: <span class="card-status">${el.complete?'Active':'Completed'}</span></p>
            </div>
        </div>
        `
    })
}


form.addEventListener('submit',e=>{
    e.preventDefault()
    if(e.target.task  .value.trim().length > 50) return

    const userRandomID = Math.floor(Math.random() * 10) + 1
    const newID = info.length + 1
    container.innerHTML += `
        <div class="card">
            <h2>${e.target.task.value}</h2>

            <div class="card-right">
                <h1>ID: ${userRandomID}</h1>
                <p>Event ID: ${newID}</p>
                <p>Status: <span class="card-status">Active</span></p>
            </div>
        </div>
    `
})

