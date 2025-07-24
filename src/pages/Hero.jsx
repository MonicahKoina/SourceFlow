import { Button } from "antd";
import { useNavigate } from "react-router";

const Home = function () {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 text-center max-w-lg">
        <h1 className="text-4xl font-extrabold text-blue-900">
          👋 Welcome to SourceFlow
        </h1>
        <p className="text-lg text-gray-700">
          Streamline your procurement process from{" "}
          <span className="font-medium text-blue-800">request</span> to{" "}
          <span className="font-medium text-blue-800">verification </span> all
          in one place.
        </p>
        <Button
          type="primary"
          size="large"
          className="mt-2"
          onClick={() => navigate("register")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Home;
