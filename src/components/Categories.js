import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'baby_crib',
                    name: 'Кроватки для новорожденных'
                },
                {
                    key: 'dresser',
                    name: 'Пеленальные комоды'
                },
                {
                    key: 'pram',
                    name: 'Коляски'
                },
                {
                    key: 'cloth',
                    name: 'Одежда для новорожденных'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories