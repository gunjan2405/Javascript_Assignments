      function cb(val){
        return val*3;
      }

      function mapFunc(arr, cb){
        const resArr = [];
        for(let i =0; i<arr.length; i+=1){
            resArr[i] = cb(arr[i]);
          }
        return resArr;
      }

      let arr = [1,2,3,4,5];
      let numbers = mapFunc(arr, cb);
      console.log(numbers);


      

      // Using in-built Map function
      //
      // let arr = [1,  2, 3, 4, 5];
      // let numbers = arr.map((num) => {
      //     return num*2;
      // });
      // console.log(numbers);
