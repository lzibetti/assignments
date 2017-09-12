const uid = require("uuid4");
const Database = function(){
    this.bountyItems = []
}

Database.prototype.find = function(){
    return this.bountyItems;
}

Database.prototype.findOne = function(id){
    let retrieveItem;
    this.bountyItems.forEach((item)=>{
        if(id === item._id)
            retrieveItem = item;
    })
    return retrieveItem;
}

Database.prototype.save = function (item){
    item._id = uid();
    this.bountyItems.push(item);
    return item;
}

Database.prototype.findOneAndUpdate = function(id, editItem){
    let newItem;
    this.bountyItems.forEach((item, index)=>{
        if(id === item._id){
            let oldItem = this.bountyItems[index];
            oldItem = Object.assign(oldItem, editItem);
            newItem = oldItem;
        }
    })
    return newItem;
}

Database.prototype.findOneAndRemove = function(id){
    let removeItem;
    this.bountyItems.forEach((item, index)=>{
        if(id === item._id){
            removeItem = this.bountyItems.splice(index, 1);
        }
    })
    return removeItem[0];
}
module.exports = Database;