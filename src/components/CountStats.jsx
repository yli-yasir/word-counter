import { Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react";

import React from "react";

const CountStats = ({ charCount, wordCount }) => {
  return (
    <StatGroup
      borderRadius="lg"
      border={"2px"}
      my="8px"
      borderColor="blue.400"
      p="10px"
    >
      <Stat
        p="5px"
        bg="blue.400"
        borderRadius={"lg"}
        borderColor="gray.100"
        mr="5px"
      >
        <StatLabel fontSize="2xl">Words</StatLabel>
        <StatNumber fontSize={"18px"} fontWeight={"normal"} color="white">
          {wordCount}
        </StatNumber>
      </Stat>
      <Stat p="5px" bg="blue.400" borderRadius={"lg"}>
        <StatLabel fontSize="2xl">Characters</StatLabel>
        <StatNumber fontSize={"18px"} fontWeight={"normal"} color="white">
          {charCount}
        </StatNumber>
      </Stat>
    </StatGroup>
  );
};

export default CountStats;
