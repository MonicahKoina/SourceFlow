import { Button, Card, Input, Select, Row, Col, Typography } from "antd";
import React from "react";

const { Option } = Select;
const { Title } = Typography;

function MaterialRequest() {
  
  return (
    <div className="flex justify-center my-auto">
      <Card style={{ width: "80%", maxWidth: "900px" }}>
        <Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>
          Material Request Form
        </Title>
        <form className="flex flex-col gap-6">
          <Row gutter={24}>
            <Col span={12}>
              <label htmlFor="requestNumber" className="font-bold text-lg">
                Request Number
              </label>
              <Input size="large" readOnly name="requestNumber" />
            </Col>
            <Col span={12}>
              <label htmlFor="requestDate" className="font-bold text-lg">
                Request Date
              </label>
              <Input size="large" type="date" readOnly name="requestDate" />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <label htmlFor="materialCode" className="font-bold text-lg">
                Material Code
              </label>
              <Input size="large" name="materialCode" placeholder="FILE-0981" />
            </Col>
            <Col span={12}>
              <label htmlFor="description" className="font-bold text-lg">
                Description
              </label>
              <Input
                size="large"
                name="description"
                placeholder="e.g Whiteboard Marker"
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <label htmlFor="quantity" className="font-bold text-lg">
                Quantity
              </label>
              <Input
                size="large"
                type="number"
                name="quantity"
                placeholder="10"
              />
            </Col>
            <Col span={12}>
              <label htmlFor="unit" className="font-bold text-lg">
                Unit
              </label>
              <Select size="large" style={{ width: "100%" }}>
                <Option value="kg">KG</Option>
                <Option value="reams">Reams</Option>
                <Option value="pieces">Pieces</Option>
              </Select>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <label htmlFor="status" className="font-bold text-lg">
                Status
              </label>
              <Input size="large" name="status" readOnly value="Pending" />
            </Col>
            <Col span={12}>
              <label htmlFor="department" className="font-bold text-lg">
                Department
              </label>
              <Select size="large" style={{ width: "100%" }}>
                <Option value="accounting">Accounting</Option>
                <Option value="it">IT</Option>
                <Option value="hr">HR</Option>
              </Select>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <label htmlFor="officer" className="font-bold text-lg">
                Officer Name
              </label>
              <Input size="large" name="officer" placeholder="Monicah Mugure" />
            </Col>
            <Col span={12}>
              <label htmlFor="dateRequired" className="font-bold text-lg">
                Required By
              </label>
              <Input size="large" type="date" name="dateRequired" />
            </Col>
          </Row>
          <div className=" flex justify-center">
            <Button
              type="primary"
              size="large"
              style={{
                fontSize: "18px",
                padding: "12px 40px",
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default MaterialRequest;
