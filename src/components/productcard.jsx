// write product card here
// write product card here
import React from 'react'
import Button from './button';

const productcard = () => {

    const productImage = "https://www.tinyminymo.com/cdn/shop/files/Harry-Potter-Action-Figure-5.jpg?v=1741539516&width=720";
    const productName = "Harry Potter Figures";
    const productPrice = "$50" ;
  return (
    <div className='productcard'>
        <img src={productImage} alt="Image" />
        <p>{productName}</p>
        <p>{productPrice}</p>
        <Button/>
      
    </div>
  )
}

export default productcard