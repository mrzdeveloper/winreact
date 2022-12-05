import { Component } from 'react';
import { useState } from 'react';

const Product = (props) => {
    const [count, setCount] = useState(0);
    return (

        <>
            <div>

                <span className='m-2 '>{props.productName}</span>
                <span className='m-2 bg-success badge'>{format()}</span>
                <button onClick={increse} className='m-2 btn btn-s btn-primary '>+</button>
                <button onClick={decrese} className='m-2 btn btn-s btn-secondary'>-</button>
                <button onClick={delet} className='m-2 btn btn-s btn-danger'>delet</button>
            </div>
        </>);

    function increse() {
        setCount(count + 1)
    }
    function decrese() {
        setCount(count - 1)
    }
    function delet() {
        setCount(count)
    }

    function format() {
        if (count === 5) {
            return 'zero'
        } else {
            return count;
        }
    }
}
export default Product; 