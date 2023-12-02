const path = "./input.txt";

// Bun
const file = Bun.file(path);
let data = await file.text();

// solution start

const r = /\d+/g;
const words = data.split("\n");
let result = 0;

for (let i = 0; i < words.length - 1; i++) {
  const numbers = words[i].match(r)?.join("") || "";

  const firstDigit = numbers[0];
  const lastDigit = numbers[numbers?.length - 1];

  result += +`${firstDigit}${lastDigit}`;
}

console.log("🚀 ~ file: part1.ts:6 ~ data:", result);
