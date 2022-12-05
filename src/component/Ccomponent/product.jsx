import { Component } from 'react';
import '../styles/style.css'

class Product extends Component {
    state = {
        count: 0,
        productname: 'laptop'
    }
    render() {
        return (<>
            <div className=''>

                <span className='m-2 '>{this.state.productname}</span>
                <span className='m-2'>{this.state.count}</span>
                <button onClick={this.increse} className='m-2 btn btn-s btn-primary'>+</button>
                <button onClick={this.decrese} className='m-2 btn btn-s btn-secondary'>-</button>
                <button onClick={() => { this.delete(55) }} className='m-2 btn btn-s btn-danger'>delet</button>
            </div>
        </>);
    }
    increse = () => {

    }

    decrese = () => {

    }
    delete = (itemid) => {
    }
    format = () => {
        if (this.state.count === 0) {
            return 'zero';
        } else {
            return this.state.count;
        }
    }

}

export default Product;