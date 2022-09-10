export default function Friends({name,friends }) {
    return (
        <ul className="friend-list">
            {friends.map((elem) => {
    return <li className="item">
  <span className="status"></span>
  <img className="avatar" src={elem.avatar} alt="User avatar" width="48" />
    <p className="name">{elem.name }</p>
</li>})}
  
</ul>
    )
}