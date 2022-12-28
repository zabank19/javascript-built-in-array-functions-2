import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 5: Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-5.js");
        const code = `${data} return searchCrimeRecord`;

        const func = new Function(code);
        const searchCrimeRecord = func();

        expect(...console.log.mock.calls[0]).toStrictEqual(
            "Dilan Sandra has no crime record !!!"
        );
        expect(...console.log.mock.calls[1]).toStrictEqual(
            "Tinashe Benigno has crime record"
        );
    });
});
