console.log("Connected");

let studentKey = 0;

const houses_arr = [ "Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff" ];

const student_arr = [];
const expelled_student_arr = [];

const printToDom = ( elementID, inputString) => { 
  document.querySelector(elementID).innerHTML = inputString;
}

//swap for selection sort
const swap_students = (arr, index1, index2) => {
  let temp_student = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp_student; 
}


//Selection sort, from https://geeksforgeeks.org
//Ordering by Houses.
const ordering = (array) => {
  let min_index = 0;
  for(let i = 0; i < array.length - 1; i++) {
    min_index = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j].house.localeCompare(array[min_index].house) === -1) {
        min_index = j;
      }
    }
    swap_students(array, min_index, i);
  }
}

//create student cards
const studentBuilder = (studentArray) => {
  let domString = '';
  let i = 0;
  ordering(studentArray);
  for(let item of studentArray) {
    domString += `
    <div class="card my-2" id="card_${item.key}">
      <div class="card-body ${item.house}"">
        <h4 class="card-title">${item.house}</h4>
        <p>${item.name}</p>
        <button type="button" class="btn expel btn-danger" id="${item.key}">Expel!</button>
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
      `<div class="card my-2" id="expelled_${item.key}">
        <div class="card-body dark-side">
          <h4 class="card-title">Expelled!</h4>
          <h5>${item.name}</h5>
          <p>has gone to the dark side!</p>
        </div>
      </div>`;
    i++;
  }
  printToDom('#expelled-students', domString);
}


const getName = () => {
  return name = document.querySelector("#student-name").value;
}

const getHouse = () => {
  return houses_arr[Math.floor(Math.random() * 4)];
}

//Add student
const addStudent = (e) => {
  if( document.getElementById("student-name").value != '') {
    name = getName();
    house = getHouse();
    key = studentKey++;
    const student_obj = {
      key,
      name,
      house,
    }
    student_arr.push(student_obj);
    studentBuilder(student_arr);
    document.getElementById("student-name").value = '';
  } 
}

//Launch Jumbotron (jumbotron class in parent container in index.html)
const launchHat = (e) => {
  domString = `
      <h4>Enter First Year Student's Name</h4>
      <div class="container student-input-line">
        <div class="row">
          <label for="student_name" class="col-sm-4">Student Name: </label>
          <input type="text" class="col-sm-4" id="student-name" name="name" placeholder = "Please enter a name.">
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
      if (student_arr[i].key == keyId) {
        expelled_student_arr.push(student_arr[i]);
        student_arr.splice(i,1);
        expelled = true;
        break;
      }
    }
    if(expelled) {
      //add expelled student to expelled student display
      expelledBuilder(expelled_student_arr);
      // Make the deleted student's card disappear.
      //document.getElementById(cardId).classList.add("expelled");
      //changed to printing to dom the modified student array
      //rather than hiding the array.
      studentBuilder(student_arr);
    }
  }
}

const buttonEvents = () => {
  document.getElementById("btn-launchHat").addEventListener('click', launchHat);
  document.getElementById("student-assignments").addEventListener('click', expelStudent);
}

const init = () => {
  buttonEvents();
}

init();
