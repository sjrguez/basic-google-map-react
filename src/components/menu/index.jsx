import {VehicleStatus, VehicleType, Provincias, vehicleYear} from './menu.data'
import { Col, Row } from 'react-bootstrap';

export const MenuMaps = () => {

    return (
        <Row>
            <Col sm={6} md  ={4} lg={3}>
                    <label> Estado: </label>
                    <select className="form-select" >
                    <option value="">Selecccione estado</option>
                    {
                        VehicleStatus.map((status) => {
                            return (
                            <>
                                <option value={status}>{status}</option>
                            </>
                            )
                        })
                    }
                </select>
            </Col>
            
            <Col sm={6} md  ={4} lg={3}>
                    <label> Tipo de vehiculo: </label>
                    <select className="form-select" >
                    <option value="">Selecccione tipo</option>
                    {
                        VehicleType.map((type) => {
                            return (
                            <>
                                <option value={type}>{type}</option>
                            </>
                            )
                        })
                    }
                </select>
            </Col>
            <Col sm={6} md  ={4} lg={3}>
                    <label> Provincia: </label>
                    <select className="form-select" >
                    <option value="">Selecccione Provincia</option>
                    {
                        Provincias.map((provincia) => {
                            return (
                            <>
                                <option value={provincia}>{provincia}</option>
                            </>
                            )
                        })
                    }
                </select>
            </Col>
            <Col sm={6} md  ={4} lg={3}>
                    <label> Año: </label>
                    <select className="form-select" >
                    <option value="">Selecccione año</option>
                    {
                        vehicleYear().map((year) => {
                            return (
                            <>
                                <option value={year}>{year}</option>
                            </>
                            )
                        })
                    }
                </select>
            </Col>
            
        </Row>
    )
}