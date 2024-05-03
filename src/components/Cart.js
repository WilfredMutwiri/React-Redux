import { useSelector,useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";
const Cart = () => {
    const products=useSelector(state => state.cart);
    const dispatch=useDispatch();
    if(!products){
        return <div>No products available in the cart!</div>;
    }

    const removeToCart=(id)=>{
        dispatch(remove(id))
    }

    const Cards=products.map(product=>(
        <div className="col-md-12">
            <Card key={product.id} className='h-96' style={{ width: '18rem' }}>
                <div className='m-auto'>
                    <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}} />
                </div>
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                Ksh {product.price}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item</Button>
            </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <div className="row">
            {Cards}
        </div>
    );
}
 
export default Cart