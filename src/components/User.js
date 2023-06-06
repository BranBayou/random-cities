import PropTypes from 'prop-types';

export default function User({ user }) {
  return (
    <div className="user-details" key={user.key}>
      <img className="user-img" src={user.avatar} alt="user-Avatar" />
      <div className="rocket-info">
        <h3>{user.user_name}</h3>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    user_name: PropTypes.string.isRequired,
  }).isRequired,
};
