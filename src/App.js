import InputField from "./components/Input";
import { Text, Flex, Box } from "@chakra-ui/react";
import Counter from "./components/Counter";

function App() {
  return (
    <Box display={"flex"} justifyContent={"center"} bg={"#f5f5f5"} h={"100vh"}>
      <Flex w={{ md: "80%", sm: "95%" }} direction={"column"} rowGap={"10px"}>
        <Text fontSize={18} color={"gray"} fontWeight={"bold"}>
          Add your text here:
        </Text>
        <InputField />
        <Counter wordsCount={"330"} charactersCount={1220} />
      </Flex>
    </Box>
  );
}

export default App;
