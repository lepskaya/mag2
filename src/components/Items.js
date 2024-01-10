import React, {useEffect, useState} from "react";
import axios from "axios";
import Item from './Item.js'

function Items()  {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4444/items').then((r) => {
      setItems(r.data)
    }).catch((e) => {
      console.log(e)
    })
  }, []);
/*
  return (
      <div>
        <h1>items</h1>
        <ul>
          {items.map((i) => (<li key={i._id}>
            {i.title} ({i.desc})
          </li>))}
        </ul>
      </div>
  )
*/
    return (
      <main>
        {items.map(el=> (
          <Item key={el._id} item={el}  />
        ))}
      </main>
    )
}

export default Items