const selectionSort = (input, compareFucntionInput) => {
    const compareFunctionDefault = (a, b) => a - b
    const compareFunction = compareFucntionInput || compareFunctionDefault
    let index = 0
    let min = 0
    let temp = 0
    for(let i=0; i<input.length; i++){
        index = i
        min = input[i]
        for(let j=i+1; j<input.length; j++){
            if(compareFunction(min, input[j]) > 0) {
                index = j
                min = input[j]
            }
        }
        temp = input[i]
        input[i] = input[index]
        input[index] = temp
    }
    return input
}

let a = [3, 0, 2, 5, -1, 4, 1]
console.log('result======',selectionSort(a))
console.log('result======',selectionSort(a, (a, b)=> b-a))