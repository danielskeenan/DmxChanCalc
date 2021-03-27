import React, {ChangeEvent, useState} from 'react';
import {Col, Form, Navbar, Row} from "react-bootstrap";
import './style.scss';

export default function App() {
    const [chanA, setChanA] = useState(0);
    const [chanB, setChanB] = useState(0);

    return (
        <>
            <Navbar variant="dark" bg="dark">
                <Navbar.Brand>DMX Channel Calculator</Navbar.Brand>
            </Navbar>
            <main className="container">
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={1} htmlFor="chan-a">Chan A</Form.Label>
                        <Col>
                            <NumberInput name="chan-a"
                                         value={chanA}
                                         onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, 255, setChanA)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={1} htmlFor="chan-b">Chan B</Form.Label>
                        <Col>
                            <NumberInput name="chan-b"
                                         value={chanB}
                                         onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, 255, setChanB)}
                            />
                        </Col>
                    </Form.Group>
                    <hr/>
                    <Form.Group as={Row}>
                        <Form.Label column sm={1} htmlFor="absolute">16-Bit</Form.Label>
                        <Col>
                            <NumberInput value={(chanA << 8) + chanB}
                                         max="65535"
                                         onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                             const val = parseInt(e.target.value);
                                             handleChange(val, 65535, (newVal => {
                                                 setChanA((newVal & 0xFF00) >> 8);
                                                 setChanB(newVal & 0xFF);
                                             }));
                                         }}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </main>
        </>
    );
}

function handleChange(value: string | number, max: number, setter: (newVal: number) => void) {
    let intVal = value;
    if (typeof intVal !== 'number') {
        intVal = parseInt(intVal);
    }

    // Validate
    if (isNaN(intVal) || intVal < 0 || intVal > max) {
        return;
    }
    setter(intVal);
}

function NumberInput(props: Record<string, any>) {
    return (
        <Form.Control type="number"
                      min="0"
                      max="255"
                      className="mb-2"
                      {...props}
        />
    );
}
