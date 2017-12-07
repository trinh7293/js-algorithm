const insertionSort = input => {
    if(input.length == 1) {return input}
    for(let i=1; i < input.length; i++) {
        const tempInputI = input[i]
        for(let j = i - 1; j >= 0; j--) {
            if(input[j] > tempInputI) {
                input[j+1] = input[j]
                input[j] = tempInputI
            } else {
                input[j+1] = tempInputI
                break
            }
        }
    }
    return input
}

let a = [3, 0, 2, 5, -1, 4, 1]
console.log('result======',insertionSort(a))