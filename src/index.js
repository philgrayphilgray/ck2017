// index.js

require('./index.pug')
require('./styles.scss') // The page is now styled
import Please from 'pleasejs'
const div = document.getElementById('color')
const button = document.getElementById('button')

const changeColor = () => div.style.backgroundColor = Please.make_color()
const newDiv = document.createElement('input')
newDiv.setAttribute('class', 'answer')
div.append(newDiv)
const answer = document.querySelector('.answer')
const changeText = () => div.innerHTML = `<p>hey ${answer.value}</p>`
button.addEventListener('click', changeText)
