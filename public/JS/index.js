const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const City_Name = document.getElementById('City_Name');
// const fetch = require('node-fetch');
//import http from 'http'

const getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        City_Name.innerHTML = "Please write name of your City :"
    } else {
        try {
            // import http from 'http'
            console.log("try blcok")
            //    http.get(`api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=96aa2b83fd45710ef85f0163eabf431a`,(res)=>{
            //        let data='';
            //        console.log(res)
            //    })
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=96aa2b83fd45710ef85f0163eabf431a`;
            const response = await fetch(url);
            //console.log(response, "kkkkkkkkkkk")
            const data = await response.json();
            console.log(data);

        } catch {
            City_Name.innerHTML = "Please write name properly";
        }
    }

}

submitBtn.addEventListener('click', getInfo);
