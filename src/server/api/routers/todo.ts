import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const todoRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ description: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.todo.create({
        data: {
          description: input.description,
        },
      });
    }),
  findAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.todo.findMany();
  }),
  update: publicProcedure
    .input(z.object({ id: z.string().min(1), completed: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.todo.update({
        where: {
          id: input.id,
        },
        data: {
          completed: input.completed,
        },
      });
    }),
  delete: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.todo.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
