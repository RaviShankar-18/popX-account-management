import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import Button from "../components/common/Button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Container variant="bottom">
      <div className="">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 font-medium mb-4 text-sm">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>

        <div className="space-y-2">
          <Button onClick={() => navigate("/signup")}>Create Account</Button>
          <Button variant="secondary" onClick={() => navigate("/login")}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
