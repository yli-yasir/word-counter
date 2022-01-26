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
import { aggregateWordSynoyms, getWordData } from "../utils";
import LoadingPresenter from "./LoadingPresenter";

export default function WordAccordionItem(props) {
  const { word, ...rootProps } = props;
  const [{ loading, error, value: synonyms }, fetchWord] =
    useAsyncFn(async () => {
      const fetchResult = await getWordData(word);
      console.log(fetchResult);
      return aggregateWordSynoyms(fetchResult.data[0]);
    }, [word]);

  return (
    <AccordionItem {...rootProps}>
      <h2>
        <AccordionButton onClick={() => fetchWord(word)}>
          <Box flex="1" textAlign="left" textTransform="capitalize">
            {word}
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

function renderSynonyms(synonyms) {
  return synonyms.length > 0 ? (
    <>
      <Heading as="h3" size>
        Related words:
      </Heading>
      <UnorderedList textTransform="capitalize">
        {synonyms.map((synonym) => (
          <ScaleFade initialScale={0.1} in={true}>
            <ListItem>{synonym}</ListItem>
          </ScaleFade>
        ))}
      </UnorderedList>
    </>
  ) : (
    "No related words found"
  );
}
