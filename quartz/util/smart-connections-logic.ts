import { Embedding, SmartConnectionData } from "./smart-connection-data";

export class SmartConnectionsLogic {
    constructor() {
        SmartConnectionData.ensureLoaded();
    }

    findConnections(fileKey?: string): {
        filePath: string;
        similarity: number;
    }[] {
        if (!fileKey) {
            console.log(`findConnections(), no fileKey provided`);
            return [];
        }
        const embedding = SmartConnectionData.allData.find(data => data.key === fileKey);
        const thisFileVec = embedding?.embedding.vec;
        if (!thisFileVec) {
            console.log(`${fileKey} has no vec`);
            return [];
        }

        const allOtherEmbeddings = SmartConnectionData.allData.filter(emb => emb.key !== fileKey);

        return this.nearest(thisFileVec, allOtherEmbeddings);
    }

    nearest(thisFileVec: number[], allOtherEmbeddings: Embedding[], results_count = 20): {
        filePath: string;
        similarity: number;
    }[] {

        let nearest: Array<{ filePath: string, similarity: number }> = [];

        allOtherEmbeddings.map(otherEmbedding => {
            nearest.push({
                filePath: otherEmbedding.path,
                similarity: this.cos_sim(thisFileVec, otherEmbedding?.embedding.vec)
            });
        });

        nearest.sort(function (a, b) {
            return b.similarity - a.similarity;
        });

        nearest = nearest.slice(0, results_count);
        return nearest;
    }

    cos_sim(vector1: number[], vector2: number[]) {
        let dotProduct = 0;
        let normA = 0;
        let normB = 0;
        for (let i = 0; i < vector1.length; i++) {
            dotProduct += vector1[i] * vector2[i];
            normA += vector1[i] * vector1[i];
            normB += vector2[i] * vector2[i];
        }
        if (normA === 0 || normB === 0) {
            return 0;
        } else {
            return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
        }
    }
}