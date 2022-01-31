import { Box, Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react";

import React from "react";

const Stats = ({ charCount, wordCount }) => {
  return (
    <Box display="flex" justifyContent={"center"}>
      <StatGroup
        border="4px"
        borderRadius={"20px"}
        borderColor={"main.600"}
        my="8px"
        bg="white"
        p="10px"
        display="flex"
        justifyContent={"space-around"}
        maxWidth={"300px"}
        minWidth={"30%"}
        color="main.900"
      >
        <Stat
          p="5px"
          bg="main.300"
          borderRadius={"lg"}
          mr="5px"
          maxWidth={"250px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <StatLabel
            width={"100px"}
            fontSize="18px"
            borderRadius="full"
            bg={"white"}
            textAlign={"center"}
          >
            Words
          </StatLabel>
          <StatNumber
            fontSize={"18px"}
            fontWeight={"normal"}
            textAlign={"center"}
          >
            {wordCount}
          </StatNumber>
        </Stat>
        <Stat
          p="5px"
          bg="main.600"
          borderRadius={"lg"}
          maxWidth={"250px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <StatLabel
            width={"100px"}
            fontSize="18px"
            borderRadius="full"
            bg={"white"}
            textAlign={"center"}
          >
            Characters
          </StatLabel>
          <StatNumber
            textAlign={"center"}
            fontSize={"18px"}
            fontWeight={"normal"}
          >
            {charCount}
          </StatNumber>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default Stats;
