import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  return (
    <div>
      <a href='/'><FontAwesomeIcon icon={ faCartPlus } /></a>
      
    </div>
  )
}

export default CartWidget

