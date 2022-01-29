import { Accordion } from "@chakra-ui/react";
import WordAccordionItem from "./WordAccordionItem";
import PropTypes from "prop-types";
import wordFrequency from "../appPropTypes";

export default function WordAccordion(props) {
  const { wordFrequencies, ...otherProps } = props;
  console.log("re render");
  return (
    <Accordion {...otherProps}>
      {wordFrequencies.map((wordFrequency) => (
        <WordAccordionItem
          key={wordFrequency.word}
          wordFrequency={wordFrequency}
        />
      ))}
    </Accordion>
  );
}

WordAccordion.propTypes = {
  wordFrequencies: PropTypes.arrayOf(wordFrequency).isRequired,
};
