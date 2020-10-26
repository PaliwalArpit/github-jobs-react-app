import React from "react";
import { Form, Col } from "react-bootstrap";
export default function searchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className='align-item-end'>
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.description}
            name="description"
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.location}
            name="location"
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col} xs='auto' className='ml-2'>
            <Form.Check onChange={onParamChange} value={params.full_name} name="full_time" label="Only full time" type="checkbox" className='mb-2'/>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
