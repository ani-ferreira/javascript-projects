//this way theres no javascript in the html, the event listener is added here in the js file
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("url-btn");

//get items from localstorage
const leadsFromLocalstorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalstorage) {
  myLeads = leadsFromLocalstorage; //save the value from localstorage in the array
  render(myLeads);
}

//query chrome api to get the active url and push it into the array
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //save in localstorage the input value
    render(myLeads);
  });
});

//adds each element of the array in a list element, an those in the ul element from html
function render(leads) {
  let listItem = " ";
  for (let i = 0; i < leads.length; i++) {
    listItem += `<li> 
        <a href="${leads[i]}"  target="_blank">${leads[i]}</a>
        </li>`;
  }
  ulEl.innerHTML = listItem;
}

//saves input value in localstorage
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); //save new value in array
  inputEl.value = ""; //empty input
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //save in localstorage the input value
  render(myLeads);
});

// delete all list items when double clicked on bnt
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
