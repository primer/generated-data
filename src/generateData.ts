import { faker, fakerFR, fakerDE, fakerJA, fakerIT, fakerSV, Faker } from '@faker-js/faker'
import type { UserData, UserDataItems, Usernames } from './data/userdata.js'
import { OrgData, OrgDataItems, OrgName } from './data/orgdata.js'
import { makeUser, User } from './makeUser.js'
import { makeOrg, Org } from './makeOrg.js'
import { EnterpriseData, EnterpriseDataItems, EnterpriseName } from './data/enterprisedata.js'
import { Enterprise, makeEnterprise } from './makeEnterprise.js'

const fakers = [faker,fakerFR, fakerDE, fakerJA, fakerIT, fakerSV]

type GenerateUser = (type: "user", data: UserData, login: Usernames) => User
type GenerateOrg = (type: "org", data: OrgData, login: OrgName) => Org
type GenerateEnterprise = (type: "enterprise", data: EnterpriseData, login: EnterpriseName) => Enterprise

type GenerateItem = GenerateUser | GenerateOrg | GenerateEnterprise


const generateItem = <GenerateItem>(type, data, login) => {
  const fakerInstance = fakers[Math.floor(Math.random() * fakers.length)]
  // get item by login
  const item = data.find((item) => item.login === login)

  if (!item) {
    throw new Error(`Item not found: ${login}`)
  }

  if(!type) {
    throw new Error(`Invalid type: ${type}, must be "user", "org", or "enterprise"`)
  }

  switch (type) {
    case "user":
      return makeUser(item as UserDataItems, fakerInstance)
    case "org":
      return makeOrg(item as OrgDataItems, fakerInstance)
    case "enterprise":
      return makeEnterprise(item as EnterpriseDataItems, fakerInstance)
  }
  
}

export const generateUser = (data: UserData, login: Usernames) => generateItem("user", data, login)
export const generateOrg = (data: OrgData, login: OrgName) => generateItem("org", data, login)
export const generateEnterprise = (data: EnterpriseData, login: EnterpriseName) => generateItem("enterprise", data, login)