const students = [
    {name: "John", marks: 95},
    {name: "Peter", marks: 80},
    {name: "Mary", marks: 70},
    {name: "Sam", marks: 60},
    {name: "Bob", marks: 50}
];

let checkResults = (studentName) => {
    for(let student of students){
        if(student.name === studentName) {
            return student.marks>90?console.log(`Congratulations ${student.name}! You have cleard the exam.`):console.log(`Sorry! You have not cleared the exam.`)
        }
    }
    console.log("Invalid User!")
};

checkResults("John");
checkResults("Peter");
checkResults("Shyam");


