import { useState } from 'react';
import Admin_navbar from "./Admin_navbar";
import Footer from "./Footer";
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Update_product() {
  const [formData, setFormData] = useState({
    productId: "",
    price: "",
    stock: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData directly (no complex payload wrapping or parsing)
      await axios.post('http://localhost/Database/updateproduct_process.php', formData);
      alert(`Product ID ${formData.productId} updated successfully!`);
      setFormData({ productId: "", price: "", stock: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Admin_navbar />
      <Container className="flex-grow-1 py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="fw-bold mb-4">Update Product</h2>
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Product ID</Form.Label>
                    <Form.Control type="number" name="productId" placeholder="Enter ID to update" value={formData.productId} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">New Price (PKR)</Form.Label>
                    <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">New Stock Quantity</Form.Label>
                    <Form.Control type="number" name="stock" value={formData.stock} onChange={handleChange} required />
                  </Form.Group>
                  <Button variant="warning" type="submit" className="w-100 fw-bold py-2">Update Product</Button>
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

export default Update_product;
