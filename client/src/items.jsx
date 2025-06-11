import './items.css'
import logoExcelsiorGama from '../img/logo-excelsior-gama-nuevo.png'
import logoAutomercadoElPlazas from '../img/logo-automercado-el-plazas.png'
import logoCentralMadeirense from '../img/logo-central-madeirense.png'

function Items(props) {

  function logoSelection() {
    console.log('props', props);
  if (props.itemsOO.SupermercadoId === 1) {
    return logoAutomercadoElPlazas
  } else if (props.itemsOO.SupermercadoId === 2) {
    return logoExcelsiorGama
  } else {
    return logoCentralMadeirense
  }
}


return (
<>


  <div className='cuadradoItem'>
    <img src={logoSelection(props.itemsOO)} className='logoSupermercado'></img>
    <div className='nombreYprecio'>
    <div className='nombreItem'>{props.itemsOO.item_name}</div>
    <div className='itemPrice'>Bs. {props.itemsOO.price}</div>
    </div>
  </div>

</>
)

}

export default Items