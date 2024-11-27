let btn = document.querySelector('button')
let holder = document.querySelector('.text')
let input = document.querySelector('.input')

let singleNumbers = [
    {key: 1, value: 'One'},
    {key: 2, value: 'Two'},
    {key: 3, value: 'Three'},
    {key: 4, value: 'Four'},
    {key: 5, value: 'Five'},
    {key: 6, value: 'Six'},
    {key: 7, value: 'Seven'},
    {key: 8, value: 'Eight'},
    {key: 9, value: 'Nine'},
    {key: 0, value: 'zero'},
]
let tensNumber = [
    {key: 10, value: 'Ten'},
    {key: 11, value: 'Eleven'},
    {key: 12, value: 'Twelve'},
    {key: 13, value: 'Thirteen'},
    {key: 14, value: 'Fourteen'},
    {key: 15, value: 'Fifteen'},
    {key: 16, value: 'Sixteen'},
    {key: 17, value: 'Seventeen'},
    {key: 18, value: 'Eighteen'},
    {key: 19, value: 'Nineteen'},
]
let doubleNumbers = [
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
]
let trippleNumbers = 'Hundred'
let quadNumbers = 'Thousand'

btn.addEventListener('click', () => {
    let number = input.value

    if (input.value <= 9) {
        let answer = singleNumbers.findIndex(num => num.key == input.value)
        holder.value = singleNumbers[answer].value
    } else if (input.value <= 19) {
        let answer = tensNumber.findIndex(num => num.key == input.value)
        holder.value = ''
        holder.value = tensNumber[answer].value
    } else if (input.value <= 99) {
        number = number.toString().split('')
        number[0] == 0 ? number.shift() : null

        let answer = singleNumbers.findIndex(num => num.key == number[0])
        let answer1 = singleNumbers.findIndex(num => num.key == number[1])
        let result

        if (number[1] == 0) {
            result = `${doubleNumbers[answer - 1]}`
        } else {
            result = `${doubleNumbers[answer - 1]} ${singleNumbers[answer1].value}`
        }
        holder.value = ''
        holder.value = result
    } else if (input.value <= 999) {
        number = number.toString().split('')
        number[0] == 0 ? number.shift() : null

        let answer = singleNumbers.findIndex(num => num.key == number[0])
        let answer1 = singleNumbers.findIndex(num => num.key == number[1])
        let answer2 = singleNumbers.findIndex(num => num.key == number[2])
        let result

        if (number[1] == 0 && number[2] == 0) {
            result = `${singleNumbers[answer].value} ${trippleNumbers}`
        } else if (number[1] == 0) {
            result = `${singleNumbers[answer].value} ${trippleNumbers} and ${singleNumbers[answer2].value}`
        } else if (number[1] == 1) {
            number = number[1] + number[2]
            let txt = tensNumber.findIndex(num => num.key == number)
            result = `${singleNumbers[answer].value} ${trippleNumbers} and ${tensNumber[txt].value}`
        } else if (number[2] == 0) {
            result = `${singleNumbers[answer].value} ${trippleNumbers} and ${doubleNumbers[answer1 - 1]}`
        } else {
            result = `${singleNumbers[answer].value} ${trippleNumbers} and ${doubleNumbers[answer1 - 1]} ${singleNumbers[answer2].value}`
        } 
        holder.value = ''
        holder.value = result
    }
    else if (input.value <= 9999) {
        number = number.toString().split('')
        number[0] == 0 ? number.shift() : null

        let answer = singleNumbers.findIndex(num => num.key == number[0]) // Thousand
        let answer1 = singleNumbers.findIndex(num => num.key == number[1]) // Hundred
        let answer2 = singleNumbers.findIndex(num => num.key == number[2]) // Tens
        let answer3 = singleNumbers.findIndex(num => num.key == number[3]) // Unit
        let result

        if (number[1] == 0 && number[2] == 0 && number[3] == 0) {
            result = `${singleNumbers[answer].value} ${quadNumbers}`
        } 

        else if (number[2] == 1) {
            i = number[2] + number[3]
            let txt = tensNumber.findIndex(num => num.key == i)
            if (number[1] == 0) {
                result = `${singleNumbers[answer].value} ${quadNumbers} and ${tensNumber[txt].value}`            
            } else {
                result = `${singleNumbers[answer].value} ${quadNumbers}, ${singleNumbers[answer1].value} ${trippleNumbers} and ${tensNumber[txt].value}`
            }
        } 

        else if (number[2] == 0 && number[3] == 0) {
            result = `${singleNumbers[answer].value} ${quadNumbers}, ${singleNumbers[answer1].value} ${trippleNumbers}`
        } else if (number[1] == 0 && number[3] == 0) {
            result = `${singleNumbers[answer].value} ${quadNumbers} and ${doubleNumbers[answer2 - 1]}`
        } else if (number[1] == 0 && number[2] == 0) {
            result = `${singleNumbers[answer].value} ${quadNumbers} and ${singleNumbers[answer3].value}`
        } 

        else if (number[3] == 0) {
            result = `${singleNumbers[answer].value} ${quadNumbers}, ${singleNumbers[answer1].value} ${trippleNumbers} and ${doubleNumbers[answer2 - 1]}`
        }else if (number[1] == 0) {
            result = `${singleNumbers[answer].value} ${quadNumbers} and ${doubleNumbers[answer2 - 1]} ${singleNumbers[answer3].value}`
        } else if (number[2] == 0) {
            result = `${singleNumbers[answer].value} ${quadNumbers}, ${singleNumbers[answer1].value} ${trippleNumbers} and ${singleNumbers[answer3].value}`
        } 
        
        else {
            result = `${singleNumbers[answer].value} ${quadNumbers}, ${singleNumbers[answer1].value} ${trippleNumbers} and ${doubleNumbers[answer2 - 1]} ${singleNumbers[answer3].value}`
        }
        holder.value = ''
        holder.value = result
    } else if (input.value > 9999 ) {
        alert(`I have done yet the best i can, but i would like to put a full stop here.
        Until i find a better way, please input a lower value`)
    }
})

