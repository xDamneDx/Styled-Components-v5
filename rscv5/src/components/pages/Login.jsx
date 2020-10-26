import React, { useState, useEffect } from "react";
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from "components/common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eeeeee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

export default function Login() {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              onChange={handleInputChange}
              value={formFields.username}
              type="text"
              name="username"
              placeholder="Username"
            />
            <PasswordInput
              onChange={handleInputChange}
              value={formFields.password}
              name="password"
            />
          </>
        )}
        <Button type="submit" disabled={loading} large>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button type="button" secondary>
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
