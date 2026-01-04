import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import Input from "../components/common/Input";
import RadioButton from "../components/common/RadioButton";
import Button from "../components/common/Button";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
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
    localStorage.setItem("userName", formData.fullName);
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userPhone", formData.phoneNumber);
    localStorage.setItem("userCompany", formData.companyName);
    localStorage.setItem("isAgency", formData.isAgency);
    navigate("/profile");
  };

  const isFormValid =
    formData.fullName &&
    formData.phoneNumber &&
    formData.email &&
    formData.password;

  return (
    <Container variant="top">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Create your PopX account
        </h1>

        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <Input
            label="Phone number"
            type="tel"
            name="phoneNumber"
            placeholder="Marry Doe"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <Input
            label="Email address"
            type="email"
            name="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Input
            label="Company name"
            name="companyName"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
          />

          <div className="mb-6">
            <p className="text-gray-700 mb-3 text-sm">Are you an Agency?*</p>
            <div className="flex space-x-6">
              <RadioButton
                label="Yes"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
              />
              <RadioButton
                label="No"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button type="submit" variant={isFormValid ? "primary" : "primary"}>
            Create Account
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
