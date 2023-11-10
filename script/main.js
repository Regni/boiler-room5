async function getSchedule(){
  let respons = await fetch("data/schedule.json")
  if(respons.ok){
    renderSchedule(await respons.json())
  }else{
    console.log("maybe not")
  }
}

function renderSchedule(scheduleArray){
  const container = document.getElementById("containerTest")

  const scheduleH2 = document.createElement('h2');
  scheduleH2.className = "scheduleH2";
  scheduleH2.textContent ="Schedule";
  container.appendChild(scheduleH2);

  const newUL = document.createElement("ul");
  newUL.className = "scheduleList"
  
  scheduleArray.forEach(element => {

    const newLi = document.createElement("li");
    newLi.textContent = element.time + " - " + element.details;
    newUL.appendChild(newLi)
  });

  


  container.appendChild(newUL)




}





const attendeesContainer = document.querySelector('.attendeesContainer');

async function getAttendees(){
    const response = await fetch ('data/speakers.json');
    if (response.ok) {
        const jsonData = await response.json();

        const attendeeH2 = document.createElement('h2');
        attendeeH2.className = "attendeeH2";
        attendeeH2.textContent = "Speaker List";
        const container = document.getElementById("containerTest")
        container.appendChild(attendeeH2);

        const attendeeList = document.createElement('div');
        attendeeList.id = 'mainContainer';



        
        
        jsonData.speakers.forEach(function(attendee){
            const person = document.createElement('ul');
            person.className = 'persons';
           
           const personName = document.createElement('li');
           personName.textContent = attendee.firstName;
           person.appendChild(personName);

           const secondName = document.createElement('li');
           secondName.textContent = attendee.secondName;
           person.appendChild(secondName);

           const age = document.createElement('li');
           age.textContent = attendee.age;
           person.appendChild(age);

           const company = document.createElement('li');
           company.textContent = attendee.company;
           person.appendChild(company);

           attendeesContainer.appendChild(person);
        });
        
    }
    else {
        console.log("doesn't work. The code is:" + response.status);
    }
};

getSchedule();
getAttendees();


