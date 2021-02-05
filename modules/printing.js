
import { swap_students, ordering } from './sorting.js';
//create student cards

const printToDom = ( elementID, inputString) => { 
  document.querySelector(elementID).innerHTML = inputString;
}

const studentBuilder = (studentArray) => {
  let domString = '';
  let i = 0;
  ordering(studentArray);
  for(let item of studentArray) {
    domString += `
    <div class="card my-2" id="card_${item.sKeyID}">
      <div class="card-body ${item.hogwStudentHouse}">
        <h4 class="card-title">${item.hogwStudentHouse}</h4>
        <h5>${item.hogwStudentName}</h5>
        <button type="button" class="btn expel btn-danger" id="${item.sKeyID}">Expel!</button>
      </div>
    </div>`;
    i++;
  }
  printToDom('#student-assignments', domString);
}

//create expelled student cards
const expelledBuilder = (expelled_students) => {
  let domString = '';
  let i = 0;
  for(let item of expelled_students) {
    domString +=
      `<div class="card my-2" id="expelled_${item.sKeyID}">
        <div class="card-body dark-side">
          <h4 class="card-title">Expelled!</h4>
          <h6>${item.hogwStudentName}</h6>
          <p>has gone to the dark side!</p>
        </div>
      </div>`;
    i++;
  }
  printToDom('#expelled-students', domString);
}


export { printToDom, studentBuilder, expelledBuilder}; 
