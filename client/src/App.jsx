import { useState, useEffect } from 'react'
import logo from '../img/logo.png'
import Items from "./items"
import Search from "./search"
// import { format } from 'date-fns';

import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [tags, setTags] = useState([]);

    console.log('this is items', items);

  function getItems() {
    fetch('http://192.168.31.133:3000/itemTags', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tags),
        })
    .then((res) => res.json())
    .then((data) => setItems(data));
  }

  useEffect(() => {
    getItems();
  }, [tags]);


  return (
    <>
    <div className='dashboard'>
      <div className='navbar'>
        <img src={logo} className='logo'></img>
      </div>
      <div className='bodyBlock'>
        <div className='search'>
          <Search tags={tags} setTags={setTags} items={items} ></Search>
        </div>
        <div className='greenblock'> 
          {items.length ? 
          <div className='itemBlock' >
            {items.map((element) => (
              <Items itemsOO={element} itemsOg={items}  >
              </Items>
            ))} 
          </div>
          : 
          <div className='escriba'><p>Escriba el producto que está buscando en el buscador. Puede agregar tantos filtros desee.</p> <p>Para enviar presione la tecla "Enter" (o "Intro" si estás desde el celular) en su teclado</p><br/> <p>Ejemplo:</p>  <p>Primer filtro: "Cloro".</p><p>Segundo filtro: "Ajax"</p></div>
          }
        </div>
      </div>

    </div>
    </>
  )
}

export default App
