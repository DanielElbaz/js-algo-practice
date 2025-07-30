/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
 {
 name: "Manchester United",
 wins: 30,
 loss: 3,
 draws: 5,
 scored: 88,
 conceded: 20,
 },
 {
 name: "Arsenal",
 wins: 24,
 loss: 6,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
 {
 name: "Chelsea",
 wins: 22,
 loss: 8,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
])
➞ "Manchester United"
*/

function champions(arr) {
  const arr1 = []

  for (const element of arr) {
    let total = 3 * element.wins  + element.draws
    let difference = element.scored - element.conceded
    arr1.push([element.name, total, difference]) // arr1=[[chelsea,95,36],[manU,98,29]]
  }

  arr1.sort((a, b) => b[1] - a[1])

  const arr2 = arr1.filter((element) => element[1] === arr1[0][1])

  if (arr2.length === 1) return arr1[0][0]

  arr2.sort((a, b) => b[2] - a[2])
  return arr2[0][0]
}

exports.solution = champions;