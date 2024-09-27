export type EnterpriseData = typeof enterprisedata;
export type EnterpriseDataItems = (typeof enterprisedata)[number];
export type EnterpriseName = EnterpriseDataItems["login"];

export const enterprisedata = [
  { name: "ByteStream Technologies Inc", login: "bytestreaminc" },
  { name: "CapitalFusion Solutions", login: "capitalfusion" },
  { name: "EcoVolt Energy", login: "ecovolt" },
  { name: "Energex", login: "energex" },
  { name: "FinPulse Systems", login: "finpulse" },
  { name: "FinQuest Innovations", login: "finquest" },
  { name: "FinSync Enterprises", login: "finsync" },
  { name: "GreenSpark Energy", login: "greensparkenergy" },
  { name: "InfiniCorp Networks", login: "infinicorpnetworks" },
  { name: "InnovateIQ", login: "innovateiq" },
  { name: "Innovatek Inc", login: "innovatek-inc" },
  { name: "Invest Nation", login: "investnation" },
  { name: "PowerPulse Technologies", login: "powerpulsetech" },
  { name: "PureGoods Inc.", login: "puregoodsinc" },
  { name: "QuantumTech Labs", login: "quantumtechlabs" },
  { name: "SolarSurge, Inc", login: "solarsurgeinc" },
  { name: "TechNova Solutions", login: "technova" },
  { name: "Technotron Systems", login: "technotron" },
  { name: "TerraWatt Energy", login: "terrawatt-energy" },
  { name: "WealthBridge Solutions", login: "wealthbridge" },
] as const;
