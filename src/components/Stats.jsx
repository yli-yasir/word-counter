import { Box, Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react";

import React from "react";

const Stats = ({ charCount, wordCount }) => {
  return (
    <Box display="flex" justifyContent={"center"}>
      <StatGroup
        borderRadius="1rem"
        bg="white"
        p={2}
        display="flex"
        justifyContent="space-around"
        width="300px"
        color="app.font"
        boxShadow="lg"
      >
        <Stat textAlign="center">
          <StatLabel>Words</StatLabel>
          <StatNumber>{wordCount}</StatNumber>
        </Stat>
        <Stat textAlign="center">
          <StatLabel>Characters</StatLabel>
          <StatNumber>{charCount}</StatNumber>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default Stats;
