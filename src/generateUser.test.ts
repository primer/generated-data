import { generateUser } from './generateData'
import { userdata } from './data/userdata'

describe('generateUser', () => {
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
     "twitter_username",
     "blog",
     "location",
     "bio",
     "public_repos",
     "public_gists",
     "followers",
     "following",
    ])
    expect(user.name).toStrictEqual(selected.name)
    expect(user.avatar_url).toStrictEqual(`https://raw.githubusercontent.com/primer/generated-data/main/assets/users/${selected.login}.png`)
  })

  it('thows an error if the user does not exist', () => {
    // @ts-ignore
    expect(() => generateUser(userdata, 'Homer Simpson')).toThrowError()
  })
})