/**
 * team module.
 *
 * @module src/team
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Type definitions
// ------------------------------------------------------------------------------

/**
 * Represents a team.
 *
 * @typedef {object} Team
 * @property {string} name - The team's name.
 * @property {string} nickname - The team's nickname.
 * @property {number} points - The points.
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Sorts the team objects of an array in place and returns the array. The team
 * objects is sorted by descending points.
 *
 * @param {Team[]} teams - An unordered array of references to team objects.
 * @returns {Team[]} An ordered array of references to team objects.
 */
export function sortByPoints (teams) {
  // Validate that intput is an array.
  if (!Array.isArray(teams)) {
    throw new TypeError('The passed argument is not an array.')
  }

  // Makes a copy of incoming array.
  const orderedTeams = Array.from(teams)
  // Sorts array descending, comparing the values of the points properties.
  orderedTeams.sort((a, b) => b.points - a.points)

  return orderedTeams
}
