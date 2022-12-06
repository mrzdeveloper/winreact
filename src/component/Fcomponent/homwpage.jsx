import Product from './Fproduct';
import { useState } from 'react';

const Master = () => {
  const [pro] = useState([
    { id: 1, count: 2, productName: 'p30c0' },
    { id: 2, count: 25, productName: 'pc2' },
    { id: 3, count: 24, productName: 'pc3' }
  ])
  return (
    <>
      {pro.map((p, index) =>
        <Product key={index} count={p.count} productName={p.productName} >
          <p>hi mamadi</p>
        </Product>

      )
      }
    </>
  )
}
export default Master;

