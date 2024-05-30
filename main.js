const fs = require("fs");
const path = require("path");
const { readMatrixFromFile, writeMatrixToFile } = require("./utils/fileUtils");
const measureTime = require("./utils/timeTracker");
const handleError = require("./errorHandler/errorHandler");
const addMatrices = require("./operations/addMatrices");
const subtractMatrices = require("./operations/subtractMatrices");
const multiplyMatrices = require("./operations/multiplyMatrices");

function main() {
  const operation = process.argv[2];
  const matrixFile1 = process.argv[3];
  const matrixFile2 = process.argv[4];

  if (!operation || !matrixFile1 || !matrixFile2) {
    handleError(
      new Error("Usage: node main.js <operation> <matrixFile1> <matrixFile2>")
    );
    return;
  }

  const matrix1Path = path.resolve(matrixFile1);
  const matrix2Path = path.resolve(matrixFile2);

  if (!fs.existsSync(matrix1Path) || !fs.existsSync(matrix2Path)) {
    handleError(new Error("One or both matrix files do not exist."));
    return;
  }

  try {
    const matrix1 = readMatrixFromFile(matrix1Path);
    const matrix2 = readMatrixFromFile(matrix2Path);

    let result;
    switch (operation) {
      case "add":
        result = measureTime(() => addMatrices(matrix1, matrix2));
        break;
      case "subtract":
        result = measureTime(() => subtractMatrices(matrix1, matrix2));
        break;
      case "multiply":
        result = measureTime(() => multiplyMatrices(matrix1, matrix2));
        break;
      default:
        handleError(
          new Error(
            "Invalid operation. Supported operations are: add, subtract, multiply"
          )
        );
        return;
    }

    const resultsDir = path.resolve(__dirname, "results");
    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir);
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const resultFileName = `${path.basename(
      matrixFile1,
      path.extname(matrixFile1)
    )}_${path.basename(
      matrixFile2,
      path.extname(matrixFile2)
    )}_result_${operation}_${timestamp}.txt`;
    const resultFilePath = path.resolve(resultsDir, resultFileName);
    writeMatrixToFile(result, resultFilePath);

    console.log(`Result written to ${resultFilePath}`);
  } catch (error) {
    handleError(error);
  }
}

main();
