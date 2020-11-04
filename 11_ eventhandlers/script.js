//Opdracht 1
const alertBtn = document.getElementById('mybutton');

const showAlert = () => {
    alert('button clicked');
};

alertBtn.addEventListener('click', showAlert);

//Opdracht 2 (in comment)
/*
const changeBtn = document.getElementById('changebutton');

const changeColor = () => {
    changeBtn.classList.add('red-background');
};

changeBtn.addEventListener('click', changeColor);
*/

//Opdracht 3
const changeBtn = document.getElementById('changebutton');

const toggleColor = () => {
    changeBtn.classList.toggle('red-background');
};

changeBtn.addEventListener('click', toggleColor);