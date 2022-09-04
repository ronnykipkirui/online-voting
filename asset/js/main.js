fetch('http://localhost:3000/personDetails/1')
.then(function(res){
return res.json();

})
.then (function (details){

  let placeholder=document.querySelector(".sec-A")

   let values="";
           
values= `<img src=${details.image} alt="image">
           <h3>    ${details.name}</h3>
           <p> ID number:   ${details.idNumber}</p>
            <p> Mobile: ${details.mobile}</p>
            <p>Polling station:  ${details.pollingStation}</p>
           <p> Address:  ${details.address}</p>
           <p>Status:  ${details.status}</p>

`;
placeholder.innerHTML=values

})





