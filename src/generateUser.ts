import { faker, fakerFR, fakerDE, fakerJA, fakerIT, fakerSV } from '@faker-js/faker'
import type { UserData, Usernames } from './data/userdata.js'
import { returnOne } from './utilities/returnOne.js'

const fakers = [faker,fakerFR, fakerDE, fakerJA, fakerIT, fakerSV]

export type User = {
  name: string
  login: string
  avatar_url: string
  id: number
  email: string
  hireable: boolean,
  twitter_username: string
  blog: string
  location: string
  bio: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
}

export const generateUser = (users: UserData, username: Usernames): User => {
  const fakerInstance = fakers[Math.floor(Math.random() * fakers.length)]
  // get user by username
  const user = users.find((user) => user.login === username)

  if (!user) {
    throw new Error(`User not found: ${username}`)
  }
  
  return {
    ...user,
    avatar_url: `https://raw.githubusercontent.com/primer/generated-data/main/assets/users/${user.login}.png`,
    "id": fakerInstance.number.int({ min: 100000, max: 99999999 }),
    email: fakerInstance.internet.email({ firstName: user.name.split(' ')[0], lastName: user.name.split(' ').slice(1).join(' '), allowSpecialCharacters: false }),
    "hireable": fakerInstance.datatype.boolean(),
    "twitter_username": returnOne(fakerInstance.internet.userName({firstName: user.name.split(' ')[0]})),
    "blog": returnOne(`https://${fakerInstance.internet.domainName()}`),
    "location": `${fakerInstance.location.city()}, ${fakerInstance.location.country()}`,
    "bio": fakerInstance.person.bio(),
    "public_repos": fakerInstance.number.int(500),
    "public_gists": fakerInstance.number.int(200),
    "followers": fakerInstance.number.int(8000),
    "following": fakerInstance.number.int(33000),
  }
}
