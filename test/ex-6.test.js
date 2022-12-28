import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("exercise 6: Does it exist? and where is it?", async () => {
        const data = await fs.readFile("./ex-6.js");
        const code = `${data} return updateCarCollection`;

        const func = new Function(code);
        const updateCarCollection = func();

        expect(console.log).toHaveBeenCalledWith(
            "new car collection is : toyota,fiat,honda,bmw,audi"
        );
        expect(console.log).toHaveBeenCalledWith(
            "toyota has already existed in the 1 position of car collection"
        );
    });
});
