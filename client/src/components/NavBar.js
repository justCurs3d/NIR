import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)

    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>CosmeticPlanet</Navbar.Brand>
                <Nav className="me-auto">
                   </Nav>

            {user.isAuth ?
                <Nav>
                        <Button
                        variant={"outline-light"}
                        onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        AdminMode
                    </Button>                    }
                    <Button
                        variant={"outline-light"}
                        style={{marginLeft: '10px'}}
                        onClick={() => logOut()}
                    >
                        Выйти
                    </Button>
                </Nav>
                    :
                <Nav>
                    <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;