import { Track, TrackPayload } from "../interfaces";
import { prisma } from "../database"
import { trackSchema } from "../schemas";

export class TrackService {
    private track = prisma.track;

    public list = async (): Promise<Array<Track>> => {
        return await this.track.findMany();
    };

    public listByAlbumId = async (albumId: number): Promise<Array<Track>> => {
        return await this.track.findMany({where: { albumId: albumId}});
    };

    public create = async (payload: TrackPayload): Promise<Track> => {
        const newTrack = await this.track.create({ data: payload });

        return trackSchema.parse(newTrack); //se tiver chave a mais ele so retorna as que tem na model/interface
    };

    public retrieve = async (trackId: number): Promise<Track> => {
        return await this.track.findUnique({ where: {id: trackId}});
    };
}