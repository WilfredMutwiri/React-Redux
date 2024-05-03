import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = () => {
    const cartProduct=useSelector(state=>state.cart)
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Nav>
            <Nav.Link as={Link} to='/'>Products</Nav.Link>
        </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-end'>
            <Nav.Link as={Link} to='/Cart'>
                <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span class="-mt-2 text-red-600">{cartProduct.length}</span>
                </div>
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
}
export default NavBar;