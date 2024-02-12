//Matriz 5 x 5
function generateUniqueRandomMatrix5(rows, cols) {
    const maxNumber = 50;
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    const usedNumbers = new Set();
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        } while (usedNumbers.has(randomNumber));
  
        matrix[i][j] = randomNumber;
        usedNumbers.add(randomNumber);
      }
    }
  
    return matrix;
  }
  
  // Example usage:
  const matrix = generateUniqueRandomMatrix(5, 5);
  console.log(matrix);

  //Matriz 4 x 4
function generateUniqueRandomMatrix4(rows, cols) {
    const maxNumber = 50;
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    const usedNumbers = new Set();
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        } while (usedNumbers.has(randomNumber));
  
        matrix[i][j] = randomNumber;
        usedNumbers.add(randomNumber);
      }
    }
  
    return matrix;
  }
  
  // Example usage:
  const matrix = generateUniqueRandomMatrix(4, 4);
  console.log(matrix);

  //Matriz 3 x 3
function generateUniqueRandomMatrix3(rows, cols) {
    const maxNumber = 50;
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    const usedNumbers = new Set();
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        } while (usedNumbers.has(randomNumber));
  
        matrix[i][j] = randomNumber;
        usedNumbers.add(randomNumber);
      }
    }
  
    return matrix;
  }
  
  // Example usage:
  const matrix = generateUniqueRandomMatrix(3, 3);
  console.log(matrix);

