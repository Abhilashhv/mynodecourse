var sum =0;
const sumOfNumbers = (numbers) => {
    numbers.map(num => {
        return sum+= num;
    })
    return sum;
}

module.exports = sumOfNumbers;