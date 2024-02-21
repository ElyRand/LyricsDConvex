import { v } from "convex/values";
import { mutation, query } from "./functions";

export const list = query(async (ctx) => {
  return await ctx.table("songs").map(async (song) => ({
    ...song,
    artist: (await song.edge("artist")).name,
  }));
});

export const add = mutation({
  args: {
    title: v.string(),
    artistId: v.id("artists"),
    lyrics: v.string(),
  },
  handler: async (ctx, { title, artistId, lyrics }) => {
    return await ctx.table("songs").insert({
      title,
      lyrics,
      playlists: [],
      artistId,
    });
  },
});
