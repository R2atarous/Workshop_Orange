function secondMax(list) 
    {   
      if (!list.length){
        return "Error"
      }
      first_max = Math.max.apply(Math, list);
      list.splice(list.indexOf(first_max), 1);
      for (i = 0; i < list.length; i++) {
        if (list.includes(first_max)){
          list.pop(first_max)
        }
      }
      if (list.length > 1) {
        second_max = Math.max.apply(Math, list);
        return second_max;
      }
      return first_max;
    } 
    
console.log(secondMax([]));