     function cb(result, num){
        result = result + num;
        return result;
      }

      function reduceFunc(arr, cb){
        var result=0;
        for(let i =0; i<arr.length; i+=1){
          result = cb(result, arr[i]);
          }
        return result;
      }

      let arr = [1,2,3,4,5];
      let numbers = reduceFunc(arr, cb);
      console.log(numbers);



      //USing in-buit function

      // let arr = [1,2,3,4,5];
      // const sum = arr.reduce((sum, number) => {
      //   const upsum = sum + number;
      //   return upsum;
      // },0);
      // console.log(sum);
