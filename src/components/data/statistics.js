import PropTypes from "prop-types";
import {Section,Title,List,Item} from "./StylesStatistic"
export default function Statistics({ label, statistics }) {
    return(
    <Section>
  <Title>Upload stats</Title>

            <List>
                {statistics.map((elem) => {
                    return <Item key={elem.id}>
    <span className="label">{elem.label} </span>
              
    <span className="percentage">{elem.percentage}</span>
    </Item>}) }
   
  </List>
    </Section>)
}
Statistics.propTypes = {
  elem: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }) 
};

