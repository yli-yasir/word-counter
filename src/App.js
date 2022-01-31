import InputField from "./components/Input";
import { Flex, Box } from "@chakra-ui/react";
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
    <Box display={"flex"} justifyContent={"center"}>
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
          <>
            <Box maxH="300px">
              <WordChart wordFrequencies={wordFrequencies} />
            </Box>
            <WordAccordion
              width={{ base: "100%", lg: "50%" }}
              wordFrequencies={wordFrequencies}
            />
          </>
        )}
      </Flex>
    </Box>
  );
}

export default App;
