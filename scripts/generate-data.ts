import {generateEnterprise, generateOrg, generateUser} from "../src/generateData.js";
import {enterprisedata, orgdata, userdata} from "../src/data/index.js";
import { writeFileSync, mkdirSync } from 'fs'

const users = userdata.map(user => generateUser(userdata, user.login))
const orgs = orgdata.map(org => generateOrg(orgdata, org.login))
const enterprises = enterprisedata.map(enterprise => generateEnterprise(enterprisedata, enterprise.login))


// create data folder
mkdirSync("dist/data", { recursive: true })

// write files

writeFileSync("dist/data/users.json", `${JSON.stringify(users, null, 2)}`)
writeFileSync("dist/data/orgs.json", `${JSON.stringify(orgs, null, 2)}`)
writeFileSync("dist/data/enterprises.json", `${JSON.stringify(enterprises, null, 2)}`)