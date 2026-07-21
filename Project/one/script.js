// const main = document.querySelector("main")
const box = document.querySelector('.box')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    setTimeout(() => { })
})

// let rY = Math.floor(Math.random() * 80)
// let rX = Math.floor(Math.random() * 80)

// box.style.top = `${rY}%`;
// box.style.left = `${rX}%`;

localStorage.setItem('Ayush', 'Good Boe')
let lsd = localStorage.getItem('Ayush')
console.log(lsd)

let data = [
    {
        name: 'Ayush',
        age: 19,
        address: 'mera Home'
    },

    {
        name: 'Jyoti',
        age: 19,
        address: 'uska Home'
    },

    {
        name: 'Mini',
        age: 19,
        address: 'uska Home'
    }
]



localStorage.setItem('test-data', JSON.stringify(data))

let teet = localStorage.getItem('test-data')

let value = JSON.parse(teet)


console.log(teet)
console.log(value)



