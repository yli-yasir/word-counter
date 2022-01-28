import { Spinner } from "@chakra-ui/react";

export default function LoadingPresenter({ loading, error, result, children }) {
  return (
    <>
      {loading && <Spinner />}
      {!loading && error && "Something went wrong!"}
      {!loading && !error && result && children(result)}
    </>
  );
}
