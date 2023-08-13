module.exports = { 
    //param A : integer
    //return a array of array of integers
       generateMatrix : function(A){
           const ans = Array(A).fill().map(() => Array(A).fill(0));
           
           let count = 1;
           let r = 0, c = 0;
           while (A > 1) {
               for (let i = 1; i < A; i++) {
                   ans[r][c] = count;
                   c++;
                   count++;
               }
               for (let i = 1; i < A; i++) {
                   ans[r][c] = count;
                   r++;
                   count++;
               }
               for (let i = 1; i < A; i++) {
                   ans[r][c] = count;
                   c--;
                   count++;
               }
               for (let i = 1; i < A; i++) {
                   ans[r][c] = count;
                   r--;
                   count++;
               }
               r += 1;
               c += 1;
               A -= 2;
           }
           
           if (A === 1) {
               ans[r][c] = count;
           }
           return ans;
       },
   };