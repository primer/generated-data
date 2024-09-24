import { generateUser } from './generateUser'
import { userdata } from './data/userdata'

describe('generateUser', () => {
  it('generates a random users', () => {
    expect(Object.keys(generateUser(userdata))).toStrictEqual([
      "name",
      "login",
      "avatar_url",
      "id",
      "email",
      "hireable",
    ])
  })

  it('generates a specific users', () => {
    const selected = userdata[0]
    const user = generateUser(userdata, selected.login)
    expect(Object.keys(user)).toStrictEqual([
      "name",
      "login",
      "avatar_url",
      "id",
      "email",
      "hireable",
    ])
    expect(user.name).toStrictEqual(selected.name)
    expect(user.avatar_url).toStrictEqual(`https://raw.githubusercontent.com/primer/generated-data/main/assets/users/${selected.login}.png`)
  })

  it('generates a random user if provided user does not exist', () => {
    const user = generateUser(userdata, 'Homer Simpson')
    expect(Object.keys(user)).toStrictEqual([
      "name",
      "login",
      "avatar_url",
      "id",
      "email",
      "hireable",
    ])
    expect(user.name).not.toEqual("Homer Simpson")
  })
})