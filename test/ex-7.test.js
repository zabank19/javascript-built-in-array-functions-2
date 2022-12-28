import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("exercise 7: Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
        const data = await fs.readFile("./ex-7.js");
        const code = `${data} return isPalindrome`;

        const func = new Function(code);
        const isPalindrome = func();

        expect(console.log.mock.calls[0][0]).toBe(true);
        expect(console.log.mock.calls[1][0]).toBe(true);
        expect(console.log.mock.calls[2][0]).toBe(false);
    });
});
