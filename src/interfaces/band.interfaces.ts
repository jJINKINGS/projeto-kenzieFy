// import { Band } from "@prisma/client";

import { z } from "zod";
import { bandPayloadSchema, bandSchema } from "../schemas";

type Band = z.infer<typeof bandSchema>;
type BandPayload = z.infer<typeof bandPayloadSchema>;

export { Band, BandPayload };