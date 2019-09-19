const data = {
    names: ['A', 'B', 'C'],
    enrolled: true,
    marksss: {
        'A': [1, 1, 1],
        'B': [2, 2, 2],
        'C': [3, 3, 3],
    }

};

const {names, enrolled = false, marksss: {A:marks}} = data; //destructuring
console.log(names);
console.log(enrolled);
console.log(marks);