import { Faker } from '@faker-js/faker';
import { OrgDataItems } from './data/orgdata.js';
import { returnOne } from './utilities/returnOne.js';

export type Org = {
  login: string;
  avatar_url: string;
  description: string;
  name: string;
  id: number;
  blog: string;
  location: string;
  email?: string;
  twitter_username?: string;
  is_verified: boolean;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
};

export const makeOrg = (org: OrgDataItems, fakerInstance: Faker): Org => ({
  ...org,
  avatar_url: `https://raw.githubusercontent.com/primer/generated-data/main/assets/orgs/${org.login}.png`,
  "id": fakerInstance.number.int({ min: 100000, max: 99999999 }),
  email: returnOne(fakerInstance.internet.email({ firstName: org.name })),
  "description": fakerInstance.company.catchPhrase(),
  "is_verified": fakerInstance.datatype.boolean(),
  "twitter_username": returnOne(org.login),
  "blog": returnOne(`https://${org.login}.${fakerInstance.internet.domainSuffix()}`),
  "location": `${fakerInstance.location.city()}, ${fakerInstance.location.country()}`,
  "public_repos": fakerInstance.number.int(1000),
  "public_gists": fakerInstance.number.int(600),
  "followers": fakerInstance.number.int(50000),
  "following": fakerInstance.number.int(3000),
});
