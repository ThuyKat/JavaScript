function Person() {
    this.age = 0;
    
    setInterval(function(){
        this.age++;
        console.log(this.age)
    }, 1000) // this points to setInterval -> print NaN
}

const p = new Person("Phuc");

// now if we use arrow function, this will be based on this.age to identify what this is pointing to
setInterval(()=>{
    this.age++;
    console.log(this.age)
}, 1000) // arrow function will be lexically scoped, this in this case depends on outer function. Since outer function has 'this' defined, it takes defined'this' from outer function



const orders = [
    {
        id: 1,
        user: {
            name: "John Doe",
            email: "john.doe@example.com",
        },
        items: [
            { product: "Laptop", quantity: 1, price: 1000 },
            { product: "Mouse", quantity: 2, price: 50 },
        ],
        status: "shipped",
    },
    {
        id: 2,
        user: {
            name: "Jane Smith",
            email: "jane.smith@example.com",
        },
        items: [
            { product: "Phone", quantity: 1, price: 800 },
            { product: "Charger", quantity: 1, price: 20 },
        ],
        status: "pending",
    },
    {
        id: 3,
        user: {
            name: "Sam Green",
            email: "sam.green@example.com",
        },
        items: [
            { product: "Headphones", quantity: 1, price: 200 },
            { product: "Keyboard", quantity: 1, price: 100 },
        ],
        status: "shipped",
    },
];
const transformedOrders = orders.map(order => {
    // let totalPrice = 0;
    // for (let i = 0; i < order.items.length; i++) {
    //     totalPrice = totalPrice + (order.items[i].price * order.items[i].quantity)
    // }
    const totalPrice = order.items.reduce((total, item) => total + (item.price * item.quantity), 0)

    return {
        name: order.user.name,
        status: order.status,
        totalPrice
    }

})

const shippedOrders = orders.filter(order => order.status === 'shipped')

console.log(transformedOrders)

// !Exercise:
/**
    Exercise 1: Transforming Data with map
    Task: You need to generate a list of orders that shows only the user's name, the total price of their order, 
    and the status of the order.

    Use map to iterate through the orders array.
    For each order, calculate the total price of all items purchased by the user.
    Return a simplified object containing the user.name, totalPrice, and status. 



    Expected Output:
    [
        { name: "John Doe", totalPrice: 1100, status: "shipped" },
        { name: "Jane Smith", totalPrice: 820, status: "pending" },
        { name: "Sam Green", totalPrice: 300, status: "shipped" },
    ]


    Exercise 2: Filtering Data with filter
    Task: You need to filter out orders that are still pending. Only shipped orders should be included in the final result.

    Use filter to only include orders where the status is "shipped".
    Return the filtered list of orders.
    
    Expected Output:
    [
        {
            id: 1,
            user: { name: "John Doe", email: "john.doe@example.com" },
            items: [ { product: "Laptop", quantity: 1, price: 1000 }, { product: "Mouse", quantity: 2, price: 50 } ],
            status: "shipped",
        },
        {
            id: 3,
            user: { name: "Sam Green", email: "sam.green@example.com" },
            items: [ { product: "Headphones", quantity: 1, price: 200 }, { product: "Keyboard", quantity: 1, price: 100 } ],
            status: "shipped",
        },
    ]

    ==================================================================

    Exercise 3: Using reduce to Calculate Total Revenue
    Task: Calculate the total revenue generated from all shipped orders.

    First, use filter to get only the shipped orders.
    Then, use reduce to sum the total price from all shipped orders.
    Return the total revenue.


    Expected output: Total Revenue: 1400

    ==================================================================


    Exercise 4: Combining map, filter, and reduce
    Task: You want to get a list of users who have spent more than $500 in a single order.
    Provide a list of their names and the amount they spent.

    Use map to calculate the total price for each order.
    Use filter to include only orders where the total price exceeds $500.
    Return an array of user names and the total price they spent.

    Expected output: 
    [
        { name: "John Doe", totalSpent: 1100 },
        { name: "Jane Smith", totalSpent: 820 },
    ]

    ==================================================================

    Exercise 5: Complex Filtering and Mapping
    Task: You need to get a list of all unique products purchased in shipped orders, 
    along with the total quantity sold for each product.

    First, use filter to get only the shipped orders.
    Use reduce to collect product names and their total quantities.
    Return an object where the keys are the product names, and the values are the total quantities sold.


    {
        Laptop: 1,
        Mouse: 2,
        Headphones: 1,
        Keyboard: 1
    }


    https://flexboxfroggy.com/
    https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
 */