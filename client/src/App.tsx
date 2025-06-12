export interface Item {
  item_name: string;
  item_name_toLowerCase: string;
  item_id: number;
  price: number;
  SupermercadoId: number;
}

export interface Tag {
  id: string;
  text: string;
}

import { useState, useEffect, FC, Dispatch, SetStateAction } from 'react'
import logo from '../img/logo.png'
import Items from "./items"
import Search from "./search"
// import { format } from 'date-fns';

import './App.css'



const App: FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

    console.log('this is items', items);

  const getItems = async (): Promise<void> => {
    try {
      const response = await fetch('http://192.168.31.133:3000/itemTags', { // which server are you using instead of localhost
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tags),
      });
      const data: Item[] = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

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
            {items.map((element, index) => (
                <Items key={index} itemsOO={element} />
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