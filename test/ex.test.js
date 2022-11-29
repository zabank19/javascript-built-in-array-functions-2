import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Build-in Array Function tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
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

  test("exercise 2: Total Unique Members", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return totalMembers`;

    const func = new Function(code);
    const totalMembers = func();

    expect(totalMembers).toBe(12);
    expect(console.log).toHaveBeenCalledWith("Unique Members Count: 12");
  });

  test("exercise 3: Total Paid Amount by Location", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return totalPaidByLocation`;

    const func = new Function(code);
    const totalPaidByLocation = func();

    expect(totalPaidByLocation).toStrictEqual({
      Chonburi: 226687,
      Suphanburi: 41012,
      Trang: 24826,
      Trat: 47202,
      Lopburi: 29815,
      "Chiang Mai": 48911,
      Lampang: 12545,
      Phuket: 88674,
      Saraburi: 23655,
      Phrae: 15678,
      Loei: 76757,
      "Chiang Rai": 11230,
      "Nakhon Pathom": 76705,
      Bangkok: 370177,
      "Samut Prakan": 38590,
      Rayong: 40543,
      Yala: 11315,
      Ranong: 42612,
      Phayao: 48147,
      Khonkaen: 23218,
      Nan: 37463,
      "Nakhon Sawan": 74321,
    });
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

  test("exercise 7: Palindrome", async () => {
    const data = await fs.readFile("./ex-7.js");
    const code = `${data} return isPalindrome`;

    const func = new Function(code);
    const isPalindrome = func();

    expect(isPalindrome("reviver")).toBe(true);
    expect(isPalindrome("deliver")).toBe(false);
  });
});
