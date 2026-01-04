import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", formData.email);
    navigate("/profile");
  };

  const isFormValid = formData.email && formData.password;

  return (
    <Container variant="top">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Signin to your PopX account
        </h1>
        <p className="text-gray-500 mb-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant={isFormValid ? "primary" : "disabled"}>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
