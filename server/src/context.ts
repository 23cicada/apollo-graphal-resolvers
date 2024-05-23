import { TrackAPI } from "./datasources/track-api";

export type DataSourceContext = {
  datasources: {
    trackAPI: TrackAPI
  };
};