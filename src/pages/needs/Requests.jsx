import React from "react";

function Requests() {
  return (
    <div>
      <h2>New Procurement Request</h2>
      <form className="flex flex-col">
        <label htmlFor="requestId">Request ID:</label>
        <input type="text" name="requestId" placeholder="e.g. REQ-0012" />
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          name="itemName"
          placeholder="Enter the requested item"
        />
        <label htmlFor="category">Category:</label>
        <select name="category">
          <option value="Goods">Goods</option>
          <option value="Services">Services</option>
          <option value="Works">Works</option>
        </select>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" name="quantity" placeholder="Amount required" />
        <label htmlFor="unit">Unit of Measure:</label>
        <select name="unit">
          <option value="pieces">Pieces</option>
          <option value="kg">KG</option>
          <option value="cartons">Cartons</option>
          <option value="liters">Liters</option>
          <option value="hours">Hours</option>
        </select>
        <label htmlFor="department">Department:</label>
        <select name="department">
          <option value="Accounting">Accounting</option>
          <option value="IT">IT</option>
          <option value="Operations">Operations</option>
          <option value="Procurement">Procurement</option>
        </select>
        <label htmlFor="reason">Reason / Justification:</label>
        <textarea
          name="reason"
          placeholder="Why is the item needed?"
          rows={3}
        ></textarea>
        <label htmlFor="status">Status:</label>
        <input type="text" name="status" value="Pending" readOnly />
        <label htmlFor="date">Date Needed By:</label>
        <input type="date" name="date" />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Requests;
