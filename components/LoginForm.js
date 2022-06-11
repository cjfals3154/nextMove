import { Input, Form, Button } from "antd";
import React, { useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hook/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducer/user";

const FormWrapper = styled(Form)`
  background-color: none;
  margin: 0 auto;
  width: 500px;
  color: white;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BackImg = styled.section`
  height: 100vh;
  filter: brightness(50%);
  position: relative;
`;

function LoginForm() {
  const { logInLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(email, password);

    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <>
      <BackImg>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/5c529c55-27bb-4e63-86eb-28734c60d7a6/KR-ko-20220606-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </BackImg>
      <FormWrapper onFinish={onSubmitForm}>
        <label htmlFor="user-email" style={{ fontSize: 20 }}>
          아이디
        </label>
        <br />
        <Input
          required
          name="user-email"
          value={email}
          type="email"
          onChange={onChangeEmail}
        />
        <div>
          <br />
        </div>
        <label htmlFor="user-password" style={{ fontSize: 20 }}>
          비밀번호
        </label>
        <br />
        <Input
          required
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />

        <Button
          style={{ width: 500, marginTop: 30 }}
          type="primary"
          htmlType="submit"
          loading={logInLoading}
        >
          로그인
        </Button>
      </FormWrapper>
    </>
  );
}

export default LoginForm;
