import { useEffect, useState } from "react";
import Container from "../components/layout/Container";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const name = localStorage.getItem("userName") || "Marry Doe";
    const email = localStorage.getItem("userEmail") || "Marry@Gmail.Com";
    setUserData({ name, email });
  }, []);

  return (
    <Container variant="top">
      <div>
        <h1 className="text-xl font-bold text-gray-800 mb-6">
          Account Settings
        </h1>

        <div className="flex items-start mb-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-primary rounded-full border-2 border-white flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          </div>

          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {userData.name}
            </h2>
            <p className="text-gray-600 text-sm">{userData.email}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </Container>
  );
};

export default Profile;
