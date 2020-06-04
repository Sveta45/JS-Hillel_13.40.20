const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

evaluationResult();

function calcStudentAverageMarks() {
    return students.map((elem) =>
        elem.marks.reduce((sum, value) => sum + value) /
        elem.marks.length
    );
}

function calcGroupAverageMarks() {
    return calcStudentAverageMarks().reduce((sum, elem) => sum + elem) / calcStudentAverageMarks().length;
}

function studentGrades() {
    return students.map((sum, elem) => 'Средний бал ' + sum.name + ' = ' + elem)
}

function evaluationResult() {
    let result = studentGrades().join('\n') + '\n' + 'Средний бал группы = ' + calcGroupAverageMarks();
    console.log(result);
}



