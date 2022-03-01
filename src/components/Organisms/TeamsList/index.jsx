/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useEffect, useState } from "react"
import Button from "../../Atoms/Button"
import {
  TeamsContainer,
  ButtonsBar,
  ListTitle,
  ListItem,
  List,
  TeamListContainer,
  TeamListIndicator,
} from "./styles.css"

const TEAMS = [
  {
    name: "Red",
    players: ["Robin", "Rey", "Roger", "Richard"],
    games: [
      {
        score: 10,
        city: "LA",
      },
      {
        score: 1,
        city: "NJ",
      },
      {
        score: 3,
        city: "NY",
      },
    ],
  },
  {
    name: "Blue",
    players: ["Bob", "Ben"],
    games: [
      {
        score: 6,
        city: "CA",
      },
      {
        score: 3,
        city: "LA",
      },
    ],
  },
  {
    name: "Yellow",
    players: ["Yesmin", "Yuliana", "Yosemite"],
    games: [
      {
        score: 2,
        city: "NY",
      },
      {
        score: 4,
        city: "LA",
      },
      {
        score: 7,
        city: "AK",
      },
    ],
  },
]

export function TeamsList() {
  const [teams, setTeams] = useState(TEAMS)

  // Order teams by score (highest to lowest)
  const orderTeamByScoreHighestToLowest = () =>
    setTeams((currentTeams) =>
      [...currentTeams].sort((t1, t2) =>
        t1.totalScore > t2.totalScore ? -1 : 1
      )
    )

  // Order teams by score (lowest to highest)
  const orderTeamByScoreLowestToHighest = () =>
    setTeams((currentTeams) =>
      [...currentTeams].sort((t1, t2) =>
        t1.totalScore > t2.totalScore ? 1 : -1
      )
    )

  // Filtering teams that with at least 3 players
  const teamsWithMoreThanThreePlayers = () =>
    setTeams((currentTeams) =>
      currentTeams.filter((t) => t.players.length >= 3)
    )

  useEffect(() => {
    const [firstTeam] = teams
    if (teams?.length && !firstTeam?.totalScore)
      setTeams((currentTeams) =>
        currentTeams.map((t) => {
          const score = t.games.reduce((sum, curr) => {
            sum += curr.score
            return sum
          }, 0)
          return {
            ...t,
            totalScore: score,
          }
        })
      )
  }, [teams])

  return (
    <TeamsContainer>
      <ButtonsBar>
        <Button onClick={() => setTeams(TEAMS)}>Initial list</Button>
        <Button onClick={orderTeamByScoreHighestToLowest}>
          Highest to Lowest
        </Button>
        <Button onClick={orderTeamByScoreLowestToHighest}>
          Lowest to Highest
        </Button>
        <Button onClick={teamsWithMoreThanThreePlayers}>
          Teams with at least 3 players
        </Button>
      </ButtonsBar>
      <ListTitle>
        {["Team name", "Players quantity", "Total score"].map((t) => (
          <ListItem key={`team-list-item-${t}`}>
            <div>{t}</div>
          </ListItem>
        ))}
      </ListTitle>
      <List>
        {teams.map((t) => (
          <ListItem key={`team-list-item-${t.name}`}>
            <TeamListContainer>
              <TeamListIndicator>
                <div>{t.name}</div>
              </TeamListIndicator>
              <TeamListIndicator>
                <div>{t.players.length}</div>
              </TeamListIndicator>
              <TeamListIndicator>
                <div>{t.totalScore}</div>
              </TeamListIndicator>
            </TeamListContainer>
          </ListItem>
        ))}
      </List>
    </TeamsContainer>
  )
}
