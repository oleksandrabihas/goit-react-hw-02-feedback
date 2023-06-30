import { Section } from "./Section.styled";
import PropTypes from 'prop-types';

const SectionTitle = ({ children }) => {
    return <Section>{children}</Section>;
}

SectionTitle.propTypes = {
  children: PropTypes.array.isRequired
};

export default SectionTitle;