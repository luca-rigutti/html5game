const game2048 = {

    left: function (matrix) {
        changed = false;
        for (let row = 0; row < matrix.length; row++) 
            for (let col = 0; col < matrix[row].length - 1; col++ )
                {
                    let colPosition = col + 1;
                    let found = false;
                    for (; colPosition < matrix[row].length && !found; colPosition++)
                        if(matrix[row][colPosition]!=0)
                            found = colPosition;

                    colPosition = found;
                    
                    if (colPosition>=matrix[row].length || !found)
                        continue;

                    wasEmpty = matrix[row][col]==0;

                    if(matrix[row][col]==0 || matrix[row][col]==matrix[row][colPosition] ){
                        matrix[row][col] += matrix[row][colPosition];
                        matrix[row][colPosition] = 0;
                        changed = true;
                    }

                    if(wasEmpty)
                        col -= 1;

                }

        return matrix;
    }

}
module.exports = game2048;
