import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("exercise 2: Total Unique Members", async () => {
        const data = await fs.readFile("./ex-2.js");
        const code = `${data} return totalMembers`;

        const func = new Function(code);
        const totalMembers = func();

        expect(totalMembers).toBe(12);
        expect(console.log).toHaveBeenCalledWith("Unique Members Count: 12");
    });
});
