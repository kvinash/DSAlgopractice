let arrayfactor = (A) => {
// javascript Code For Efficient program to print
// the number of factors of n numbers
 
    var MAX = 1000001;
    var factor = [];
 
    // function to generate all prime
    // factors of numbers from 1 to 10^6
    function generatePrimeFactors() {
        factor[1] = 1;
 
        // Initializes all the positions with
        // their value.
        for (i = 2; i < MAX; i++)
            factor[i] = i;
 
        // Initializes all multiples of 2 with 2
        for (i = 4; i < MAX; i += 2)
            factor[i] = 2;
 
        // A modified version of Sieve of
        // Eratosthenes to store the
        // smallest prime factor that
        // divides every number.
        for (i = 3; i * i < MAX; i++)
        {
         
            // check if it has no prime factor.
            if (factor[i] == i)
            {
             
                // Initializes of j starting from i*i
                for (j = i * i; j < MAX; j += i)
                {
                 
                    // if it has no prime factor
                    // before, then stores the
                    // smallest prime divisor
                    if (factor[j] == j)
                        factor[j] = i;
                }
            }
        }
    }
 
    // function to calculate number of factors
    function calculateNoOFactors(n)
    {
        if (n == 1)
            return 1;
 
        var ans = 1;
 
        // stores the smallest prime number
        // that divides n
        var dup = factor[n];
 
        // stores the count of number of times
        // a prime number divides n.
        var c = 1;
 
        // reduces to the next number after prime
        // factorization of n
        var j = n / factor[n];
 
        // false when prime factorization is done
        while (j != 1)
        {
         
            // if the same prime number is dividing n,
            // then we increase the count
            if (factor[j] == dup)
                c += 1;
 
            /*
             * if its a new prime factor that is factorizing n, then we again set c=1 and
             * change dup to the new prime factor, and apply the formula explained above.
             */
            else
            {
                dup = factor[j];
                ans = ans * (c + 1);
                c = 1;
            }
 
            // prime factorizes a number
            j = j / factor[j];
        }
 
        // for the last prime factor
        ans = ans * (c + 1);
        return ans;
    }
 
    /* Driver program to test above function */
     
        // array to store prime factors
        factor = Array(MAX).fill(0);
        factor[0] = 0;
 
        // generate prime factors of number
        // upto 10^6
        generatePrimeFactors();
 
        var a = A
        var q = a.length;
        let finalArray = []
        for (i = 0; i < q; i++){
          finalArray.push(calculateNoOFactors(a[i]));
        }
        return finalArray
            
 
}


console.log(arrayfactor([8, 9, 10]))