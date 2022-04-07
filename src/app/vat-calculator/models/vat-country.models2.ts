export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: "officially-assigned" | "user-assigned";
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: "Africa" | "Americas" | "Antarctic" | "Asia" | "Europe" | "Oceania";
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag?: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: ("Africa" | "Antartica" | "Asia" | "Europe" | "North America" | "Oceania" | "South America" |"Antarctica")[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: "monday" | "sunday" | "turday";
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  tax?: CountryTax;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: "left" | "right";
}
/*
export enum Side {
  Left = "left",
  Right = "right",
}*/

export interface CoatOfArms {
  png?: string;
  svg?: string;
}
/*
export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}*/
/*
export interface Currencies {
  uyu?: Aed;
  pyg?: Aed;
  gmd?: Aed;
  djf?: Aed;
  eur?: Aed;
  usd?: Aed;
  gel?: Aed;
  bzd?: Aed;
  mur?: Aed;
  lbp?: Aed;
  sar?: Aed;
  brl?: Aed;
  ugx?: Aed;
  qar?: Aed;
  mnt?: Aed;
  clp?: Aed;
  lrd?: Aed;
  aud?: Aed;
  xcd?: Aed;
  twd?: Aed;
  ars?: Aed;
  xof?: Aed;
  dkk?: Aed;
  fok?: Aed;
  mad?: Aed;
  mru?: Aed;
  uah?: Aed;
  cny?: Aed;
  lsl?: Aed;
  zar?: Aed;
  cdf?: Aed;
  rub?: Aed;
  bdt?: Aed;
  ang?: Aed;
  gtq?: Aed;
  ils?: Aed;
  gyd?: Aed;
  kyd?: Aed;
  hrk?: Aed;
  isk?: Aed;
  nad?: Aed;
  gip?: Aed;
  omr?: Aed;
  kwd?: Aed;
  gbp?: Aed;
  hnl?: Aed;
  shp?: Aed;
  khr?: Aed;
  mkd?: Aed;
  irr?: Aed;
  pab?: Aed;
  ckd?: Aed;
  nzd?: Aed;
  bif?: Aed;
  ttd?: Aed;
  kmf?: Aed;
  ngn?: Aed;
  pln?: Aed;
  xpf?: Aed;
  etb?: Aed;
  azn?: Aed;
  npr?: Aed;
  bbd?: Aed;
  jep?: Aed;
  inr?: Aed;
  kgs?: Aed;
  ssp?: Aed;
  iqd?: Aed;
  cuc?: Aed;
  cup?: Aed;
  btn?: Aed;
  bsd?: Aed;
  nok?: Aed;
  kes?: Aed;
  sek?: Aed;
  xaf?: Aed;
  mop?: Aed;
  ggp?: Aed;
  rwf?: Aed;
  syp?: Aed;
  cad?: Aed;
  dzd?: Aed;
  imp?: Aed;
  bwp?: Aed;
  kzt?: Aed;
  ves?: Aed;
  sdg?: BAM;
  sbd?: Aed;
  jmd?: Aed;
  afn?: Aed;
  rsd?: Aed;
  tjs?: Aed;
  top?: Aed;
  kid?: Aed;
  ern?: Aed;
  htg?: Aed;
  vuv?: Aed;
  bam?: BAM;
  wst?: Aed;
  bob?: Aed;
  mga?: Aed;
  stn?: Aed;
  bhd?: Aed;
  pen?: Aed;
  srd?: Aed;
  thb?: Aed;
  tvd?: Aed;
  kpw?: Aed;
  yer?: Aed;
  amd?: Aed;
  pkr?: Aed;
  mwk?: Aed;
  php?: Aed;
  czk?: Aed;
  mmk?: Aed;
  ron?: Aed;
  dop?: Aed;
  ghs?: Aed;
  try?: Aed;
  egp?: Aed;
  mzn?: Aed;
  huf?: Aed;
  aed?: Aed;
  all?: Aed;
  fjd?: Aed;
  mdl?: Aed;
  byn?: Aed;
  lkr?: Aed;
  bmd?: Aed;
  nio?: Aed;
  sos?: Aed;
  jod?: Aed;
  tmt?: Aed;
  crc?: Aed;
  vnd?: Aed;
  szl?: Aed;
  zmw?: Aed;
  chf?: Aed;
  uzs?: Aed;
  awg?: Aed;
  jpy?: Aed;
  cve?: Aed;
  hkd?: Aed;
  bgn?: Aed;
  lak?: Aed;
  krw?: Aed;
  tnd?: Aed;
  zwl?: Aed;
  mvr?: Aed;
  sgd?: Aed;
  aoa?: Aed;
  myr?: Aed;
  gnf?: Aed;
  lyd?: Aed;
  idr?: Aed;
  scr?: Aed;
  bnd?: Aed;
  mxn?: Aed;
  sll?: Aed;
  cop?: Aed;
  pgk?: Aed;
  fkp?: Aed;
  tzs?: Aed;
}*/
export interface Currencies {
  USD?: Aed;
  ANG?: Aed;
  UYU?: Aed;
  PYG?: Aed;
  EUR?: Aed;
  BMD?: Aed;
  NIO?: Aed;
  XCD?: Aed;
  JMD?: Aed;
  CRC?: Aed;
  HTG?: Aed;
  HNL?: Aed;
  BOB?: Aed;
  BZD?: Aed;
  AWG?: Aed;
  PAB?: Aed;
  PEN?: Aed;
  BRL?: Aed;
  TTD?: Aed;
  SRD?: Aed;
  CLP?: Aed;
  ARS?: Aed;
  BBD?: Aed;
  DOP?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  MXN?: Aed;
  BSD?: Aed;
  DKK?: Aed;
  COP?: Aed;
  FKP?: Aed;
  GTQ?: Aed;
  CAD?: Aed;
  GYD?: Aed;
  KYD?: Aed;
  VES?: Aed;
  BYN?: Aed;
  GIP?: Aed;
  RSD?: Aed;
  GBP?: Aed;
  BAM?: BAM;
  CHF?: Aed;
  NOK?: Aed;
  MKD?: Aed;
  BGN?: Aed;
  PLN?: Aed;
  FOK?: Aed;
  CZK?: Aed;
  JEP?: Aed;
  RON?: Aed;
  UAH?: Aed;
  RUB?: Aed;
  HUF?: Aed;
  SEK?: Aed;
  ALL?: Aed;
  GGP?: Aed;
  MDL?: Aed;
  IMP?: Aed;
  HRK?: Aed;
  ISK?: Aed;
  XPF?: Aed;
  NZD?: Aed;
  AUD?: Aed;
  SBD?: Aed;
  TOP?: Aed;
  KID?: Aed;
  VUV?: Aed;
  WST?: Aed;
  CKD?: Aed;
  PGK?: Aed;
  FJD?: Aed;
  TVD?: Aed;
  LKR?: Aed;
  AFN?: Aed;
  EGP?: Aed;
  ILS?: Aed;
  JOD?: Aed;
  OMR?: Aed;
  KWD?: Aed;
  TMT?: Aed;
  TJS?: Aed;
  VND?: Aed;
  GEL?: Aed;
  KHR?: Aed;
  UZS?: Aed;
  IRR?: Aed;
  LBP?: Aed;
  BHD?: Aed;
  SAR?: Aed;
  JPY?: Aed;
  QAR?: Aed;
  HKD?: Aed;
  LAK?: Aed;
  MNT?: Aed;
  THB?: Aed;
  KPW?: Aed;
  KRW?: Aed;
  YER?: Aed;
  AMD?: Aed;
  TWD?: Aed;
  PKR?: Aed;
  AZN?: Aed;
  MVR?: Aed;
  SGD?: Aed;
  NPR?: Aed;
  PHP?: Aed;
  MMK?: Aed;
  MYR?: Aed;
  INR?: Aed;
  KGS?: Aed;
  IQD?: Aed;
  TRY?: Aed;
  IDR?: Aed;
  BTN?: Aed;
  BND?: Aed;
  CNY?: Aed;
  AED?: Aed;
  BDT?: Aed;
  MOP?: Aed;
  SYP?: Aed;
  KZT?: Aed;
  NAD?: Aed;
  ZAR?: Aed;
  SOS?: Aed;
  GMD?: Aed;
  DJF?: Aed;
  XOF?: Aed;
  XAF?: Aed;
  ERN?: Aed;
  SZL?: Aed;
  ZMW?: Aed;
  MGA?: Aed;
  STN?: Aed;
  MUR?: Aed;
  UGX?: Aed;
  CVE?: Aed;
  BIF?: Aed;
  KMF?: Aed;
  NGN?: Aed;
  LRD?: Aed;
  TND?: Aed;
  ETB?: Aed;
  ZWL?: Aed;
  MWK?: Aed;
  AOA?: Aed;
  MAD?: Aed;
  SSP?: Aed;
  GNF?: Aed;
  LYD?: Aed;
  MRU?: Aed;
  GHS?: Aed;
  MZN?: Aed;
  SCR?: Aed;
  LSL?: Aed;
  CDF?: Aed;
  SHP?: Aed;
  SLL?: Aed;
  KES?: Aed;
  RWF?: Aed;
  DZD?: Aed;
  BWP?: Aed;
  TZS?: Aed;
  SDG?: BAM;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}
/*
export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}*/
/*
export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
  Turday = "turday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}*/

export interface CountryTax {
  country: string;
  taxes: TaxElement[];
  differencialTaxes: DifferencialTax[];
  name: string;
}

export interface DifferencialTax {
  porcentage: string;
  type: string;
  value: number;
}

export interface TaxElement {
  value: number;
  porcentage: string;
}
let someArray: ("test"|"Test2")[] = [
  "Test2", "test"
]