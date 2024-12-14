function Update(){
    let UserCity = document.getElementById("city")
    let Value = UserCity.value 

    if (Value === 'ფასანაური'){
        document.getElementById('speed_1').innerHTML = '95.00₾';
        document.getElementById('speed_2').innerHTML = '140.00₾';
        document.getElementById('speed_3').innerHTML = '185.00₾';
        document.getElementById('speed_4').innerHTML = '245.00₾';
        alert('გილოცავთ! თქვენზე მოქმედებს ფასდაკლება')
    }
    else{
        alert('თქვენზე არ მოქმედებს ფასდაკლება')
    }
}