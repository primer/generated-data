import { faker } from '@faker-js/faker'
import type { UserData, Usernames } from './data/userdata.js'

export type User = {
  name: string
  login: string
  avatar_url: string
  id: number
  email: string
  hireable: boolean
}

export const generateUser = (users: UserData, username: Usernames): User => {
  // get user by username
  const user = users.find((user) => user.login === username)

  if (!user) {
    throw new Error(`User not found: ${username}`)
  }
  
  return {
    ...user,
    avatar_url: `https://raw.githubusercontent.com/primer/generated-data/main/assets/users/${user.login}.png`,
    "id": faker.number.int({ min: 100000, max: 99999999 }),
    email: faker.internet.email({ firstName: user.name.split(' ')[0], lastName: user.name.split(' ').slice(1).join(' '), allowSpecialCharacters: true }),
    "hireable": faker.datatype.boolean(),
  }
}
