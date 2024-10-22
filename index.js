const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const dropdowns = document.querySelectorAll(".dropdown select");


for(let select of dropdowns)
{
    for(currCode in countryList){
       let newOption = document.createElement("option");
       newOption.innerText = currCode;
       newOption.value = currCode;
       select.append(newOption);

       if(select.name === "from" && currCode === "USD")
       {
        newOption.selected = "selected";
       }
       else(select.name === "to" && currCode === "INR")
       {
        newOption.selected = "selected";
       }
       select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updatedFlag(evt.target);
    })
}

const updatedFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc =  `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};