import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatch: [],
    recentMatchesS: [],
    team: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData
    this.setState({
      teamBanner: teamBannerUrl,
      latestMatch: latestMatchDetails,
      recentMatchesS: recentMatches,
      team: id,
      isLoading: false,
    })
  }

  getTeamMatchPage = () => {
    const {teamBanner, latestMatch, recentMatchesS} = this.state
    const updatedCardDetails = recentMatchesS.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
    }))
    return (
      <>
        <img className="banner-img" src={teamBanner} alt="team banner" />
        <p className="latet-title">Latest Matches</p>
        <LatestMatch matchDetails={latestMatch} />
        <ul className="cards-list">
          {updatedCardDetails.map(each => (
            <MatchCard key={each.id} matchCardDetails={each} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading, team} = this.state

    return (
      <div className={`team-matches-container ${team}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getTeamMatchPage()
        )}
      </div>
    )
  }
}

export default TeamMatches
