import { Track, TrackPayload, TrackRetrieve } from "../interfaces";
import { prisma } from "../database"
import { trackSchema, trackRetrieveSchema } from "../schemas";


export class TrackService {
    private track = prisma.track;

    public list = async (): Promise<Array<Track>> => {
        const tracks = await this.track.findMany();
        return trackSchema.array().parse(tracks);
    };

    public listByAlbumId = async (albumId: number): Promise<Array<Track>> => {
        const albumTracks = await this.track.findMany({where: { albumId: albumId}});
        return trackSchema.array().parse(albumTracks);
    };

    public create = async (payload: TrackPayload): Promise<Track> => {
        const newTrack = await this.track.create({ data: payload });

        return trackSchema.parse(newTrack); //se tiver chave a mais ele so retorna as que tem na model/interface
    };

    public retrieve = async (trackId: number): Promise<TrackRetrieve> => {
        const track = await this.track.findUnique({ where: {id: trackId}, include: { album: true }});
        return trackRetrieveSchema.parse(track);
    };
}