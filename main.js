function candyCrush(map) {
    if(!map[0]) return;

    console.log(map)

    const width = map[0].length;
    const height = map.length;
    let counter;

    for(arr of map) {
        for(let x = 1; x < width; x++) {
            counter = 1;
            countItems(arr, x)

            if(counter > 1) {
                for(let y = x-1; y<=counter; y++) {
                    console.log(y)
                    arr[y] = 0;
                }
            }

        }
    }

    function countItems(arr, index) {
        if(arr[index] === arr[index - counter]) {
            counter++;
            countItems(arr, index);
        }
    }

    console.log(map)

}

module.exports = candyCrush;