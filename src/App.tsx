import React, {ChangeEvent, useState} from 'react';
import {Col, Container, Form, InputGroup, Navbar, Row} from "react-bootstrap";
import './style.scss';

export default function App() {
    const [chanA, setChanA] = useState(0);
    const [chanB, setChanB] = useState(0);

    return (
        <>
            <Navbar variant="dark" bg="dark">
                <Navbar.Brand>DMX Channel Calculator</Navbar.Brand>
            </Navbar>
            <Container as={"main"}>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={1} htmlFor="chan-a">Chan A</Form.Label>
                        <Col>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>DMX</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="number"
                                              name="chan-a"
                                              value={chanA}
                                              min="0"
                                              max="255"
                                              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, 255, setChanA)}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-2">
                                <Form.Control type="number"
                                              name="chan-a-pct"
                                              value={Math.round(chanA / 255 * 100)}
                                              min="0"
                                              max="100"
                                              onChange={(e: ChangeEvent<HTMLInputElement>) => handlePercentChange(e.target.value, 255, setChanA)}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>%</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={1} htmlFor="chan-b">Chan B</Form.Label>
                        <Col>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>DMX</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="number"
                                              name="chan-b"
                                              value={chanB}
                                              min="0"
                                              max="255"
                                              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, 255, setChanB)}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-2">
                                <Form.Control type="number"
                                              name="chan-b-pct"
                                              value={Math.round(chanB / 255 * 100)}
                                              min="0"
                                              max="100"
                                              onChange={(e: ChangeEvent<HTMLInputElement>) => handlePercentChange(e.target.value, 255, setChanB)}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>%</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Form.Group>
                    <hr/>
                    <Form.Group as={Row}>
                        <Form.Label column sm={1} htmlFor="absolute">16-Bit</Form.Label>
                        <Col>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>DMX</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="number"
                                              name="value"
                                              value={(chanA << 8) + chanB}
                                              min="0"
                                              max="65535"
                                              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                  const val = parseInt(e.target.value);
                                                  handleChange(val, 65535, (newVal => {
                                                      setChanA((newVal & 0xFF00) >> 8);
                                                      setChanB(newVal & 0xFF);
                                                  }));
                                              }}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-2">
                                <Form.Control type="number"
                                              name="value-pct"
                                              value={Math.round(((chanA << 8) + chanB) / 65535 * 100)}
                                              min="0"
                                              max="100"
                                              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                  const val = parseInt(e.target.value);
                                                  handlePercentChange(val, 65535, (newVal => {
                                                      setChanA((newVal & 0xFF00) >> 8);
                                                      setChanB(newVal & 0xFF);
                                                  }));
                                              }}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>%</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

function handlePercentChange(value: string | number, max: number, setter: (newVal: number) => void) {
    let intVal = value;
    if (typeof intVal !== 'number') {
        intVal = parseInt(intVal);
    }

    // Validate
    if (isNaN(intVal) || intVal < 0 || intVal > max) {
        return;
    }

    handleChange(Math.floor(intVal / 100 * max), max, setter);
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
