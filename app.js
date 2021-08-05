

const readline = require('readline');

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let allBooks = ['Harry potter', 'The magician', 'Think & reach grow', 'The secret'];

readline1.question('please enter something : ', () => {
    console.log('please enter any option from 1, 2 & 3:')
    readline1.on('line', (num) => { 
        if (num.trim() == 1) {
             readline1.question("Enter any key to see List of all books ", () => {
                allBooks.forEach((x) => {
                    console.log(x);
                })
            })
        }
        else if (num == 2) {
            readline1.question('Add the name of book ', (bookName) => {
                console.log(`${bookName} book added successfully`);
                allBooks.push(bookName);
            })
            
        } else if (num == 3) {
            readline1.question('Are you sure you want to quit ', (y) => {
                if (y == 'y') {
                    readline1.close();
                }
            })
        }
        else {
            console.log('You have selected an invalid entry so please press 1, 2 or 3');
        }
    })

})


readline1.on('close', () => {
    console.log('bye bye')
})











// ------------------------

// function showAllBooks() {
//     readline1.question("Enter any key to see List of all books", () => {
//         allBooks.forEach((x) => {
//             console.log(x);
//         })
//     })
// }

// function addBook(bookName) {
//     readline1.question('Add the name of book', (bookName) => {
//         console.log(`${bookName} book added successfully`);
//     })
// }

// function closeTerminal(y) {
//     readline1.question('Are you sure you want to quit', (y) => {
//         if (y == 'y') {
//             readline1.close();
//         }
//     })
// }









// -------------------------------



// const readline = require('readline');

// const readline1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let allBooks = ['Harry potter', 'The magician', 'Think & reach grow', 'The secret'];

// readline1.question("List of all books", (num) => {
//     if (num == 1) {
//         allBooks.forEach((x) => {
//             console.log(x);
//         })
//     }
//     readline1.question("add the name of book", (bookName) => {
        
//         console.log(`${bookName} book added successfully`);
//         readline1.question("Are you sure you want to quit", () => {
            
//             readline1.close();
//         })
//     })
// })

// readline1.on("close", () => {
//     console.log('Bye Bye')
// })



// -----------------------------------------------





 // switch (num) {
    //     case 1: console.log('hello')
    //         readline1.question("Enter any key to see List of all books", () => {
    //             allBooks.forEach((x) => {
    //                 console.log(x);
    //             })
    //         })
    //     case 2:
    //         // console.log('Add the name of book');
    //         readline1.question('Add the name of book', (bookName) => {
    //             console.log(`${bookName} book added successfully`);
    //         })
    //     case 3:
    //         readline1.question('Are you sure you want to quit', (y) => {
    //             if (y == 'y') {
    //                 readline1.close();
    //             }
    //         })
    //     // default:
    //     //     console.log('You have selected an invalid entry so please press 1, 2 or 3');
    // }