const input = document.querySelector('#inp');
const form = document.querySelector("#shelt");
const list = document.querySelector('#list');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const lst = inp.value;
    const li = document.createElement('li');
    li.innerText = lst;
    list.append(li);
    inp.value = '';

})