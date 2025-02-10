if (!Array.prototype.mySlice) {
  Array.prototype.mySlice = function (strtIndx = 0, endIndx = this.length) {
    let result = [];

    // Handle negative start index
    if (strtIndx < 0) {
      strtIndx = Math.max(this.length + strtIndx, 0);
    }

    // Handle negative end index
    if (endIndx < 0) {
      endIndx = this.length + endIndx;
    }

    // Keep endIndx within array length
    endIndx = Math.min(endIndx, this.length);

    // Extract elements
    for (let i = strtIndx; i < endIndx; i++) {
      result.push(this[i]);
    }

    return result;
  };
}


let students = ["Ali", "Riya", "John", "Sara", "Aman"];
console.log(students.mySlice(-3, students.length)); // ["John", "Sara", "Aman"]
console.log(students.mySlice(1, 4)); // ["Riya", "John", "Sara"]
console.log(students.mySlice(-2)); // ["Sara", "Aman"]
console.log(students.mySlice()); // ["Ali", "Riya", "John", "Sara", "Aman"] (Full array)
