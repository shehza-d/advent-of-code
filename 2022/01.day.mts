// https://adventofcode.com/2022/day/1

import fs from "node:fs";

const path = "./input.txt";

// Node
const data = fs.readFileSync(path, "utf8");

// Bun
const file = Bun.file(path);
// const data = await file.text();

const groups = data.split("\n\n");

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
