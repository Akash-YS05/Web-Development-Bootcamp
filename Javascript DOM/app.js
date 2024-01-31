//getElementByTagName

const image = document.getElementsByTagName('img')

for (let img of image) {
    console.log(img.src)
}

//querySelector

const t1 = document.querySelector('p')   //tagname
const t2 = document.querySelector('#banner')   //id
const t3 = document.querySelector('.square')   //class
const t4 = document.querySelector('img:nth-of-type(2)')
const t5 = document.querySelector('a[title="Java"]')   //tag[attribute]
const t6 = document.querySelector('h1').textContent('Heading changed')
const t7 = document.querySelector('img').getAttribute('alt', 'Alt changed')
const t8 = document.createElement('img')
t8.src = "" //add source here
document.body.appendChild(t8) //body is the location where we wanna append
t8.classList.add('') //add any class
const t9 = document.createElement('h2')
h2.innerText = 'hello there!!!'
document.body.appendChild(t9)
const t10 = document.createElement('p')
t10.append('this is the append method', 'another text block!!')
//append and appendChild adds the stuff at the end
const t11 = document.createElement('p')
t11.prepend('prepend method adds at the beginning')
//now adding stuff adjacently :
const t12 = document.createElement('p')
t12.append('adjacent method!!')
const t13 = document.querySelector('h1')
t13.insertAdjacentElement('afterend', t12)