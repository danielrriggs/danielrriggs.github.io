import { readFileSync } from "fs";

export interface Embedding {
    class_name: string;
    embedding: { vec: Array<number>, tokens: number };
    history: Array<{
        blocks: Object,
        mtime: number,
        size: number
    }>;
    key: string;
    path: string;
}

export class SmartConnectionData {
    static loaded = false;
    static allData: Array<Embedding> = [];

    static ensureLoaded() {
        if (SmartConnectionData.loaded !== true) {
            SmartConnectionData.allData = this.readEmbeddingsFile();
        }
    }

    static readEmbeddingsFile() {
        const allEmbeddings: Array<Embedding> = []
        readFileSync(`${process.cwd()}/content/.smart-connections/smart_notes-jina-embeddings-v2-small-en-2048.ajson`, 'utf8').split(",\n").filter(value => Object.keys(value).length !== 0).forEach((batch, i) => {
            const items = JSON.parse(`{${batch}}`);
            Object.entries(items).forEach(([key, value]) => {
                allEmbeddings.push(value as Embedding);
            });
        });

        return allEmbeddings;
    }
}