async function getSchedule(){
  let respons = await fetch("data/schedule.json")
  if(respons.ok){
    renderSchedule(await respons.json())
  }else{
    console.log("maybe not")
  }
}
//ul list needs to be only created once
function renderSchedule(scheduleArray){
  const container = document.getElementById("detailsContainer")

  const newUL = document.createElement("ul");
  newUL.className = "scheduleList"
  
  scheduleArray.forEach(element => {

    const newLi = document.createElement("li");
    newLi.textContent = element.time + " - " + element.details;
    newUL.appendChild(newLi)
  });

  


  container.appendChild(newUL)




}

getSchedule()
