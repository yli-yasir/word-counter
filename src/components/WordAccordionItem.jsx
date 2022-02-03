import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  UnorderedList,
  ListItem,
  ScaleFade,
  Heading,
} from "@chakra-ui/react";
import { useAsyncFn } from "react-use";
import { getSynonyms } from "../wordAPI";
import LoadingPresenter from "./LoadingPresenter";
import wordFrequency from "../appPropTypes";

export default function WordAccordionItem(props) {
  const { wordFrequency, ...rootProps } = props;
  const [{ loading, error, value: synonyms }, fetchWord] =
    useAsyncFn(async () => {
      return getSynonyms(wordFrequency.word);
    }, [wordFrequency]);

  return (
    <AccordionItem {...rootProps}>
      <h2>
        <AccordionButton
          _focus={{ borderColor: "app.font" }}
          _expanded={{ borderColor: "app.font" }}
          onClick={() => fetchWord(wordFrequency.word)}
        >
          <Box flex="1" textAlign="left" textTransform="capitalize">
            {`${wordFrequency.word} (${wordFrequency.count})`}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <LoadingPresenter loading={loading} error={error} result={synonyms}>
          {renderSynonyms}
        </LoadingPresenter>
      </AccordionPanel>
    </AccordionItem>
  );
}

WordAccordionItem.propTypes = {
  wordFrequency,
};

function renderSynonyms(synonyms) {
  return synonyms.length > 0 ? (
    <>
      <Heading as="h3" size>
        Related words:
      </Heading>
      <UnorderedList textTransform="capitalize">
        {synonyms.map((synonym) => (
          <ScaleFade key={synonym} initialScale={0.1} in={true}>
            <ListItem>{synonym}</ListItem>
          </ScaleFade>
        ))}
      </UnorderedList>
    </>
  ) : (
    "No related words found"
  );
}
