import {
  GoogleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import Input from "antd/es/input/Input";
import React from "react";
import { Link } from "react-router";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white  flex items-center justify-center  px-4">
      <Card className=" h-1/4 w-full max-w-md p-6 shadow-lg ">
        <h1 className="text-center font-bold mb-4">CREATE ACCOUNT</h1>
        <form className="w-[260px] md:w-[400px] flex flex-col gap-4 ">
          <div className="flex gap-6">
            <div>
              <label htmlFor="firstName">First Name</label>
              <Input type="text" placeholder="Monicah" name="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <Input type="text" name="lastName" placeholder="Wanjiru"></Input>
            </div>
          </div>
          <label htmlFor="email"> Email:</label>
          <Input type="email" placeholder="accountName@gmail.com" />
          <label htmlFor="password">Password:</label>
          <Input.Password
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button type="primary">Create Account</Button>
        </form>
        <h3 className="mt-4">
          Already have an account? <Link to={"/login"}>login</Link>
        </h3>
        <div className="flex justify-between items-center mt-4">
          <hr className="w-1/3 text-gray-400 " />
          <span>Or</span>
          <hr className="w-1/3 text-gray-400" />
        </div>

        <p className="mt-4">Create account with</p>
        <div className="flex justify-center ">
          <GoogleOutlined style={{ fontSize: "30px" }} />
        </div>
        <p className="text-center">Google</p>
      </Card>
    </div>
  );
}

export default Register;
