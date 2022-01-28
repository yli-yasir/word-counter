import { Accordion } from "@chakra-ui/react";
import WordAccordionItem from "./WordAccordionItem";

export default function WordAccordion(props) {
  const { annotatedWords, ...otherProps } = props;
  return (
    <Accordion {...otherProps}>
      {annotatedWords &&
        annotatedWords.map((annotatedWord) => (
          <WordAccordionItem
            key={annotatedWord.word}
            annotatedWord={annotatedWord}
          />
        ))}
    </Accordion>
  );
}
