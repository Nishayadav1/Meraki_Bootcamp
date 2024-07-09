// script.js

const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.00,
        img: "./img/buttermilk.webp",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 2,
        title: "Diner Double",
        category: "lunch",
        price: 13.99,
        img: "./img/dinner.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "./img/godzila.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 4,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "./img/country.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "./img/egg.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "shakes",
        price: 18.99,
        img: "./img/oreo.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam enim porro tempore vero delectus est et."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards');
    const btnContainer = document.querySelector('.btn_Container');

    function displayMenuItems(menuItems) {
        let displayMenu = menuItems.map(item => {
            return `
            <div class="cards-itmes">
                <img src=${item.img} alt=${item.title} class="pic">
                <div class="card-image-info">
                    <div class="header_flex">
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price.toFixed(2)}</h4>
                    </div>
                    <p>${item.desc}</p>
                </div>
            </div>
            `;
        });
        displayMenu = displayMenu.join('');
        cardsContainer.innerHTML = displayMenu;
    }

    function displayMenuButtons() {
        const categories = menu.reduce((values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ['all']);
        
        const categoryButtons = categories.map(category => {
            return `<button class="filterBtn" data-id="${category}">${category}</button>`;
        }).join('');
        
        btnContainer.innerHTML = categoryButtons;
        const filterBtns = btnContainer.querySelectorAll('.filterBtn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.id;
                const menuCategory = menu.filter(menuItem => {
                    if (menuItem.category === category) {
                        return menuItem;
                    }
                });
                if (category === 'all') {
                    displayMenuItems(menu);
                } else {
                    displayMenuItems(menuCategory);
                }
            });
        });
    }

    displayMenuItems(menu);
    displayMenuButtons();
});
