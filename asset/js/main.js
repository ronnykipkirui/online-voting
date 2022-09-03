
const container= document.querySelector(".section")

const renderDetails = async () => {

  let url = "http://localhost:3000/personDetails"

  const res = await fetch(url);
  const personDetails = await res.json();
  //console.log(personDetails)   

  let template = '';
  personDetails.forEach(details => {
    template += `
<div id="sec-A">
            <img src=${details.image} alt="image">
            <h3>${details.name}</h3>
            <p>${details.idNumber}</p>
            <p> ${details.mobile}</p>
            <p> ${details.pollingStation}</p>
            <p >${details.addres}</p>
            <p>${details.status}</p>

        </div> 

`

  });
  container.innerHTML = template; 
}
window.addEventListener('DOMContentLoaded', () => renderDetails());























