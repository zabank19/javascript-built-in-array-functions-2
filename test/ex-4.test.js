import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Build-in Array Function tests cases", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });
    afterAll(() => {
        jest.resetAllMocks();
    });

    test("exercise 4: Total Paid Amount by Member", async () => {
        const data = await fs.readFile("./ex-4.js");
        const code = `${data} return totalPaidByMember`;

        const func = new Function(code);
        const totalPaidByMember = func();

        expect(totalPaidByMember).toStrictEqual({
            Mark: 283769,
            Peter: 41012,
            Bee: 160790,
            Jack: 81584,
            Patrick: 46169,
            John: 66160,
            T: 15885,
            Pop: 38590,
            Lisa: 35786,
            Alex: 127142,
            Bank: 11315,
            P: 27477,
        });
    });
});
