const GetData = () => {
    const http = new XMLHttpRequest()
    http.onreadystatechange = function (){
        if(this.readyState == 4){
            if(this.status == 200){
                let response = JSON.parse(this.responseText)
                console.log(JSON.parse(response))
            }
        }
    }

    http.open('GET','https://en.wikipedia.org/w/api.php?action=query&titles=List_of_guinea_pig_breeds&prop=images&format=json&origin=*')
    http.send()
}
GetData()
