# CCIndianajones

This function was written to solve riddle according to the following rules:

```json ● Write a function that will receive a two-dimensional array of integers in range
[1, 1000].
● The numbers of columns and rows should be in range [3, 50].
● If there are three or more of the same integers adjacent vertically or
horizontally, "remove" them from the board.
● Removed integers are represented by the value 0. If an empty space has
integers on top of itself, drop integers until they hit a non-zero value or the
very bottom of the board.
● The function should be repeated until there are no integers left to be removed.
After that, a stable board should be returned.
```
<br>

To use this function You first need to import it
```js
const riddleSolver = require("./example");
```

Function takes 1 argument and its 2d array filled with characters. Example:
```json
const board = [
    [ 7, 7, 7, 5, 1, 7 ],
    [ 1, 8, 1, 1, 1, 4 ],
    [ 3, 2, 3, 9, 7, 6 ],
    [ 9, 9, 3, 3, 6, 2 ],
    [ 1, 9, 3, 1, 8, 7 ],
    [ 5, 9, 2, 2, 4, 8 ]
];
```
and returns given board modified according to rules. That is:

Function starts from top left (index [0][0]) and checks every item until end of array.
At every step it checks if next item to the right or to the bottom is equal to itself.
IF it is then it starts counting how many similar items are connected in given direction.
When the number of similar items is greater then 2 then it removes all of them and returns 
to the start of the board ([0][0]). Then it uses provided gravity() function which go through
the board in similar fashion and if item below current item is equal to 0 it changes item below
to the value of current item and current item to 0. Function returns updated board when it reaches
end of last array.

I've used only standard for loops as it provides easiest access to current index and i believe it 
is significantly faster than loops provided by JavaScript (filter/map).

I have also nested helper function removeAdjacentItems() to decrease memory and computational power consumption
By not having to recalculate array.length or send it and board outside of solve riddle function.
