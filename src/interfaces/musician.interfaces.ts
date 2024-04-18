import { z } from "zod";
import { musicianSchema, musicianCreateSchema } from "../schemas";

type Musician = z.infer<typeof musicianSchema>;
type MusicianCreate = z.infer<typeof musicianCreateSchema>;
type MusicianPayload = MusicianCreate & {bandId: number};

export { Musician, MusicianCreate, MusicianPayload };