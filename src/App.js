import InputField from "./components/Input";
import { Flex, Box, Heading } from "@chakra-ui/react";
import Stats from "./components/Stats";
import WordAccordion from "./components/WordAccordion";
import { useState } from "react";
import useTextData from "./hooks/useTextData";
import WordChart from "./components/WordChart";
import { debounce } from "lodash";

const debouncedSetInputText = debounce((func, text) => {
  func(text);
}, 1000);

function App() {
  const [inputText, setInputText] = useState("");
  const { wordFrequencies, wordCount, charCount } = useTextData(inputText);

  return (
    <Box display={"flex"} alignItems="center" flexDirection="column">
      <Heading width="100%" bg="app.secondary" textAlign="center">
        Word Counter
      </Heading>
      <Flex
        mt={4}
        w={{ lg: "60%", md: "80%", base: "95%" }}
        direction="column"
        rowGap={"10px"}
        alignItems="center"
      >
        <InputField
          onChange={(e) => debouncedSetInputText(setInputText, e.target.value)}
        />
        <Stats wordCount={wordCount} charCount={charCount} />
        {wordFrequencies && (
          <Flex
            my={8}
            w="100%"
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "start" }}
            justifyContent="space-between"
          >
            <Box mr={4}>
              <WordChart wordFrequencies={wordFrequencies.slice(0, 11)} />
            </Box>
            <WordAccordion mt={4} w="100%" wordFrequencies={wordFrequencies} />
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

export default App;
