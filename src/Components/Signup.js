import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Navbar from "./Navbar";
import styled from "styled-components";

const SignupStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;

`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin:30px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #00FFFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #45a049;
  }
`;

const Signup = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/accounts/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    if (data.error && data.error.email) {
      enqueueSnackbar(<p>{data.error.email[0]}</p>, { variant: "error" });
    } else if (data.error && data.error.phone_number) {
      enqueueSnackbar(<p>{data.error.phone_number[0]}</p>, {
        variant: "error",
      });
    } else if (data.error && data.error.password) {
      enqueueSnackbar(<p>{data.error.password[0]}</p>, { variant: "error" });
    } else if (data.error && data.error.user_name) {
      enqueueSnackbar(<p>{data.error.user_name[0]}</p>, { variant: "error" });
    } else if (data.error && data.error.confirm_password) {
      enqueueSnackbar(<p>{data.error.confirm_password[0]}</p>, {
        variant: "error",
      });
    } else {
      enqueueSnackbar(<p>{"Successfully registered.. please login"}</p>, {
        variant: "success",
      });
      navigate("/CreateStaff");
    }
  };

  return (
    <SignupStyled>
      <Navbar />
      <FormContainer>
        <Title>Sign-Up</Title>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="user_name"
            placeholder="User Name"
            required
            onChange={handleChange}
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <InputField
            type="number"
            name="phone_number"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />
          <SubmitButton type="submit">Sign-Up</SubmitButton>
        </form>
      </FormContainer>
    </SignupStyled>
  );
};

export default Signup;
