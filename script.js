setInterval(phone, 3000)
setInterval(searchIcon, 2000)

var filterDataHolder = [];

async function fetchCountry() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/AbdullahiAbdulkabir/js_mx_json/main/numbers.json");
    const data = await response.json();
    filterDataHolder = data; //assigned fetched data so we can filter with it

    data.forEach((item) => {
      const div = document.createElement("div");

      div.className = "card";

      div.innerHTML = `
   <div class = "text">
  <h4>${item.name} </h4>
  </div>
  
  <div class="phony"><a href="tel:+234(${item.number.charAt(
    0
  )})${item.number.substring(1)}"><button class = "icon"><i class="fa fa-3x fa-phone" ></button></i></a></div>
  
  
  `;
      document.getElementById("card-holder").append(div);
    });
  } catch (e) {
    const error = "oops,seems like there was an error, try again!";
    e = error;
    alert(e);
  }
}

fetchCountry();

el("search").addEventListener("keyup", (e) => {
  el("card-holder").innerHTML = ""; //Cleans the card holder of previous data so only current search result is available
  const searchQuery = e.target.value; //assigns the value of the search input
  const filteredValue = filterDataHolder.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.number.toLowerCase().includes(searchQuery.toLowerCase()); //checks if the search query value is in the name or number
  });
  filteredValue.forEach((item) => {
    // maps through the returned filered array
    const div = document.createElement("div");

    div.className = "card";

    div.innerHTML = `
    <div class = "text">
    <h4>${item.name} </h4>
    </div>
    
    <div class="phony"><a href="tel:+234(${item.number.charAt(
      0
    )})${item.number.substring(1)}"><button class = "icon"><i class="fa fa-3x fa-phone" ></button></i></a></div>
    
`;
    el("card-holder").append(div); //appends data from the filtered array to card-holder
  });
});

function el(item) {
  return document.getElementById(item);
}

function phone (){
  function work () {const phoneIcon = document.querySelectorAll(".icon");
  phoneIcon.forEach((icon) => {
   icon.classList.toggle("phony-animate");
   
  })
  
   }
  
  work()
 
 }

 function searchIcon(){
  function search () {const searchIcon = document.getElementById("search-icon");
  searchIcon.classList.add("search-animate");}
  
  search()
 }

 

