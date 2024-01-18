let lst = []

let ask = prompt('What do you want to do?')

while (ask!=='quit' && ask!== 'q') {
    if (ask === 'add') {
        const task = prompt('Add your task!')
        lst.push(task)
        console.log(`${task} added to list!`)

    } else if (ask === 'list') {
        console.log('Here you go!')
        for (let i=0; i<=lst.length; i++) {
            console.log(`${i}: ${lst[i]}`)
        }

    } else if (ask === 'del') {
        const index = parseInt(prompt('Enter the index of the task'))
        if (!Number.isNaN(index)) {
            lst.splice(index, 1)
        console.log('Task deleted')
        }
        else {
            console.log('Not a valid index')
        }
        
    }
    ask = prompt('What do you want to do?')
}

console.log('quit the apppp')