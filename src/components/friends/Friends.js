import PropTypes from 'prop-types';
import { List, Item, Name, Status } from './Friends.Styled';
export default function Friends({ name, friends }) {
  return (
    <List>
      {friends.map(elem => {
        return (
          <Item key={elem.id}>
            <Status src="true"></Status>
            <img
              className="avatar"
              src={elem.avatar}
              alt="User avatar"
              width="48"
              height="58"
            />
            <Name>{elem.name}</Name>
          </Item>
        );
      })}
    </List>
  );
}

Friends.propTypes = {
  elem: PropTypes.exact({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
