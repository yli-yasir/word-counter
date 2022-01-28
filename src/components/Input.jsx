import React from "react";
import { Textarea } from "@chakra-ui/react";

const InputField = (props) => {
  return (
    <Textarea
      {...props}
      bg={"white"}
      h="220px"
      placeholder="Add your text here"
    />
  );
};

export default InputField;
