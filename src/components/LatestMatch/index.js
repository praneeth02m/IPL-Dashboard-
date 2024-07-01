import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const camelData = {
    competingTeam: matchDetails.competing_team,
    date: matchDetails.date,
    venue: matchDetails.venue,
    result: matchDetails.result,
    competingTeamLogo: matchDetails.competing_team_logo,
    firstInnings: matchDetails.first_innings,
    secondInnings: matchDetails.second_innings,
    manOfTheMatch: matchDetails.man_of_the_match,
    umpires: matchDetails.umpires,
  }

  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = camelData

  return (
    <div className="latest-match-container">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="comp-img"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="second-part">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
