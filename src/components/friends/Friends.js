import PropTypes from "prop-types";
export default function Friends({ name, friends }) {
    return (
        <ul className="friend-list">
            {friends.map((elem) => {
    return <li className="item" key={elem.id}>
  <span className="status"></span>
  <img className="avatar" src={elem.avatar} alt="User avatar" width="48" />
    <p className="name">{elem.name }</p>
</li>})}
  
</ul>
    )
}
Friends.propTypes = {
     elem:PropTypes.exact({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
})
};