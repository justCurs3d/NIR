import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import {observer} from "mobx-react-lite";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить брэнд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить товар
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible}  onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible}  onHide={() => setTypeVisible(false)}/>

        </Container>
    );
};

export default Admin;