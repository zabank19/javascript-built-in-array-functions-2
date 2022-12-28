import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("exercise 5: Is he/she Criminal Inspection?", async () => {
        const data = await fs.readFile("./ex-5.js");
        const code = `${data} return searchCrimeRecord`;

        const func = new Function(code);
        const searchCrimeRecord = func();

        expect(searchCrimeRecord("Dilan Sandra")).toStrictEqual(
            "Dilan Sandra has no crime record"
        );
        expect(searchCrimeRecord("Tinashe Benigno")).toStrictEqual(
            "Tinashe Benigno has crime record !!!"
        );
    });
});
