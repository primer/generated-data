import { Faker } from '@faker-js/faker';
import { EnterpriseDataItems } from './data/enterprisedata.js';
import { returnOne } from './utilities/returnOne.js';

export type Enterprise = {
  login: string;
  avatar_url: string;
  description: string;
  name: string;
  id: number;
  blog: string;
  location: string;
};

export const makeEnterprise = (enterprise: EnterpriseDataItems, fakerInstance: Faker): Enterprise => ({
  ...enterprise,
  avatar_url: `https://raw.githubusercontent.com/primer/generated-data/main/assets/enterprises/${enterprise.login}.png`,
  "id": fakerInstance.number.int({ min: 100000, max: 99999999 }),
  "description": fakerInstance.company.catchPhrase(),
  "blog": returnOne(`https://${enterprise.login}.${fakerInstance.internet.domainSuffix()}`),
  "location": `${fakerInstance.location.city()}, ${fakerInstance.location.country()}`,
});
