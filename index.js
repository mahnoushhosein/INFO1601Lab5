//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

function getAverageGrade(student, course){

  for(let item of student.transcript){
    if(item.course === course){

      let sum = 0;

      for(let grade of item.grades){
        sum = sum + grade;
      }

      return sum / item.grades.length;
    }
  }

  return -1;
}

function getAssignmentMark(student, course, num){

  for(let item of student.transcript){
    if(item.course === course){
      return item.grades[num];
    }
  }

  return -1;
}

function averageAssessment(students, courseName, assignment){

  let sum = 0;
  let count = 0;

  for(let student of students){

    let mark = getAssignmentMark(student, courseName, assignment);

    if(mark !== -1){
      sum = sum + mark;
      count = count + 1;
    }
  }

  if(count === 0){
    return -1;
  }

  return sum / count;
}