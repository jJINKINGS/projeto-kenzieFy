import { z } from "zod";
import { trackPayloadSchema, trackSchema } from "../schemas";

type Track = z.infer<typeof trackSchema>;
type TrackPayload = z.infer<typeof trackPayloadSchema>;

export { Track, TrackPayload };