import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";
import wrapper from "../store/configureStore";
function Home() {
  const { me } = useSelector((state) => state.user);
  return (
    <>
      <div>{me ? <Layout /> : <LoginForm />}</div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((context) => {});

export default Home;
