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
                                         onChange={(e: ChangeEvent<HTMLInputElement>) => setChanA(parseInt(e.target.value))}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={1} htmlFor="chan-b">Chan B</Form.Label>
                        <Col>
                            <NumberInput name="chan-b"
                                         value={chanB}
                                         onChange={(e: ChangeEvent<HTMLInputElement>) => setChanB(parseInt(e.target.value))}
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
                                             setChanA((val & 0xFF00) >> 8);
                                             setChanB(val & 0xFF);
                                         }}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </main>
        </>
    );
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
