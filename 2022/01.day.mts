// https://adventofcode.com/2022/day/1

// import { readFile } from "node:fs";

// readFile("./input.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const ans = Array.from(data).map(x=>Number(x))

//   console.log("ans", ans);
// });

const path = "./input.txt";
const file = Bun.file(path);

const text = await file.text();

const groups = text.split("\n\n");

const a = groups.map((group) => group.split("\n"));

let highestSum = 0;

for (let i = 0; i < a.length; i++) {
  let temp = 0;
  for (let j = 0; j < a[i].length; j++) {
    // console.log("🚀 ~ file: 01.day.mts:21 ~ groups:", a[i][j]);
    temp += Number(a[i][j]);
  }
  if (temp > highestSum) highestSum = temp;
}

console.log("🚀 ~ file: 01.day.mts:25 ~ highestSum:", highestSum);
