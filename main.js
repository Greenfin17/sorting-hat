console.log("Connected");

const houses_arr = [ "Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff" ];


const student_arr = [];

const printToDom = ( elementID, inputString) => { 
  document.querySelector(elementID).innerHTML = inputString;
}

const launchHat = (e) => {
  domString = `
      <h4>Enter First Year Student's Name</h4>
      <div class="student-input-line">
        <label for="student_name">Student Name: </label>
        <input type="text" id="student_name" name="name">
        <button type="button" id="sort-btn" class="btn btn-primary" >Sort</button>
      </div>`;


  printToDom("#jumbotron", domString);
}

const buttonEvents = () => {
  document.getElementById("btn-launchHat").addEventListener('click', launchHat);
}

const init = () => {
  buttonEvents();
}

init();
