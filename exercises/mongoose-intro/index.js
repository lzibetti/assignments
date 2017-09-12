const mongoose = require("mongoose");
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/mongeese', () => {
    console.log("connect to mongoose");
});

let mongeesSchema = new Schema({
    interests: [String],
    hopes: [String],
    favoriteHolliday: String,
    isMarried: Boolean,
    jerseyNumber: Number,
    warcry: String
})

let MongeeseModel = mongoose.model("mongeese", mongeesSchema);

function addMongoose(mongoose) {
    let newMongoose = new MongeeseModel(mongoose);
    newMongoose.save((err, mongoose) => {
        if (err) console.error(err);
        if (mongoose === null) {
            console.log("NOT FOUND")
        } else {
            console.log(mongoose);
        }
    })
}

function getMongoose(id) {
    MongeeseModel.find(id, (err, mongoose) => {
        if (err) console.error(err);
        if (mongoose === null) {
            console.log("NOT FOUND")
        } else {
            console.log(mongoose);
        }
    })
}

function deleteMongoose(id) {
    MongeeseModel.findByIdAndRemove(id, (err, mongoose) => {
        if (err) console.error(err);
        if (mongoose === null) {
            console.log("NOT FOUND")
        } else {
            console.log(mongoose);
        }
    })
}

function editMongoose(id) {
    MongeeseModel.findByIAndUpdated(id, editedMongoose, {new: true}, (err, mongoose)=>{
            if (err) console.error(err);
            if (mongoose === null) {
                console.log("NOT FOUND")
            } else {
                console.log(mongoose);
            }
        })
    }
    // addMongoose({
    //     interests: ["Fishing", "Motorcycle Riding", "Crocheting", "Horse Polo"],
    //     hopes: ["World Peace", "World Domination", "A Raise"],
    //     isMarried: false,
    //     jerseyNumber: 7,
    //     warcry: "SICKSSSS!!!!!"
    // })
    // addMongoose({
    //     interests: ["Fishing", "Solve Mazea"],
    //     hopes: ["World Peace", "World Domination", "A Raise"],
    //     isMarried: false,
    //     jerseyNumber: 90,
    //     warcry: "aMAZE!!!"
    // })

getMongoose("59b71fbfca39f73935ed1bcf");
// getMongoose("59b71f6209215e38e63eac2c");
    // getMongoose({
    //     jerseyNumber: 7
    // })

    // deleteMongoose("59b71f6209215e38e63eac2b");