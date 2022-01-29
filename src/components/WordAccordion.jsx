import { Accordion } from "@chakra-ui/react";
import WordAccordionItem from "./WordAccordionItem";
import PropTypes from "prop-types";

export default function WordAccordion(props) {
  const { wordFrequencies, ...otherProps } = props;
  console.log("re render");
  return (
    <Accordion {...otherProps}>
      {wordFrequencies &&
        wordFrequencies.map((wordFrequency) => (
          <WordAccordionItem
            key={wordFrequency.word}
            wordFrequency={wordFrequency}
          />
        ))}
    </Accordion>
  );
}

WordAccordion.propTypes = {
  wordFrequencies: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
};
