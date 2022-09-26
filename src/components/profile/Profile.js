import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Name,
  Tag,
  Location,
  Photo,
  Stats,
  Label,
  Span,
} from './Profile.Styled';
export default function Profile({ avatar, name, tag, location, stats }) {
  return (
    <Card>
      <Description>
        <Photo src={avatar} alt="User avatar" width="150" className="avatar" />
        <Name>{name}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Label>
          <span className="label">Followers </span>
          <Span>{stats.followers}</Span>
        </Label>
        <Label>
          <span className="label">Views </span>
          <Span>{stats.views}</Span>
        </Label>
        <Label>
          <span className="label">Likes </span>
          <Span>{stats.likes}</Span>
        </Label>
      </Stats>
    </Card>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
