const path = "./input.txt";

// Bun
const file = Bun.file(path);
let data = await file.text();

// solution start
// let data = `two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen
// `;

const numbersMap: any = {
//   zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const regx = new RegExp(Object.keys(numbersMap).join("|"), "g");
const r = /\d+/g;
const words = data.split("\n");
let result = 0;

for (let i = 0; i < words.length - 1; i++) {
  const wordWithNums = words[i].replaceAll(
    regx,
    (matched) => numbersMap[matched]
  );

  const numbers = wordWithNums.match(r)?.join("") || "";

  const firstDigit = numbers[0];
  const lastDigit = numbers[numbers?.length - 1];

  console.log("🚀", `${firstDigit}${lastDigit}`);

  result += +`${firstDigit}${lastDigit}`;
}

console.log("🚀 ~ file: part1.ts:6 ~ data:", result);
