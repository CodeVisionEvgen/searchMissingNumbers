// У файле придставлено три функции две из которых созданы для демонстрации searchMissingNumbers


/**
 * Функция находит отсутствующие числа в масиве чисел
 * @param {number[]} numbers 
 * @returns {number}
 */
function searchMissingNumbers(numbers: number[]):number[] {
  // Проверка данных
  if (!Array.isArray(numbers) || numbers.length <= 1) return [];

  const missingNumbers: number[] = [];

  // Для решения задачи будет использован бинарный поиск
  let [left, right] = [0, numbers.length - 1];

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const possibleNumber = middle + 1;

    if (numbers[middle] > possibleNumber) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  // Первое пропущеное число
  missingNumbers.push(left + 1);

  [left, right] = [0, numbers.length - 1];

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const possibleNumber = middle + 1;

    if (numbers[middle] > possibleNumber + 1) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  // Второе пропущеное число
  missingNumbers.push(left + 2);

  return missingNumbers.sort((a, b) => a - b);
}

/**
 * Возвращает случайный индекс в пределах указанной длины
 * @param {number} length 
 * @returns {number}
 */
const getRandomIndex = (length:number):number => Math.floor(Math.random() * length)


/**
 * Параметр size * 1000
 * удаляет 2 неизвестных числа с результата масива
 * @param {number} size 
 * @returns {number[]}
 */
function getBigNumbers(size:number):number[] {
  const bigSize = size * 1000;
  let array = Array.from({
    length: bigSize
  }, (v, k) => k + 1)

  const savedIndex:number[] = []
  let i = 2;
  while (i) {
    const index = getRandomIndex(bigSize);

    /*
     Предотвращает повторные индексы
     Рандомный индекс не может быть меньше 1 или последним индексом масива чисел
    */
    if (!savedIndex.includes(index) && index > 1 && index <= array.length - 1) {

      savedIndex.push(index);


      array = array.slice(0, index - 1).concat(array.slice(index, array.length))
        --i
    }

  }

  return array

}


/*
  998 елементов масива
  const numbers = getBigNumbers(1);
  console.log(searchMissingNumbers(numbers));
  */