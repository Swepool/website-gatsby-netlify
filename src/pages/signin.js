import React from 'react';
import styled from "@emotion/styled";
import {Link} from "gatsby";

const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #FFFFFF;
`;

const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #2a2a2a;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  border: 2px solid #2a2a2a;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #2a2a2a;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #2a2a2a;
`;
const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: 2px solid #2a2a2a;
  border-radius: 4px;
`;

const FormButton = styled.button`
  background: #2a2a2a;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: 300ms ease-in-out;
    background: rgba(42, 42, 42, 0.5);
  }
`;
const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #2a2a2a;
  font-size: 14px;
`;


const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>NBX</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                            <Text>Register</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;