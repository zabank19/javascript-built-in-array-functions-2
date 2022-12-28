import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("exercise 1: Total Paid Amount", async () => {
        const data = await fs.readFile("./ex-1.js");
        const code = `${data} return totalTransactions`;
        const func = new Function(code);
        const totalTransactions = func();

        expect(totalTransactions).toBe(1410083);
        expect(console.log).toHaveBeenCalledWith(
            "Total bill transaction is 1410083"
        );
    });
});
