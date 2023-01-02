const game2048 = {

    left: function (matrix) {
        changed = false;
        for (let row = 0; row < matrix.length; row++) 
            for (let col = 0; col < matrix[row].length - 1; col++ )
                {
                    [matrix,changed,col] = this.checkAndPerformGame(matrix,row,col,false,true);
                }

        return matrix;
    },

    right: function (matrix) {
        changed = false;
        for (let row = 0; row < matrix.length; row++) 
            for (let col = matrix[row].length - 1; col > 0; col-- )
                {
                    [matrix,changed,col] = this.checkAndPerformGame(matrix,row,col,false,false);
                }

        return matrix;
    }, 

    checkAndPerformGame(matrix,row_index,col_index,is_row,increment)
    {
        let colPosition = col_index;
        if(increment)
            colPosition += 1;
        else
            colPosition -= 1;

        let found = false;
        let positionFound = 0;
        for (; ((colPosition < matrix[row_index].length && increment) || (colPosition>=0 && !increment)) && !found; increment? colPosition++ : colPosition-- )
            if(matrix[row_index][colPosition]!=0)
                {
                    found = true;
                    positionFound = colPosition;
                }

        colPosition = positionFound;
        
        if (((colPosition>=matrix[row_index].length && increment) || (colPosition<0 && !increment)) || !found)
            return [matrix,false,col_index];

        

        wasEmpty = matrix[row_index][col_index]==0;

        if(matrix[row_index][col_index]==0 || matrix[row_index][col_index]==matrix[row_index][colPosition] ){
            matrix[row_index][col_index] += matrix[row_index][colPosition];
            matrix[row_index][colPosition] = 0;
            changed = true;
        }

        if(wasEmpty)
            if(increment)
                col_index -= 1;
            else
                col_index += 1;

        return [matrix,changed,col_index]
    }

}
module.exports = game2048;
