const search=document.getElementById("search");

const rows=document.querySelectorAll("#rosterTable tbody tr");

const memberCount=document.getElementById("memberCount");

memberCount.innerText=rows.length;

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)

? ""

: "none";

});

});