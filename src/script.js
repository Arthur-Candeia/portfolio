import { load } from "./start.js";
import { formSendEmail } from "./sendEmail.js";
import { switchThemeFunction } from "./switchTheme.js";

window.history.pushState("", "", "/");
load();

let ft = 2
const form = document.querySelector('form')
const switchThemeBtn = document.getElementById('switchThemeBtn')
const navbarButtons = document.querySelectorAll('#navbar > a')
document.querySelector('.bi:nth-child(1)').style.color = 'white'

const viewScroll = () => {
  const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scroll = (totalScroll / windowHeight) * 100

  if (scroll < 10) {
    for(let i=1; i<=5; i++) {document.querySelector(`.bi:nth-child(${i})`).style.color = '#4dff91'}
    document.querySelector('.bi:nth-child(1)').style.color = 'white'
  }
  else if (scroll <= 23) {
    for(let i=1; i<=5; i++) {document.querySelector(`.bi:nth-child(${i})`).style.color = '#4dff91'}
    document.querySelector('.bi:nth-child(2)').style.color = 'white'
  }
  else if (scroll <= 55) {
    for(let i=1; i<=5; i++) {document.querySelector(`.bi:nth-child(${i})`).style.color = '#4dff91'}
    document.querySelector('.bi:nth-child(3)').style.color = 'white'
  }
  else if (scroll <= 94) {
    for(let i=1; i<=5; i++) {document.querySelector(`.bi:nth-child(${i})`).style.color = '#4dff91'}
    document.querySelector('.bi:nth-child(4)').style.color = 'white'
  }
  else {
    for(let i=1; i<=5; i++) {document.querySelector(`.bi:nth-child(${i})`).style.color = '#4dff91'}
    document.querySelector('.bi:nth-child(5)').style.color = 'white'
  }
}
navbarButtons.forEach((element) => {
  element.addEventListener('click', viewScroll)
})
window.addEventListener('scroll', viewScroll)
window.addEventListener('resize', () => viewScroll)

setInterval(() => {
  const imgs = document.querySelectorAll('.project > img')

  imgs.forEach((element) => {
    const currentPath = element.getAttribute('src').slice(0, 36)
    element.setAttribute('src', `${currentPath}${ft}.png`)
  })
  
  ft++
  ft > 4 ? ft = 1 : ft;
}, 3500)

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  formSendEmail()
})

switchThemeBtn.addEventListener('click', switchThemeFunction)
viewScroll()

let position = -40
let direction = true
setInterval(() => {
  document.querySelector('#name span').style.backgroundImage = `linear-gradient(to right, #3DCC74 ${position}%, #04554D)`
  if (direction) {
    position < 140 ? position++ : direction = false
  }
  else {
    position > -50 ? position-- : direction = true
  }
}, 30)