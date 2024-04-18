import { z } from "zod";
import { sessionBodyCreateSchema, sessionReturnSchema } from "../schemas";

export type SessionBodyCreate = z.infer<typeof sessionBodyCreateSchema>;
export type SessionReturn = z.infer<typeof sessionReturnSchema>;