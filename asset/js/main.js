// function getPerson() {
//     fetch('http://localhost:3000/person')

//         .then((response) => response.json())
//         .then(getData);
// }
// function getData(values) {
//     let image = document.getElementById('image')

//   image.src = data.image;
    
// }
function getImage() {
    fetch(personAddress)
      .then((response) => response.json())
      .then(getImage)
      .catch((err) => console.log("Addresses not found"));
  }
  function getImagesComments(data) {
   // title.textContent = data.title;
    image.src = data.image;
   // comments.textContent = data.myComments;
    //   comments.innerHTML = addComment(comment);
   // myComments();
  }

  document.addEventListener("DOMContentLoaded", () => {
    personAddress = "http://localhost:3000/person";
   
    image = document.getElementById("mage");

    //title = document.getElementById("card-title");
  //  li = document.createElement("li");
   
   // addLikes = document.getElementById("like-count");
  
   getImage();
    
  });

const btn = document.getElementById('btn1');
btn.addEventListener('click', function handleClick() {
    btn.textContent = 'voted';
});