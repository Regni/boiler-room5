const attendeesContainer = document.querySelector('.attendeesContainer');

async function getAttendees(){
    const response = await fetch ('data/speakers.json');
    if (response.ok) {
        const jsonData = await response.json();
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

getAttendees();