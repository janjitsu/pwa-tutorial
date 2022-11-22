import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Users from './Users';

function App() {
    return (
        <div className="App">
            <div className="Navbar">
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="home">PWAPP</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="users">Users</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/users" element={<Users/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
