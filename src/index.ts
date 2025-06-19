// У файле придставлено три функции две из которых созданы для демонстрации searchMissingNumbers


/**
 * Функция находит отсутствующие числа в масиве чисел
 * @param {number[]} numbers 
 * @returns {number[]}
 */
export function searchMissingNumbers(numbers: number[]):number[] {
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
 * @returns {{array:number[];deleted:number[]}}
 */
export function getBigNumbers(size:number):{array:number[];deleted:number[]} {
  const bigSize = size * 1000;
  let array = Array.from({
    length: bigSize
  }, (v, k) => k + 1)

  const savedIndex: Set<number> = new Set<number>();
  const deleted: number[] = []; 
  let toDelete = 2;
  while (toDelete) {
    const index = getRandomIndex(bigSize);

    /*
     Предотвращает повторные индексы
     Рандомный индекс не может быть меньше 1 или последним индексом масива чисел
    */
    if (!savedIndex.has(index) && index > 1 && index <= array.length - 1) {

      savedIndex.add(index);

      deleted.push(array[index])

      array.splice(index, 1);
      
        --toDelete;
    }

  }

  return {
    deleted,
    array
  }

}

/*
998 елементов масива
const numbers = getBigNumbers(1);
console.log(searchMissingNumbers(numbers.array),numbers.deleted);
*/