'use server'

const votes = {
  barbie: 3,
  oppenheimer: 5,
}

export const getVotes = async () => votes

export const vote = async (language: keyof typeof votes) => {
  votes[language] += 1

  return votes
}
