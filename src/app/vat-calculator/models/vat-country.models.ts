export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: Region[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  borders?: string[];
  flag?: string;
  cioc?: string;
  gini?: { [key: string]: number };
  fifa?: string;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left,
  Right,
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Africa,
  Americas,
  Asia,
  Europe,
  NorthAmerica,
  Oceania,
  SouthAmerica,
}

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
  root: string;
  suffixes: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum StartOfWeek {
  Monday,
  Sunday,
  Saturday,
}

export enum Status {
  OfficiallyAssigned,
  UserAssigned,
}
