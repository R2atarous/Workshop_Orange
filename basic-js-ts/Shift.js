function shift(list,direction,num) 
    {   
      if (direction === "left") { 
        for (i = 0; i < num; i++) {
              left_shift = list.shift();
              list.push(left_shift);
            }            
      }
      else {
        for (i = 1; i < num; i++) {
              right_shift = list.shift();
              list.push(right_shift);
            }
      }  
      return list;
    } 
    
console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
console.log(shift([1, 2, 3, 4 ,5], 'right', 3));