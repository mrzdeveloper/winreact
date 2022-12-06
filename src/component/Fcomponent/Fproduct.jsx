import { useState } from 'react';

const Product = ({ productName, count: propCount, children }) => {
    const [count, setCount] = useState(propCount);
    return (
        <div>
            <span className='m-2 '>{productName}</span>
            <span className='m-2 bg-success badge'>{format()}</span>
            <button onClick={increse} className='m-2 btn btn-s btn-primary '>+</button>
            <button onClick={decrese} className='m-2 btn btn-s btn-secondary'>-</button>
            <button onClick={delet} className='m-2 btn btn-s btn-danger'>delet</button>
            {children}
        </div>

    );

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
        if (count === 0) {
            return 'zero'
        } else {
            return count;
        }
    }
}
export default Product; 