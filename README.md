# interview
this repo contains coding-challanges for job-interviews.
See also article [70 JavaScript Interview Questions](https://dev.to/macmacky/70-javascript-interview-questions-5gfi)


## Max N of array
Return the N biggest values of an array. The code should be as efficient as possible and the maintainability should be ok.

## Calculator
Build a calculator in html together with js. Don't use external libraries.

## Group sum
Imageine you have an array with ranom numbers (int or float) in it. This array has to be split (but not resort) in five groups. The order within the group has to stay the same. The sum of each group should be as similar as possible to the other groups.

```sh
exampleInnput =  1, 1, 2,   3, 2,   3, 1,   2, 2,   2, 1, 1;
result        = [1, 1, 2], [3, 2], [3, 1], [2, 2], [2, 1, 1];


## check 
sum([1, 1, 2]) = 4 => error: 0 
sum([3, 2])    = 5 => error: 1
sum([3, 1])    = 4 => error: 0 
sum([2, 2])    = 4 => error: 0 
sum([2, 1, 1]  = 4 => error: 0

Total Error                  1


# not correct answer
# because error rate is to hight

sum([1, 1])    = 2 => error: 2 
sum([2, 3])    = 5 => error: 1
sum([2, 3])    = 5 => error: 1 
sum([1, 2, 2]) = 4 => error: 0 
sum([2, 1, 1]  = 4 => error: 0

Total Error                  4



```
