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