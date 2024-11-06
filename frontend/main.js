window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = "https://getresumecounterfunc.azurewebsites.net/api/GetResumeCounter?code=w4GAaL3-VOLfn-ARxnj707M6aa3qQoR7yU8g11taGo5WAzFuWxBMDQ%3D%3D"

const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = async () => {
    let count = 30;
    await fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count; 
    }).catch(function(error){
        console.log(error);
       });
       return count;
    }




