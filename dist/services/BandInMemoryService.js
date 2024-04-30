"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandInMemoryService = exports.BandInMemoryService = void 0;
const schemas_1 = require("../schemas");
const bandsDB = [];
const genNextId = () => {
    const lastBand = bandsDB.sort((a, b) => a.id - b.id).at(-1);
    if (lastBand) {
        return lastBand.id + 1;
    }
    return 1;
};
class BandInMemoryService {
    list = async () => {
        // return await prisma.band.findMany();
        return schemas_1.bandSchema.array().parse(bandsDB);
    };
    create = async (payload) => {
        // const newBand = await prisma.band.create({ data: payload });
        // return bandSchema.parse(newBand); //se tiver chave a mais ele so retorna as que tem na model/interface
        const newBand = {
            id: genNextId(),
            foundedAt: payload.foundedAt || null,
            ...payload
        };
        bandsDB.push(newBand);
        return schemas_1.bandSchema.parse(newBand);
    };
}
exports.BandInMemoryService = BandInMemoryService;
exports.bandInMemoryService = new BandInMemoryService();
