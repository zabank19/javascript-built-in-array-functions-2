import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("exercise 7: Palindrome", async () => {
        const data = await fs.readFile("./ex-7.js");
        const code = `${data} return isPalindrome`;

        const func = new Function(code);
        const isPalindrome = func();

        expect(isPalindrome("reviver")).toBe(true);
        expect(isPalindrome("deliver")).toBe(false);
    });
});
