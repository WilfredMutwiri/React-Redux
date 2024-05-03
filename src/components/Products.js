import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
const Product = () => {
    const dispatch = useDispatch();
    const [products,getProducts]=useState([])
    useEffect(()=>{
        // product api call
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(result=>getProducts(result))
    },[]);

    const addToCart=(product)=>{
        // dispatch an add action
        dispatch(add(product))

    }
    // card creation
    const Cards=products.map(product=>(
        <div className="col-md-3">
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
            <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
            </Card.Footer>
            </Card>
        </div>
    ))
    return ( 
        <>
        <h1 class="text-center pt-5 text-xl font-bold">Product Dashboards</h1>
        <div className='row'>
            {Cards}
        </div>
        </>
     );
}
 
export default Product;

// https://fakestoreapi.com/products