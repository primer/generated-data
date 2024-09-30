import { faker, fakerFR, fakerDE, fakerJA, fakerIT, fakerSV, Faker } from '@faker-js/faker'
import type { UserData, UserDataItems, Usernames } from './data/userdata.js'
import { OrgData, OrgDataItems, OrgNames } from './data/orgdata.js'
import { makeUser, User } from './makeUser.js'
import { makeOrg, Org } from './makeOrg.js'
import { EnterpriseData, EnterpriseDataItems, EnterpriseNames } from './data/enterprisedata.js'
import { Enterprise, makeEnterprise } from './makeEnterprise.js'

const fakers = [faker,fakerFR, fakerDE, fakerJA, fakerIT, fakerSV]

function generateItem(type: 'user', data: UserData, login: Usernames): User
function generateItem(type: 'org', data: OrgData, login: OrgNames): Org
function generateItem(type: 'enterprise', data: EnterpriseData, login: EnterpriseNames): Enterprise
function generateItem(type: 'user' | 'org' | 'enterprise', data: UserData | OrgData | EnterpriseData, login: Usernames | OrgNames | EnterpriseNames): User | Org | Enterprise {
  const fakerInstance = fakers[Math.floor(Math.random() * fakers.length)]
  // get item by login
  const item = data.find((item) => item.login === login)

  if (!item) {
    throw new Error(`Item not found: ${login}`)
  }

  switch (type) {
    case "user":
      return makeUser(item as UserDataItems, fakerInstance)
    case "org":
      return makeOrg(item as OrgDataItems, fakerInstance)
    case "enterprise":
      return makeEnterprise(item as EnterpriseDataItems, fakerInstance)
    default:
      throw new Error(`Unknown type: ${type}, must be "user", "org", or "enterprise"`)
  }
  
}

export const generateUser = (data: UserData, login: Usernames) => generateItem("user", data, login)
export const generateOrg = (data: OrgData, login: OrgNames) => generateItem("org", data, login)
export const generateEnterprise = (data: EnterpriseData, login: EnterpriseNames) => generateItem("enterprise", data, login)