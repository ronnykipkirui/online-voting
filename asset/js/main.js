
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






























// let btn1;
// let btn2;
// let btn3;
// let btn4;

// let p1 = document.getElementById('p1')
// let p2 = document.createElement('p2')
// let p3 = document.createElement('p3')
// let p4 = document.createElement('p4')
// let p5 = document.getElementById('p5')




// function onLoad() {
//   fetch("http://localhost:3000/person/1")
//     .then((resp) => resp.json())
//     .then((data) => {
//       personDetails(data);


//       console.log(data)
//     });


// function personDetails() {
//   let div = document.getElementById('sec-A');
//   div.innerHTML = data.values
//   image.src = data.image
//   p1.textContent = data.name
//   p1.textContent = data.mobile
// }
// p1.append
// // document.addEventListener('DOMContentLoaded', onLoad)
// // const personImage = document.getElementById('image')
// // const name = document.getElementById('name')
// personDetails()