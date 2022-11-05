//--------------------Card_1----------------------------
const colors = ['Green', 'Red', 'Blue', 'Teal', 'Yellow', 'cyan', 'Crimson', 'Darkred', 'Black', 'Coral']
const btnOne = document.getElementById('card_1_btn');
const card = document.getElementById('section');
const colorIs = document.getElementById('sc');

btnOne.addEventListener('click', function () {
    let count = myColor()
    card.style.background = colors[count]
    colorIs.textContent = colors[count]
    colorIs.style.color = 'white';
    colorIs.style.fontWeight = 'bold'
    colorIs.style.fontSize = '20px'

});

function myColor() {
    return Math.floor(Math.random() * colors.length)
};


//Card_2--------------------------------------------------

const btntwo = document.getElementById('btn_2');
const cardtwo = document.getElementById('section_2');
const colorIstwo = document.getElementById('color_2');
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'B', 'c', 'D', 'E', 'F']

btntwo.addEventListener('click', () => {
    let hexNumber = '#'
    for (let i = 0; i < 6; i++) {
        hexNumber += hex[redomcolor()];
        cardtwo.style.background = hexNumber;
        colorIstwo.textContent = hexNumber;
    }
})

function redomcolor() {
    return Math.floor(Math.random() * hex.length)

}