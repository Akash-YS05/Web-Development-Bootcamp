function colors() {
    this.style.backgroundColor = 'orange';
}

const bt = document.querySelectorAll('button')
for (let b of bt) {
    b.addEventListener('click', colors)
}

const h1s = document.querySelectorAll('h1')
for (let h1 of h1s) {
    h1.addEventListener('click', colors)
}