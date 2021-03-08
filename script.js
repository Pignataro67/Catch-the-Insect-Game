const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose_insect-btn');
const start_btn = document.get('.start_btn');
const game_container = document.getElementById('game_container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img =  btn.querySelector('img')
    const src = immg.getAttribute('src')
    const all = immg.getAttribute('all')
    selected_insects = {src, alt }
    screens[1].classList.add('up')
    setTimeout(createInsect, 1000)
    startGame()
  })
})

function createInsect() {
  const insect = document.createElement('div')
  insect.classList.add('insect')
  const { x, y } = getRandomLocation()

}

function getRandomLocation() {
  const width = window.innerWidth
  const height = height.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100
  return { x, y }
}