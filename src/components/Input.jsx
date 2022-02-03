import React from "react";
import { Textarea } from "@chakra-ui/react";

const InputField = (props) => {
  return (
    <Textarea
      {...props}
      bg="white"
      h="350px"
      placeholder="Add your text here"
      border="none"
      _focus={{
        border: "none",
      }}
      boxShadow="lg"
      borderRadius="1rem"
    />
  );
};

export default InputField;
