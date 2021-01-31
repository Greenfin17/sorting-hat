console.log("Connected");

const houses_arr = [ "Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff" ];


const student_arr = [];

const printToDom = ( elementID, inputString) => { 
  document.querySelector(elementID).innerHTML = inputString;
}

const studentBuilder = (studentArray) => {
  let domString = '';
  let i = 0;
  for(let item of studentArray) {
    domString += `
    <div class="card my-2" id=${i}>
      <p>${item.house}</p>
      <p>${item.name}</p>
      <button class="expel">Expel</button>
    </div>`;
  }
  printToDom('#student-assignments', domString);
}
const getName = () => {

  return name = document.querySelector("#student-name").value;
}

const getHouse = () => {

  return houses_arr[Math.floor(Math.random() * 4)];
}

const addStudent = (e) => {
  name = getName();
  house = getHouse();
  const student_obj = {
    name,
    house,
  }
  student_arr.push(student_obj);
  studentBuilder(student_arr);
}


const launchHat = (e) => {
  domString = `
      <h4>Enter First Year Student's Name</h4>
      <div class="container student-input-line">
        <div class="row">
          <label for="student_name" class="col-sm-4">Student Name: </label>
          <input type="text" class="col-sm-4" id="student-name" name="name">
          <button type="button" id="sort-btn" class="btn btn-primary col-sm-4" >Sort</button>
        </div>
      </div>`;


  printToDom("#jumbotron", domString);
  document.getElementById("sort-btn").addEventListener('click', addStudent);
}


const buttonEvents = () => {
  document.getElementById("btn-launchHat").addEventListener('click', launchHat);
}

const init = () => {
  buttonEvents();
}

init();
