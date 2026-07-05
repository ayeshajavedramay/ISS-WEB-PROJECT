import { useState } from 'react';
import Admin_navbar from "./Admin_navbar";
import Footer from "./Footer";
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Add_product() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData directly (no complex payload wrapping or parsing)
      await axios.post('https://iss.site.je/Database/addproduct_process.php', formData);
      alert("Product added successfully!");
      setFormData({ name: "", category: "", price: "", stock: "", description: "", imageUrl: "" });
    }
    catch (error) {
      console.error(error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Admin_navbar />
      <Container className="flex-grow-1 py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="fw-bold mb-4">Add New Product</h2>
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Product Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Category</Form.Label>
                        <Form.Select name="category" value={formData.category} onChange={handleChange} required>
                          <option value="">Select Category...</option>
                          <option value="Head Protection">Head Protection</option>
                          <option value="Foot Protection">Foot Protection</option>
                          <option value="Body Protection">Body Protection</option>
                          <option value="Fall Protection">Fall Protection</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Price (PKR)</Form.Label>
                        <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Stock Quantity</Form.Label>
                        <Form.Control type="number" name="stock" value={formData.stock} onChange={handleChange} required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Image URL</Form.Label>
                    <Form.Control type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Description</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} required />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 fw-bold py-2">Add Product</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Add_product;
