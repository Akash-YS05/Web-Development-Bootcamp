// for (let i=1; i<=10; i++) {
//     console.log(i);
// }

// for (let i=100; i>=0; i-=10) {
//     console.log(i);
// }

// for (let i=1; i<=10; i++) {
//     if (i%2===0) {
//         console.log(i, 'is even');
//     } else {
//         console.log(i, 'is odd');
//     }
// }

const names = [
    ['akash','alisha','adi'],
    ['puru', 'debansh', 'cya'],
    ['john','jacob','jonas']
]


for (let i=0; i<names.length; i++) {
    const row = names[i];
    console.log(`Row no. ${i+1}`)
    for (let j=0; j<row.length; j++) {
        console.log(row[j])
    } 
}