export default class HolbertonCourse{
  constructor(name, length, students){
    this.name = name;
    this.length = length;
    this.students = students
  }

  //getter for name
  get name(){
    return this._name
  }

  //set name
  set name(value){
    if (typeof value === 'string'){
      this._name = value
    } else {
      throw new TypeError('Name must be a string')
    }
  }

  //getter for length
  get length(){
    return this._length
  }

  //setter for length
  set length(value){
    if (typeof value === 'number'){
      this._length = value
    } else {
      throw new TypeError('Length must be a number')
    }
  }

  //getter for students
  get students(){
    return this._students
  }

  // setter for students
  set students(value){
    for (const element of value){
      if (typeof element !== 'string'){
        throw new TypeError('Students array must contain strings')
      }
    }
    this._students = value
  }
};
