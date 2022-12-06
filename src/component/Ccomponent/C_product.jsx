import { Component } from 'react';

class Product extends Component {
    state = {
        count: this.props.count,
    }
    render() {
        const [ productName ] = this.props;
        return (<>
            <div className=''>

                <span className='m-2 '>{productName}</span>
                <span className='m-2'>{this.format()}</span>
                <button onClick={this.increse} className='m-2 btn btn-s btn-primary'>+</button>
                <button onClick={this.decrese} className='m-2 btn btn-s btn-secondary'>-</button>
                <button onClick={() => { this.delete(55) }} className='m-2 btn btn-s btn-danger'>delet</button>
                {this.props.children}
            </div>
        </>);
    }
    increse = () => {

    }

    decrese = () => {

    }
    delete = () => {
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