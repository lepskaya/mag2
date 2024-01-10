import React from "react";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Items from "./components/Items.js";
import Categories from "./components/Categories.js";
import ShowFullItem from "./components/ShowFullItem.js";


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [],
            showFullItem: false,
            fullItem: {}
        }

        this.state.currentItems = this.state.items
        console.log(this.state.currentItems)
        console.log(this.state.items)
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

                {this.state.showFullItem &&
                    <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        )
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
/*

items: [
                {
                    id: 1,
                    title: 'Кроватка овальная',
                    img: 'krovatka1.jpg',
                    desc: 'Антел Solnyshko 3 в 1 колеса + продольный маятник / белый-бук',
                    category: 'baby_crib',
                    price: '600'
                },
                {
                    id: 2,
                    title: 'Комод пеленальный',
                    img: 'komod1.jpg',
                    desc: 'Sweet Baby Bravo / белый премиум',
                    category: 'dresser',
                    price: '450'
                },
                {
                    id: 3,
                    title: 'Комод пеленальный',
                    img: 'komod2.jpg',
                    desc: 'Incanto 800/4 ЛДСП с узким столиком',
                    category: 'dresser',
                    price: '500'
                },
                {
                    id: 4,
                    title: 'Коляска универсальная Adamex Belissa',
                    img: 'kolaska.jpg',
                    desc: '2 в 1, PS-33 - светло-бежевая',
                    category: 'pram',
                    price: '2600'
                },
                {
                    id: 5,
                    title: 'Распашонка',
                    img: 'od1.jpg',
                    desc: 'КТр-47 рисунок/белый',
                    category: 'cloth',
                    price: '20'
                },
                {
                    id: 6,
                    title: 'Комплект одежды',
                    img: 'od2.webp',
                    desc: 'боди + штаны для мальчика',
                    category: 'cloth',
                    price: '45'
                }
            ],
 */