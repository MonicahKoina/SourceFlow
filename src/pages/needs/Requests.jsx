import { Button, DatePicker, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import React from "react";
import useRequestForm from "./RequestForm";

function Requests() {
  const requestId = useRequestForm((state) => state.requestId);
  const itemName = useRequestForm((state) => state.itemName);
  const category = useRequestForm((state) => state.category);
  const quantity = useRequestForm((state) => state.quantity);
  const unit = useRequestForm((state) => state.unit);
  const department = useRequestForm((state) => state.department);
  const reason = useRequestForm((state) => state.reason);
  const date = useRequestForm((state) => state.date);
  const setField = useRequestForm((state) => state.setField);

  return (
    <div>
      <form className="flex flex-col mx-auto gap-1  mt-4 max-w-[260px] md:max-w-[400px]">
        <h2 className="font-bold md:text-2xl">New Procurement Request</h2>
        <label htmlFor="requestId">Request ID:</label>
        <Input
          type="text"
          name="requestId"
          readOnly
          value={requestId}
          onChange={(e) => setField("requestId", e.target.value)}
        />
        <label htmlFor="itemName">Item Name:</label>
        <Input
          type="text"
          name="itemName"
          placeholder="Enter the requested item"
          value={itemName}
          onChange={(e) => setField("itemName", e.target.value)}
        />
        <label htmlFor="category">Category:</label>
        <Select
          name="category"
          value={category}
          onChange={(value) => setField("category", value)}
        >
          <Option value="Goods">Goods</Option>
          <Option value="Services">Services</Option>
          <Option value="Works">Works</Option>
        </Select>
        <label htmlFor="quantity">Quantity:</label>
        <Input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setField(e.target.value)}
          placeholder="Amount required"
        />
        <label htmlFor="unit">Unit of Measure:</label>
        <Select
          name="unit"
          value={unit}
          onChange={(value) => setField("unit", value)}
        >
          <Option value="pieces">Pieces</Option>
          <Option value="kg">KG</Option>
          <Option value="cartons">Cartons</Option>
          <Option value="liters">Liters</Option>
          <Option value="hours">Hours</Option>
        </Select>
        <label htmlFor="department">Department:</label>
        <Select
          name="department"
          value={department}
          onChange={(value) => setField("department", value)}
        >
          <Option value="Accounting">Accounting</Option>
          <Option value="IT">IT</Option>
          <Option value="Operations">Operations</Option>
          <Option value="Procurement">Procurement</Option>
        </Select>
        <label htmlFor="reason">Reason / Justification:</label>
        <TextArea
          name="reason"
          value={reason}
          onChange={(e) => setField("reason", e.target.value)}
          placeholder="Why is the item needed?"
        />
        <label htmlFor="status">Status:</label>
        <Input type="text" name="status" value="Pending" readOnly />
        <label htmlFor="date">Date Needed By:</label>
        <DatePicker
          name="date"
          value={date}
          onChange={(date, dateString) => setField("date", dateString)}
          renderExtraFooter={() => "extra footer"}
        />
        <Button type="primary">Submit Request</Button>
      </form>
    </div>
  );
}

export default Requests;
