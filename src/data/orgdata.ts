export type OrgData = typeof orgdata;
export type OrgDataItems = (typeof orgdata)[number];
export type OrgName = OrgDataItems["login"];

export const orgdata = [
  { name: "App Architects", login: "app-architects" },
  { name: "Byte Bards", login: "bytebards" },
  { name: "Cloud Chasers", login: "cloudchasers" },
  { name: "CloudCrafters", login: "cloudcrafters" },
  { name: "Code Conjurers", login: "codeconjurers" },
  { name: "Code Crafters Guild", login: "codecraftersguild" },
  { name: "Code Crafters Hub", login: "codecraftershub" },
  { name: "CodeCrafters", login: "codecrafters" },
  { name: "Customer Reliance", login: "customerreliance" },
  { name: "Data Defenders", login: "data-defenders" },
  { name: "Dev Dreamers", login: "dev-dreamers" },
  { name: "Dev Dynamos", login: "dev-dynamos" },
  { name: "Growth execution", login: "growthexecution" },
  { name: "Ideation security", login: "ideation-security" },
  { name: "Logic Loom", login: "logiclooms" },
  { name: "Pixel Pioneers", login: "pixelpioneers" },
  { name: "Script Sculptors", login: "scriptsculptors" },
  { name: "Script Smiths", login: "scriptsmiths" },
  { name: "Sustainability in practice", login: "sustain-practice" },
  { name: "Tech savers", login: "tech-savers" },
] as const;
