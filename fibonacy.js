const fibonacy = index => {
    if(index < 1) { return 'please choose a interger index > 0' }
    if(index < 3) { return 1}
    return fibonacy(index-1) + fibonacy(index-2)
}

console.log('result',fibonacy(7))