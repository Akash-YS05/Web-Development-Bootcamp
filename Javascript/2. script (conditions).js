console.log('working');


// -------DEMO 1---------
// let rand = Math.random();

// if(rand<0.5) {
//     console.log('Its smaller')
//     console.log(rand)
// } else if(rand>0.5) {
//     console.log('Its greater')
//     console.log(rand)
// }


// --------DEMO 2-----------
// const age = prompt('enter the age: ');

// if (age < 5) {
//     console.log('too small')
// } else if (age < 10) {                  //only applies when the above condition doesnt fulfill
//     console.log('you are a kid')
// } else if (age < 18) {
//     console.log('you are a teen')
// } else if (age < 65) {
//     console.log('you are an adult')
// } else {                                //a catch-all basically
//     console.log('senior citizen or dead')
//}


// --------DEMO 3-----------
// const pass = prompt('Enter Password:');

// if (pass.length >= 6) {

//     console.log('Long enough')

//     if (pass.indexOf(' ') === -1) {
//         console.log('Password accepted succesfully!');
//     } else {
//         console.log('Cannot contain spaces')
//     }
// }
// else {
//     console.log('not big enough, try again')
// }



//-------- SWITCH ---------
//replaces multiple if statements

const day = 4;

switch(day) {
    case 1:
        console.log('monday');
        break
    case 2:
        console.log('tuesday');
        break
    case 3:
        console.log('wednesday');
        break
    case 4:
        console.log('thursday');
        break
    case 5: 
        console.log('friday');
        break
    default:
        console.log('idk man')
}

