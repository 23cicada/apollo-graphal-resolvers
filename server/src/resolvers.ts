import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_, __, { datasources }) => {
      return datasources.trackAPI.getTracksForHome();
    }
  },

  Track: {
    author: ({ authorId }, _, { datasources }) => {
      return datasources.trackAPI.getAuthor(authorId)
    }
  }
}