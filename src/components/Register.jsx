import React from "react";
import { useGlobalContext } from "./context";
import { Button, Container, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { bgColor, setBgColor } = useGlobalContext();
  const [cookies, setCookie] = useCookies(["jwtToken"]);
  const { dark, setDark } = useGlobalContext();
  const navigate = useNavigate();
  const {logged, setLogged} = useGlobalContext();
  const {userName, setUserName} = useGlobalContext();


  function register(event) {
    event.preventDefault();
    const userData = {
      username: event.currentTarget.elements.formUserName.value,
      password: event.currentTarget.elements.formPassword.value,
    };
    try {
      axios
        .post(
          "https://gameapiauth-acakapc8cxadgtf5.swedencentral-01.azurewebsites.net/api/Authentication/register",
          {
            userName: event.currentTarget.elements.formUserName.value,
            password: event.currentTarget.elements.formPassword.value,
          }
        )
        .then(() => {
          axios
            .post(
              "https://gameapiauth-acakapc8cxadgtf5.swedencentral-01.azurewebsites.net/api/Authentication/login",
              {
                userName: userData.username,
                password: userData.password,
              }
            )
            .then((response) => {
              setCookie("jwtToken", response.data.jwtToken, { path: "/" });
              setLogged(true);
              setUserName(userData.username);
              navigate("/");
            });
        })
        .catch((error) => {
          console.log("Error logging in" + error);
        });
    } catch (error) {
      console.log("Error registering: " + error);
    }
  }

  return (
    <div
      style={{
        background: bgColor,
        height: "calc(100vh - 60px)",
      }}
    >
      <Container
        style={{
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "40px",
        }}
      >
        {dark == "dark" ? (
          <h1 style={{ color: "whitesmoke" }}>Register</h1>
        ) : (
          <h1 style={{ color: "black" }}>Register</h1>
        )}

        <br />
        <br />
        <Form onSubmit={register}>
          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>
              {dark == "dark" ? (
                <b style={{ color: "whitesmoke" }}>UserName</b>
              ) : (
                <b style={{ color: "black" }}>UserName</b>
              )}
            </Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>
              {dark == "dark" ? (
                <b style={{ color: "whitesmoke" }}>Password</b>
              ) : (
                <b style={{ color: "black" }}>Password</b>
              )}
            </Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Button
            style={{ marginTop: "40px" }}
            variant="primary"
            type="submit"
            className="extButton"
          >
            Register and Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
