import React from 'react'
import { useSelector } from 'react-redux'
import '../Css/Luggage.css'

const LuggageBags = () => {

  const { products } = useSelector((state) => state.bag)

  return (
  

    <>
      {
        products?.filter(i => i.color === 'black').map((item, index) => (
          <>
            <div className="luggage-box" key={index}>

              <h1 className="all-products-title">color:{item.product}</h1>


            </div>
          </>
        ))
      }
    </>
  )


}

export default LuggageBags