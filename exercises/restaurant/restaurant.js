var menu = [
 {name: "Appetizer", menuItem: "soup", hotCold: true},
 {name: "Desert", menuItem: "pie", hotCold: false},
 {name: "mainCourse", menuItem: "potatoe", hotCold: true}
]

// constructer function
function MenuItem(nme, mItem, hotCold) {
    this.name = nme;
    this.menuItem = mItem;
    this.hotCold = hotCold;
}

//var drinks = new MenuItem("soda", "Bitter Lemon", false); 
menu.push(new MenuItem("soda", "Bitter Lemon", false));
menu.push(new MenuItem("mainCourse", "Lemon Chicken", true));
menu.push(new MenuItem("soda", "7-Up", false));

console.log(menu);
