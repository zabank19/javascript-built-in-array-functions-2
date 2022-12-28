import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 6: Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-6.js");
        const code = `${data} return updateCarCollection`;

        const func = new Function(code);
        const updateCarCollection = func();

        expect(...console.log.mock.calls[0]).toStrictEqual(
            "new car collection is : toyota,fiat,honda,bmw,audi"
        );
        expect(...console.log.mock.calls[1]).toStrictEqual(
            "toyota has already existed in the 1 position of car collection."
        );
    });
});
