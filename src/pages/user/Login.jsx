import { Button, Card, Input } from "antd";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router";
function Login() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
        <Card className="w-full max-w-md p-6 shadow-lg">
          <h1 className="text-center font-bold">LOGIN</h1>
          <form className="w-[260px] md:w-[400px] flex flex-col justify-between gap-4">
            <label htmlFor="email">Email:</label>
            <Input type="email" placeholder="acountName@gmail.com"></Input>
            <label htmlFor="password">Password</label>
            <Input.Password
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <Button type="primary">Login</Button>
          </form>
          <h3 className="mt-4 flex justify-end">
            <Link> forgot password?</Link>
          </h3>
        </Card>
      </div>
    </>
  );
}

export default Login;
