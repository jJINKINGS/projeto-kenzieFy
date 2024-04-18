// import { Band } from "@prisma/client";

import { z } from "zod";
import { albumBodyCreateSchema, albumSchema } from "../schemas";

type Album = z.infer<typeof albumSchema>;
type AlbumBodyCreate = z.infer<typeof albumBodyCreateSchema>;

export { Album, AlbumBodyCreate };