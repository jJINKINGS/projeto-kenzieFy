"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicianService = void 0;
const database_1 = require("../database");
const schemas_1 = require("../schemas");
class MusicianService {
    musician = database_1.prisma.musician;
    list = async () => {
        return await this.musician.findMany();
    };
    create = async (payload) => {
        // const newMusician = await this.musician.create({ data: payload });
        const newMusician = await this.musician.create({ data: {
                firstName: payload.firstName,
                lastName: payload.lastName,
                groupMembers: {
                    create: {
                        joined: payload.joined,
                        band: {
                            connect: {
                                id: payload.bandId,
                            }
                        }
                    }
                }
            } });
        return schemas_1.musicianSchema.parse(newMusician); //se tiver chave a mais ele so retorna as que tem na model/interface
    };
}
exports.MusicianService = MusicianService;
