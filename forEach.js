      function cb(val){
        val = val + " bruce";
        console.log(val);
      }

      function foreachFunc(students, cb){

        for(let i=0; i < students.length; i++){
          cb(students[i]);
        }
      }

      let students = ['John', 'Sara', 'Jack'];
      foreachFunc(students, cb);


      // Using in-built Map function
      //
      // let students = ['John', 'Sara', 'Jack'];
      // students.forEach(function(item){
      //   console.log(item + " bruce");
      // });
