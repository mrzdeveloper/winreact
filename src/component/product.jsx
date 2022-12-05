import { Component } from 'react';
import '../styles/style.css'

class Product extends Component {
    state = {
        count: 0,
        productname: 'laptop'
    }
    img = 'https://picsum.photos/200'
    render() {
        return (<>
            <div className=''>

                <span className='m-2 '>{this.state.productname}</span>
                <span className='m-2'>{this.state.count}</span>
                <button onClick={this.increse} className='m-2 btn btn-s btn-primary'>+</button>
                <button onClick={this.decrese} className='m-2 btn btn-s btn-secondary'>-</button>
                <button onClick={() => { this.delete(55) }} className='m-2 btn btn-s btn-danger'>delet</button>
                <img src={this.img} alt="" />
            </div>
        </>);
    }
    increse = () => {
        this.setState({ count: this.state.count + 1, productname: this.state.productname = 'pc' })

    }

    decrese = () => {
        this.setState({ count: this.state.count - 1, productname: this.state.productname = 'laptop' })

    }
    delete = (itemid) => {
        this.setState({ count: this.state.count = 0, productname: this.state.productname = 'laptop' })
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