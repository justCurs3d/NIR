import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type =>
            <ListGroup.Item
                style={{cursor: 'pointer'}}
                active={type.id === device.selectedType.id}
                onClick={(e) => {type.id === device.selectedType.id ? device.setSelectedType(0) : device.setSelectedType(type)}}
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;