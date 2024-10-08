import PropTypes from "prop-types";

const Error = ({ children }) => {
  return <div className="text-white text-left bg-red-500">{children}</div>;
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Error;
