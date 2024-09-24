import {generateUser} from "../src/generateUser.js";
import {userdata} from "../src/data/index.js";
import { writeFileSync, mkdirSync } from 'fs'

const users = userdata.map(user => generateUser(userdata, user.login))


// create data folder
mkdirSync("dist/data", { recursive: true })

// write files

writeFileSync("dist/data/users.json", `${JSON.stringify(users, null, 2)}`)