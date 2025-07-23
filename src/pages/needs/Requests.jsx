import { Button, DatePicker, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import React from "react";

function Requests() {
  return (
    <div>
      <form className="flex flex-col mx-auto gap-1  mt-4 max-w-[260px] md:max-w-[400px]">
        <h2 className="font-bold md:text-2xl">New Procurement Request</h2>
        <label htmlFor="requestId">Request ID:</label>
        <Input type="text" name="requestId" placeholder="e.g. REQ-0012" />
        <label htmlFor="itemName">Item Name:</label>
        <Input
          type="text"
          name="itemName"
          placeholder="Enter the requested item"
        />
        <label htmlFor="category">Category:</label>
        <Select name="category">
          <Option value="Goods">Goods</Option>
          <Option value="Services">Services</Option>
          <Option value="Works">Works</Option>
        </Select>
        <label htmlFor="quantity">Quantity:</label>
        <Input type="number" name="quantity" placeholder="Amount required" />
        <label htmlFor="unit">Unit of Measure:</label>
        <Select name="unit">
          <Option value="pieces">Pieces</Option>
          <Option value="kg">KG</Option>
          <Option value="cartons">Cartons</Option>
          <Option value="liters">Liters</Option>
          <Option value="hours">Hours</Option>
        </Select>
        <label htmlFor="department">Department:</label>
        <Select name="department">
          <Option value="Accounting">Accounting</Option>
          <Option value="IT">IT</Option>
          <Option value="Operations">Operations</Option>
          <Option value="Procurement">Procurement</Option>
        </Select>
        <label htmlFor="reason">Reason / Justification:</label>
        <TextArea name="reason" placeholder="Why is the item needed?" />
        <label htmlFor="status">Status:</label>
        <Input type="text" name="status" value="Pending" readOnly />
        <label htmlFor="date">Date Needed By:</label>
        <DatePicker renderExtraFooter={() => "extra footer"} />
        <Button type="primary">Submit Request</Button>
      </form>
    </div>
  );
}

export default Requests;
