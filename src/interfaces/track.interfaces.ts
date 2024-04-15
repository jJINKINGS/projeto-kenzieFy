import { z } from "zod";
import { trackPayloadSchema, trackRetrieveSchema, trackSchema } from "../schemas";

type Track = z.infer<typeof trackSchema>;
type TrackPayload = z.infer<typeof trackPayloadSchema>;
type TrackRetrieve = z.infer<typeof trackRetrieveSchema>;

export { Track, TrackPayload, TrackRetrieve };