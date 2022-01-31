import React from "react";
import { Textarea, Box } from "@chakra-ui/react";

const InputField = (props) => {
  return (
    <Box
      bg="main.600"
      border={"8px"}
      borderRadius={"20px"}
      borderColor="main.600"
      boxShadow="base"
    >
      <Textarea
        {...props}
        bg={"white"}
        h="220px"
        placeholder="Add your text here"
        borderRadius={"20px"}
      />
    </Box>
  );
};

export default InputField;
