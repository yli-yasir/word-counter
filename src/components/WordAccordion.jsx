import { Accordion } from "@chakra-ui/react";
import WordAccordionItem from "./WordAccordionItem";

export default function WordAccordion(props) {
  const { words, ...otherProps } = props;
  return (
    <Accordion {...otherProps}>
      {words.map((word) => (
        <WordAccordionItem key={word} word={word} />
      ))}
    </Accordion>
  );
}
