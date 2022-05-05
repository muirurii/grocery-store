const products = [{
        name: 'Ovacado',
        amount_each: '1kg',
        category: "fruits",
        id: 1,
        img: "https://img.freepik.com/free-photo/avocado-dark-wood-background_1205-769.jpg?size=338&ext=jpg",
        price: 4,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Cabbage',
        amount_each: '1 kg',
        category: "vegetables",
        id: 2,
        img: "https://img.freepik.com/free-photo/fresh-cabbage_1339-359.jpg?size=338&ext=jpg",
        price: 6,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    }, {
        name: 'Capsicum',
        amount_each: '2kg',
        category: "vegetables",
        id: 3,
        img: "https://image.freepik.com/free-photo/pack-four-colorful-peppers_1203-1842.jpg",
        price: 5,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Courgettes',
        amount_each: '2kg',
        category: "vegetables",
        id: 4,
        img: "https://img.freepik.com/free-photo/top-view-fresh-zucchinis-isolated-wooden-kitchen-board-white-surface-with-copy-space_141793-80935.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    }, {
        name: 'Tomatoes',
        amount_each: '2kg',
        category: "vegetables",
        id: 5,
        img: "https://image.freepik.com/free-photo/tomatoes_144627-15413.jpg",
        price: 5,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Peanuts',
        amount_each: '2kg',
        category: "cereals",
        id: 6,
        img: "https://img.freepik.com/free-photo/peanuts-table_144627-12451.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'French beans',
        amount_each: '1kg',
        category: "cereals",
        id: 7,
        img: "https://img.freepik.com/free-photo/red-beans_144627-14875.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Bananas',
        amount_each: '1kg',
        category: "fruits",
        id: 8,
        img: "https://img.freepik.com/free-photo/yellow-banana-fruit_1203-7489.jpg?size=338&ext=jpg",
        price: 4,
        isFeatured: true,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Spinach',
        amount_each: '1 kg',
        category: "vegetables",
        id: 9,
        img: "https://img.freepik.com/free-photo/spinach-table_144627-20721.jpg?size=338&ext=jpg",
        price: 6,
        isFeatured: true,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    }, {
        name: 'Cassava',
        amount_each: '2kg',
        category: "vegetables",
        id: 10,
        img: "https://img.freepik.com/free-photo/arrangement-nutritious-cassava-roots_23-2149091023.jpg?size=338&ext=jpg",
        price: 5,
        isFeatured: true,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Potatoes',
        amount_each: '2kg',
        category: "vegetables",
        id: 11,
        img: "https://img.freepik.com/free-photo/new-potato-isolated-white-background-close-up_1088-988.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: true,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Sweet potatoes',
        amount_each: '1kg',
        category: "vegetables",
        id: 12,
        img: "https://image.freepik.com/free-photo/purple-sweet-potato_1205-697.jpg?1",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Maize',
        amount_each: '1kg',
        category: "cereals",
        id: 13,
        img: "https://image.freepik.com/free-photo/fresh-corn_1339-506.jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Peas',
        amount_each: '1kg',
        category: "cereals",
        id: 14,
        img: "https://image.freepik.com/free-photo/green-peas_144627-34032.jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Pepper',
        amount_each: '1kg',
        category: "cereals",
        id: 15,
        img: "https://img.freepik.com/free-photo/chili-pepper-isolated_1205-1721.jpg?size=338&ext=jpg&uid=R58078641&ga=GA1.2.1352482040.1642585726",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Melon',
        amount_each: '1kg',
        category: "fruits",
        id: 16,
        img: "https://img.freepik.com/free-photo/fresh-watermelon_1339-290.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Pumpkin',
        amount_each: '1kg',
        category: "fruits",
        id: 17,
        img: "https://img.freepik.com/free-photo/fresh-pumpkin_1339-282.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Apples',
        amount_each: '1kg',
        category: "fruits",
        id: 18,
        img: "https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?size=338&ext=jpg&uid=R58078641&ga=GA1.2.1352482040.1642585726",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Beans',
        amount_each: '1kg',
        category: "cereals",
        id: 19,
        img: "https://img.freepik.com/free-photo/red-beans_144627-14875.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Pawpaw',
        amount_each: '1kg',
        category: "fruits",
        id: 20,
        img: "https://img.freepik.com/free-photo/fresh-papaya-fruit_144627-34201.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Pineapple',
        amount_each: '1kg',
        category: "fruits",
        id: 21,
        img: "https://img.freepik.com/free-photo/raw-fresh-texture-vitamin-fruit_1172-220.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Strawberry',
        amount_each: '1kg',
        category: "fruits",
        id: 22,
        img: "https://img.freepik.com/free-photo/red-fresh-strawberries-with-green-leaves_114579-10506.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Grapes',
        amount_each: '1kg',
        category: "fruits",
        id: 23,
        img: "https://img.freepik.com/free-photo/red-grapes-wooden-tray-blue-surface_114579-34857.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Valencia Orange',
        amount_each: '1kg',
        category: "fruits",
        id: 24,
        img: "https://img.freepik.com/free-photo/sliced-whole-oranges_144627-3981.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Strawberry',
        amount_each: '1kg',
        category: "fruits",
        id: 25,
        img: "https://img.freepik.com/free-photo/red-fresh-strawberries-with-green-leaves_114579-10506.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Lentils',
        amount_each: '1kg',
        category: "cereals",
        id: 26,
        img: "https://image.freepik.com/free-photo/lentils_1368-8869.jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Greengrams',
        amount_each: '1kg',
        category: "cereals",
        id: 27,
        img: "https://image.freepik.com/free-photo/bean-gram_1339-221.jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Mangoe',
        amount_each: '1kg',
        category: "fruits",
        id: 28,
        img: "https://image.freepik.com/free-photo/mango_144627-27543.jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Red Onion',
        amount_each: '1kg',
        category: "vegetables",
        id: 29,
        img: "https://image.freepik.com/free-photo/red-onion_144627-15416.jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'White Onion',
        amount_each: '1kg',
        category: "vegetables",
        id: 2888,
        img: "https://img.freepik.com/free-photo/close-up-fresh-garlic_144627-34523.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Carrot',
        amount_each: '1kg',
        category: "vegetables",
        id: 2988,
        img: "https://image.freepik.com/free-photo/carrots-ready-eat_1205-49.jpg?1",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Beef',
        amount_each: '1kg',
        category: "meats",
        id: 30,
        img: "https://image.freepik.com/free-photo/raw-meat_144627-33840.jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Chicken',
        amount_each: '1kg',
        category: "meats",
        id: 31,
        img: "https://img.freepik.com/free-photo/raw-chicken-meat_1203-6759.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Pork',
        amount_each: '1kg',
        category: "meats",
        id: 32,
        img: "https://img.freepik.com/free-photo/slice-pork_1339-582.jpg?size=338&ext=jpg",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    },
    {
        name: 'Fish',
        amount_each: '1kg',
        category: "meats",
        id: 33,
        img: "https://img.freepik.com/free-photo/black-tilapia-tilapia_1339-853.jpg?size=338&ext=jpg&uid=R58078641&ga=GA1.2.1352482040.1642585726&uid=R58078641&ga=GA1.2.1352482040.1642585726",
        price: 7,
        isFeatured: false,
        isInCart: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Ea placeat vero minima, libero numquam eos nam, molestiae ipsam quis odit dicta praesentiu"
    }
]


export default products;