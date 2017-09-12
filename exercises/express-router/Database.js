const uid = require("uuid4");
const Database = function () {
    this.items = [];
}

Database.prototype.find = function () {
    return this.items;
}

Database.prototype.findOne = function (id) {
    let retrieveItem;
    this.items.forEach((item) => {
        if (id === item._id)
            retrieveItem = item;
    })
    return retrieveItem;
}

Database.prototype.findOneAndUpdate = function (id, editedItem) {
    let newItem;
    this.items.forEach((item, index) => {
        if (id === item._id) {
            let oldItem = this.items[index];
            oldItem = Object.assign(oldItem, editedItem);
            newItem = oldItem;
        }
    })
    return newItem;
}

Database.prototype.save = function (item) {
    //assign ID
    item._id = uid();
    //add to array
    this.items.push(item);
    // return item
    return item;
}

Database.prototype.findOneAndRemove = function (id) {
    let removedItem;
    this.items.forEach((item, index) => {
        if (id === item._id) {
            removedItem = this.items.splice(index, 1);
        }
    })
    return removedItem[0];
}
module.exports = Database;