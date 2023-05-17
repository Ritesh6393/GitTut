let titleHeader=document.getElementById("header-title");
let header=document.getElementById("main-header");
console.log(titleHeader);
titleHeader.textContent="Hello";
titleHeader.innerText="Bye";
titleHeader.innerHTML="<h3>Title</h3>"
header.style.borderBottom="solid 3px #000";