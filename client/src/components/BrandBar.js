import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className="p-3 w-auto "
                    onClick={() => {brand.id === device.selectedBrand.id ? device.setSelectedBrand(0) : device.setSelectedBrand(brand)}}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    style={{cursor: 'pointer'}}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;