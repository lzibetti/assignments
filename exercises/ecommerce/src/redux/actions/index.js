export function loadData(){
    return{
        type: "LOAD_DATA",
        men: [
            {
                name: "Hawaiian",
                description: "",
                price: "$98",
                size: "",
                category: "male"
            },
            {
                name: "Maui",
                description: "",
                price: "$374",
                category: "male"
            }
        ],
        women: [
            {
                name: "Spring",
                description: "",
                price: "$422",
                category: "female"
            },
            {
                name: "Fall",
                description: "",
                price: "$28",
                category: "female"
            }
        ],
        cart: []
    }
}