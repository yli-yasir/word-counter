import InputField from "./components/Input";
import { Flex, Box } from "@chakra-ui/react";
import Stats from "./components/Stats";
import WordAccordion from "./components/WordAccordion";
import { useState } from "react";
import useTextData from "./hooks/useTextData";
import { debouncedSetInputText } from "./utils";

function App() {
  const [inputText, setInputText] = useState("");
  const { wordFrequencies, wordCount, charCount } = useTextData(inputText);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Flex
        mt="20px"
        w={{ md: "80%", base: "95%" }}
        direction={"column"}
        rowGap={"10px"}
        justify="center"
      >
        <InputField
          onChange={(e) => debouncedSetInputText(setInputText, e.target.value)}
        />
        <Stats wordCount={wordCount} charCount={charCount} />
        <WordAccordion wordFrequencies={wordFrequencies} />
      </Flex>
    </Box>
  );
}

export default App;
