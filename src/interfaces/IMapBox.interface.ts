export interface IMapBoxAPIGeocodingResponse {
  type: string;
  query: string[];
  features: Feature[];
  attribution: string;
}

export interface Feature {
  id: string;
  // type: FeatureType;
  type: string;
  place_type: PlaceType[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  matching_text?: string;
  matching_place_name?: string;
  bbox: number[];
  center: number[];
  geometry: Geometry;
  context?: Context[];
}

export interface Context {
  id: string;
  wikidata: string;
  short_code: string;
  text: string;
}

export interface Geometry {
  type: GeometryType;
  coordinates: number[];
}

export enum GeometryType {
  Point = 'Point',
}

export enum PlaceType {
  Country = 'country',
  Place = 'place',
  Region = 'region',
}

export interface Properties {
  wikidata: string;
  short_code?: string;
}
