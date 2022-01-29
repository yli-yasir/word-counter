import { Spinner } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function LoadingPresenter({ loading, error, result, children }) {
  return (
    <>
      {loading && <Spinner />}
      {!loading && error && "Something went wrong!"}
      {!loading && !error && result && children(result)}
    </>
  );
}

LoadingPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  result: PropTypes.object,
  children: PropTypes.func,
};
