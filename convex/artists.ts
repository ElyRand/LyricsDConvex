import { v } from "convex/values";
import { mutation, query } from "./functions";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.table("artists");
  },
});

export const add = mutation({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {
    return await ctx.table("artists").insert({
        name,
    });
  },
});
