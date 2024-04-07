// setTimeout(()=> {
//     document.body.style.backgroundColor = 'olive';
//     setTimeout(()=> {
//         document.body.style.backgroundColor = 'blue';
//         setTimeout(()=> {
//             document.body.style.backgroundColor = 'teal';
//             setTimeout(()=> {
//                 document.body.style.backgroundColor = 'green';
        
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

const colors = (color, delay, next)=> {
    setTimeout(()=> {
        document.body.style.backgroundColor = color;
        next()
    }, delay)
}

colors('teal', 2000, ()=> {
    colors('orange', 2000)
})