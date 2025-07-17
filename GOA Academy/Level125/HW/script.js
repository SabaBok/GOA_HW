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
            <div style="width: 50%; text-align: center; display: flex; align-items: center; gap: 20px;">
                <div class="card">
                    <h2>${el.title}</h2>

                    <div class="card-right">
                        <h2>User ID: ${el.userId}</h1>
                        <p>Event ID: ${el.id}</p>
                    </div>
                </div>

                <div>${el.completed?'Active':'Completed'}</div>
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
        <div style="width: 50%; text-align: center; display: flex; align-items: center; gap: 20px;">
            <div class="card">
                <h2>${e.target.task.value}</h2>

                <div class="card-right">
                    <h2>User ID: ${userRandomID}</h1>
                    <p>Event ID: ${newID}</p>
                </div>
            </div>

            <div>Active</div>
        </div>
    `
    alert('added')
    e.target.task.value = ''
    
})

