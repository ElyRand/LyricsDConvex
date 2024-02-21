import { defineEnt, defineEntSchema, getEntDefinitions } from "convex-ents";
import { v } from "convex/values";

const schema = defineEntSchema({
  playlists: defineEnt({ name: v.string() }),
  songs: defineEnt({
    title: v.string(),
    playlists: v.array(v.id("playlists")),
    lyrics: v.string(),
  }).edge("artist"),
  artists: defineEnt({ name: v.string() }).edges("songs", {ref: true}),
});

export default schema;
export const entDefinitions = getEntDefinitions(schema);