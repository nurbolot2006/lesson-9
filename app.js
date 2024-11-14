

const menu = [
    {
        img: 'breacfest.svg',
        name: 'breakfest'
    },
    {
        img: 'lunch.svg',
        name: 'lunch'
    },
    {
        img: 'diner.svg',
        name: 'dinner'
    },
    {
        img: 'dessert.svg',
        name: 'dessert'
    },
    {
        img: 'bite.svg',
        name: 'quick bite!'
    },
]

//DOM
const menuEl = document.getElementById('menu')
menuEl.innerHTML = menu.map( m => {
    return `
        <div>
            <img src="./assets/${m.img}" alt="">
            <h4>${m.name}</h4>
        </div>`
}).join('')