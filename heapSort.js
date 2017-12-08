const heapSort = array => {
    let array_length
    const heapRoot = (array, i) => {
        const left = i * 2 + 1
        const right = i * 2 + 2
        let max = i
        if(left < array_length && array[left] > array[i]) {
            max = left
        }
        if(right < array_length && array[right] > array[max]) {
            max = right
        }
        if(max != i) {
            swap(array, i, max)
            heapRoot(array, max)
        }
    }
    const swap = (array, indexA, indexB) => {
        const temp = array[indexA]
        array[indexA] = array[indexB]
        array[indexB] = temp
    }
    array_length = array.length

    for(let i = Math.floor(array.length/2); i>=0; i -= 1) {
        heapRoot(array, i)
    }
    for(i = array.length - 1; i > 0; i--){ 
        swap(array, i, 0)
        array_length--
        heapRoot(array, 0)
    }
    return array
}

let a = [3, 0, 2, 5, -1, 4, 1]
console.log('result======',heapSort(a))