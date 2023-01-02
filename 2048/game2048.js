const game2048 = {

    left: function (matrix) {
        changed = false;
        for (let row = 0; row < matrix.length; row++) 
            for (let col = 0; col < matrix[row].length - 1; col++ )
                {
                    [matrix,changed,col] = this.checkAndPerformGame(matrix,row,col,false);
                }

        return matrix;
    },

    checkAndPerformGame(matrix,row_index,col_index,is_row)
    {
        let colPosition = col_index + 1;
        let found = false;
        for (; colPosition < matrix[row_index].length && !found; colPosition++)
            if(matrix[row_index][colPosition]!=0)
                found = colPosition;

        colPosition = found;
        
        if (colPosition>=matrix[row_index].length || !found)
            return [matrix,false,col_index];

        

        wasEmpty = matrix[row_index][col_index]==0;

        if(matrix[row_index][col_index]==0 || matrix[row_index][col_index]==matrix[row_index][colPosition] ){
            matrix[row_index][col_index] += matrix[row_index][colPosition];
            matrix[row_index][colPosition] = 0;
            changed = true;
        }

        if(wasEmpty)
            col_index -= 1;

        return [matrix,changed,col_index]
    }

}
module.exports = game2048;
