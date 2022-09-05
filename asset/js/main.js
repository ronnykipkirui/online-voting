fetch('http://localhost:3000/personDetails')
  .then(function (res) {
    return res.json();

  })
  .then(function (details) {

    let placeholder = document.querySelector(".sec-A")

    let values = "";

    values = `<img src=${details.image} alt="image">
           <h3>    ${details.name}</h3>
           <p> <b>ID number:   ${details.idNumber}</p>
            <p> Mobile: ${details.mobile}</p>
            <p>Polling station:  ${details.pollingStation}</p>
           <p> Address:  ${details.address}</p>
           <p>Status:  ${details.status}</p>

`;
    placeholder.innerHTML = values

  })
const button=document.getElementById("btn1")

  btn.addEventListener('click', function handleClick() {
    btn.textContent = 'voted';
  });
  // const btn2=document.getElementById("btn2")
  
  btn2.addEventListener('click', function handleClick() {
    btn2.textContent = 'voted';
  });
  
 // const btn3=document.getElementById("btn3")
  btn3.addEventListener('click', function handleClick() {
    btn3.textContent = 'voted';
  });
  
  //const btn4=document.getElementById("btn4")
  btn4.addEventListener('click', function handleClick() {
    btn4.textContent = 'voted';
  });
  
 // const btn5=document.getElementById("btn5")
  btn5.addEventListener('click', function handleClick() {
    btn5.textContent = 'voted';
  });
  

  const btn6=document.getElementById("back")

  btn6.addEventListener('click', function handleClick() {
  window.location.reload(true)
  setTimeout(()=>{
  },50000)
  });


  const btn7=document.getElementById('submit')
  btn7.addEventListener('click', function handleClick(){
   const popup=document.querySelector(".popup")
   popup.style.display="flex"

  })
    const x=document.querySelector(".close")
    x.addEventListener('click', function handleClick(){
      popup=document.querySelector(".popup")
      popup.style.display="none"
    })
  

