//console.log("Connected");

import { printToDom, studentBuilder, expelledBuilder} from './modules/printing.js';

//Key ID for each student
let studentKeyID = 0;

//The four student houses of Hogwarts
const houses_arr = [ "Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff" ];

//Student array
const student_arr = [];

//Expelled student array
const expelled_student_arr = [];

//Get student name
const getHogwStudName = () => {
  return document.querySelector("#student-name").value;
}

//Get student house
const getHogwHouse = () => {
  return houses_arr[Math.floor(Math.random() * 4)];
}

//Add a student
const addStudent = (e) => {
  if( document.getElementById("student-name").value != '') {
    let hogwStudentName = getHogwStudName();
    let hogwStudentHouse = getHogwHouse();
    let sKeyID = studentKeyID++;
    const student_obj = {
      sKeyID,
      hogwStudentName,
      hogwStudentHouse,
    }
    //Add student to array of students
    student_arr.push(student_obj);

    //Build student cards in the dom
    studentBuilder(student_arr);

    //Clear text input.
    document.getElementById("student-name").value = '';
    document.getElementById("student-name").placeholder= '';
  } else {
    document.getElementById("student-name").placeholder= 'Please enter a name.';
  }
}

//Launch Jumbotron (jumbotron class in parent container in index.html)
const launchHat = (e) => {
  let domString = `
      <h4>Enter First Year Student's Name</h4>
      <div class="container student-input-line">
        <div class="row">
          <label for="student_name" class="col-sm-4">Student Name: </label>
          <input type="text" class="col-sm-4" id="student-name" name="name">
          <button type="button" id="sort-btn" class="btn btn-primary col-sm-4">Sort!</button>
        </div>
      </div>`;

  printToDom("#jumbotron", domString);
  document.getElementById("sort-btn").addEventListener('click', addStudent);
}

//Expel a student
const expelStudent = (e) =>  {
  let cardId = e.target.parentNode.parentNode.id;
  let keyId = e.target.id;
  let expelled = false;
  if(e.target.type === "button") {
    for (let i = 0; i < student_arr.length; i++) {
      if (student_arr[i].sKeyID == keyId) {
        expelled_student_arr.push(student_arr[i]);
        student_arr.splice(i,1);
        expelled = true;
        break;
      }
    }
    if(expelled) {
      //Add expelled student to expelled student display
      expelledBuilder(expelled_student_arr);
      //Rebuild student array display
      studentBuilder(student_arr);
    }
  }
}

//Listeners
const buttonEvents = () => {
  document.getElementById("btn-launchHat").addEventListener('click', launchHat);
  document.getElementById("student-assignments").addEventListener('click', expelStudent);
}

const init = () => {
  buttonEvents();
}

init();
