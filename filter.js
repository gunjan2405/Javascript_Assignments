  function cb(val){
        if(val%2==0){
          return true;
        }
        else{
          return false;
        }
      }

      function filterFunc(arr, cb){
        const resArr = [];
        for(let i =0; i<arr.length; i+=1){
          const result = cb(arr[i]);
          if(result){
            resArr.push(arr[i]);
          }
        }
        return resArr;
      }

      let arr = [1,2,3,4,5];
      let numbers = filterFunc(arr, cb);
      console.log(numbers);




      // Using in-built Filter method

      // let arr = [2, 3, 5, 6, 8];
      // let numbers = arr.filter((number) =>
      //         number<6
      //       );
      // console.log(numbers);
