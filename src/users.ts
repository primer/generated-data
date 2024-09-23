import { faker } from '@faker-js/faker'
import { UserData, userdata as users } from '../data/users.js'

export type User = {
  name: string
  login: string
  avatar_url: string
  id: number
  email: string
  hireable: boolean
}

export const generateUser = (username?: string): User => {
  let user: UserData | undefined = undefined
  // get user by username
  if (username) {
    user = users.find((user) => user.login === username)
  }
  // get random user
  if (!user) {
    user = users[Math.floor(Math.random() * users.length)]
  }

  return {
    ...user,
    "id": faker.number.int({ min: 100000, max: 99999999 }),
    email: faker.internet.exampleEmail({ firstName: user.name.split(' ')[0], lastName: user.name.split(' ').slice(1).join(' '), allowSpecialCharacters: true }),
    "hireable": faker.datatype.boolean(),
  }
}
