import Product from "./C_product";
class MasterC extends Component {
    state = {
        Product: [
            { id: 1, count: 2, productName: 'laptop' },
            { id: 2, count: 8, productName: 'pc' },
            { id: 3, count: 3, productName: 'led' }
        ]
    }
    render() {
        return (
            <>
                {this.state.Product.map((p, index) => (
                    <Product key={index} productName={p.productName} count={p.count} id={p.id}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita excepturi est quibusdam, repudiandae corrupti omnis repellat rerum quod tempora facere. Dolorem omnis tenetur impedit, ipsa autem itaque nemo dicta!</p>
                    </Product>

                ))}
            </>);
    }
}

export default MasterC;