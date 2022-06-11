import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import "../styles/globals.css";
import wrapper from "../store/configureStore";
function App({ Component }) {
  return (
    <>
      <div>
        <Component />
      </div>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(App);
