# Sparse Matrix Operations

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Repository Structure](#repository-structure)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [Matrix Operations](#matrix-operations)
- [Testing](#testing)
  - [Subtraction Test](#subtraction-test)
  - [Multiplication Test](#multiplication-test)
- [Contributing](#contributing)
- [License](#license)
- [Contributor](#contributor)

## Overview

The Sparse Matrix Operations application is a JavaScript program designed to handle large sparse matrices efficiently. It reads sparse matrices from input files, performs operations like addition, subtraction, and multiplication, and outputs the results to specified files. The application includes built-in performance tracking and robust error handling.

## Features

- **Sparse Matrix Handling**: Efficiently reads and processes sparse matrices from files.
- **Matrix Operations**: Supports addition, subtraction, and multiplication of matrices.
- **Performance Metrics**: Tracks and logs execution time.
- **Error Handling**: Robust error handling for file operations and invalid inputs.

## Prerequisites

Ensure you have the following before starting:
- Node.js (version 12.x or higher)

## Installation

Clone the repository:

```bash
git clone https://github.com/Lydia02/SparseMatrixOperations.git
cd SparseMatrixOperations
```

## Repository Structure

When you clone the repository, you'll find the following directories and files:
- **`results/`**: This directory will be generated upon running the code and will contain the output files.
- **`sample_inputs/`**: Contains sample input files to be processed.
- **`classes/CustomArray.js`**: Custom array class for storing matrix data.
- **`operations/addMatrices.js`**: Script for matrix addition operation.
- **`operations/subtractMatrices.js`**: Script for matrix subtraction operation.
- **`operations/multiplyMatrices.js`**: Script for matrix multiplication operation.
- **`utils/fileUtils.js`**: Utility script for reading and writing matrix files.
- **`utils/timeTracker.js`**: Script for tracking execution time.
- **`errorHandlers/errorHandler.js`**: Script for handling errors.
- **`main.js`**: Main script that runs the application and handles user input.

## Usage

### Running the Application

To run the application, navigate to the project directory in your terminal and execute the application by passing the operation and paths to the input files:

```bash
node main.js <operation> <path_to_matrix_file_1> <path_to_matrix_file_2>.
```

For example, to add two matrices:

```bash
node main.js subtract sample_input_for_students/easy_sample_03_2.txt sample_input_for_students/easy_sample_04_2.txt
```

This command processes the matrices, performs the specified operation, and saves the result in the `results` directory.

When run, you will see performance metrics displayed in the terminal:

```
Lydia@DESKTOP-5TKSJNF MINGW64 ~/Desktop/ALU/SparseMatrixOperations
$ node main.js subtract sample_input_for_students/easy_sample_03_2.txt sample_input_for_students/easy_sample_03_2.txt
Execution time: 312.99300000071526 ms
Result written to C:\Users\Lydia\Desktop\ALU\SpareMatrix\results\easy_sample_03_2_easy_sample_03_2_result_subtract_2024-05-29T22-38-22-638Z.txt
```

### Matrix Operations

- **Subtract**: Subtract two matrices and outputs the result.
  ```bash
  node main.js subtract <path_to_matrix_file_1> <path_to_matrix_file_2>
  ```
- **Subtraction**: Subtracts the second matrix from the first and outputs the result.
  ```bash
  node main.js subtract <path_to_matrix_file_1> <path_to_matrix_file_2>
  ```
- **Multiplication**: Multiplies two matrices and outputs the result. Ensure the matrices are compatible for multiplication.
  ```bash
  node main.js multiply <path_to_matrix_file_1> <path_to_matrix_file_2>
  ```

## Testing

### Addition Test

To test the addition operation, you can run the following command:

```bash
node main.js add sample_input_for_students/easy_sample_01_1.txt sample_inputs/easy_sample_01_1.txt
```

This command will perform the addition of `easy_sample_01_2.txt` to `easy_sample_01_1.txt` and save the result in the `results` directory.

### Multiplication Test

To test the multiplication operation, you can run the following command:

```bash
node main.js multiply sample_inputs/easy_sample_02_3.txt sample_inputs/easy_sample_02_1.txt
```

Ensure that the matrices are compatible for multiplication, where the number of columns in the first matrix matches the number of rows in the second matrix.

This command will perform the multiplication of `easy_sample_02_3.txt` and `easy_sample_02_1.txt` and save the result in the `results` directory.

## Contributing

Contributions are welcome. Please fork the repository, create a feature branch, and submit a pull request for review.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Contributor

- **Lydia Ojoawo** - [GitHub Profile](https://github.com/Lydia02)

## Happy Coding 🎉

