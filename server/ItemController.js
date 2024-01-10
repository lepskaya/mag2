import ItemModel from './models/Item.js'

export const getItems = async (req, res) => {
    try {
        const items = await ItemModel.find();
        console.log(items);
        res.status(200).json(items);
    } catch (e) {
        res.status(500).json({
            message: "не удалось получить элементы Items"
        })
    }
}

/*
export const setItem = (req,res) => {
    try {
        const doc = new ItemModel({
            title: "Распашонка",
            img: "od1.jpg",
            desc: "КТр-47 рисунок/белый",
            category: "cloth",
            price: "20"
        })
        const item = doc.save();
        res.json(item);
    } catch (e) {

    }
}

 */