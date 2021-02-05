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

export { swap_students, ordering };
