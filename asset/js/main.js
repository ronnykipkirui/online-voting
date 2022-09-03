let btn1;
let btn2;
let btn3;
let btn4;

let p1 = document.getElementById('p1')
let p2 = document.createElement('p2')
let p3 = document.createElement('p3')
let p4 = document.createElement('p4')
let p5 = document.getElementById('p5')




function onLoad() {
  fetch("http://localhost:3000/person/1")
    .then((resp) => resp.json())
    .then((data) => {
      displayImage(data);
    });

}
function displayImage() {
  let div = document.getElementById('sec-A');
  div.innerHTML = data.values
  image.src = data.image
  p1.textContent = data.name
  p1.textContent = data.mobile
}

// document.addEventListener('DOMContentLoaded', onLoad)
// const personImage = document.getElementById('image')
// const name = document.getElementById('name')
displayImage()