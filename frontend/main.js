window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
  });
  
  const functionApiUrl = 'https://getresumecounterfunc.azurewebsites.net/api/GetResumeCounterfunc?code=t6wky4LduCMhylLLmyQqbnLenmIxt_GlaUSHAQiWdfT0AzFukDFcGw%3D%3D';
  
  const localfunctionApi = 'http://localhost:7071/api/GetResumeCounterfunc';
  
  const getVisitCount = async () => {
    let count = 30;  // Default count value
    try {
      const response = await fetch(functionApiUrl);  // Make the API call
      if (response.ok) {
        const data = await response.json();  // Parse the JSON response
        console.log("Website called function API.");
        count = data.Count;  // Update the count with the response
        document.getElementById("counter").innerText = count;  // Display the count
      } else {
        console.error('Error fetching data: ' + response.statusText);
      }
    } catch (error) {
      console.error('There was an error!', error);  // Log any errors
    }
    return count;
  };
  



