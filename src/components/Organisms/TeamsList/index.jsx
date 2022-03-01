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

import { useState } from "react";
import Button from "../../Atoms/Button";

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
];

export function TeamsList() {
	const [teams, setTeams] = useState(TEAMS);

	// Order teams by score (highest to lowest)
	const orderTeamByScoreHighestToLowest=()=>setTeams(currentTeams=>[...teams].sort((t1, t2) =>
	t1.totalScore > t2.totalScore ? -1 : 1
  ))

	// Order teams by score (lowest to highest)
	const orderTeamByScoreLowestToHighest=()=>setTeams(currentTeams=>[...currentTeams].sort((t1, t2) =>
	t1.totalScore > t2.totalScore ? 1 : -1
  ))

	// Filtering teams that with at least 3 players
	const teamsWithMoreThanThreePlayers=()=>setTeams(currentTeams=>currentTeams.filter((t) => t.players.length >= 3))

	return (
		<div>
			<Button onClick={() => setTeams(TEAMS)}>Initial list</Button>
			<Button onClick={orderTeamByScoreHighestToLowest}>Highest to Lowest</Button>
			<Button onClick={orderTeamByScoreLowestToHighest}>Lowest to Highest</Button>
			<Button onClick={teamsWithMoreThanThreePlayers}>Teams with at least 3 players</Button>

			<ul className="teams"> {teams.map((t) => (
          <div className="team-container" key={`team-item-${t.name}`}>
            <div className="team-row">
              <div>Team name</div>
              <div>{t.name}</div>
            </div>
            <div className="team-row">
              <div>Players quantity</div>
              <div>{t.players.length}</div>
            </div>
            <div className="team-row">
              <div>Total score</div>
              <div>{t.totalScore}</div>
            </div>
          </div>
        ))}</ul>
		</div>
	);
}
