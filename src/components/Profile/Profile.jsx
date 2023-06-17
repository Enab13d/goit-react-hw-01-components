import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Stats,
  Avatar,
  Label,
  Item,
  Counter,
  Info,
  Title,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Title>{username}</Title>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>
      <Stats>
        <Item>
          <Label>Followers</Label>
          <Counter>{followers}</Counter>
        </Item>
        <Item>
          <Label>Views</Label>
          <Counter>{views}</Counter>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Counter>{likes}</Counter>
        </Item>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
