const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
  ];
  
  function computeAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
      sum += students[i].marks;
    }
    return sum / students.length;
  }
  
  function computeGrade(marks) {
    if (marks < 60) {
      return 'F';
    } else if (marks < 70) {
      return 'D';
    } else if (marks < 80) {
      return 'C';
    } else if (marks < 90) {
      return 'B';
    } else {
      return 'A';
    }
  }
  
  const average = computeAverage(students);
  const grade = computeGrade(average);
  
  console.log(`Average marks: ${average}`);
  console.log(`Grade: ${grade}`);
  