import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamList} = props
  const {id, teamImageUrl, name} = teamList
  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="list-container">
        <img className="team-img" src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
