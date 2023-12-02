
const path = "./input.txt";

// Bun
const file = Bun.file(path);
let inputData = await file.text();


const convertDataToArray = (data: string): Array<string> => {
  return data.split('\n')
}

const getNumberFromLine = (line: string): number => {
  let firstDigit = ''
  for (let i = 0; i < line.length; i++) {
    if (line[i] >= '0' && line[i] <= '9') {
      firstDigit = line[i]
      break
    }
  }

  let lastDigit = ''
  for (let i = line.length - 1; i >= 0; i--) {
    if (line[i] >= '0' && line[i] <= '9') {
      lastDigit = line[i]
      break
    }
  }

  if (firstDigit === '') {
    return 0
  }

  if (lastDigit === '') {
    return parseInt(firstDigit + firstDigit)
  }

  return parseInt(firstDigit + lastDigit)
}

const getNumbersFromAllLines = (lines: Array<string>): Array<number> => {
  const numberFromLines: Array<number> = []
  lines.map(line => {
    numberFromLines.push(getNumberFromLine(line))
  })
  return numberFromLines
}

const input = convertDataToArray(inputData)
const numbersArray = getNumbersFromAllLines(input)

let totalSum = 0
numbersArray.map(n => {
  totalSum = totalSum + n
})

console.log({ totalSum })

export {}