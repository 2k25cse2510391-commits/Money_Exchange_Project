const baseEur = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

let data;
(async (params) => {
    let responce = await fetch(baseEur);
    data = await responce.json();
})();


const form = document.querySelector(".form");

let from;
let to;
let value;
let result;
form.addEventListener("submit",(evt) =>{
    evt.preventDefault();
    let dropdown = document.querySelectorAll(".dropdown select");
    from = data.eur[dropdown[0].value.toLowerCase()]; 
    to = data.eur[dropdown[1].value.toLowerCase()];
    let valueStr= document.querySelector(".container input").value;
    value = parseFloat(valueStr);
    result = ((to/from)*value).toFixed(2);

    document.querySelector(".msg").innerHTML=valueStr+dropdown[0].value+"="+result+dropdown[1].value;
})
