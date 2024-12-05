/* Given the array Numbers that consists of X integers and always in a non - decreasing order.
Find if there’s any “most - prominent” number, being this number the number that ocurrs more 
than half the length of the array.
Your implementation should return -1 if there is no “most - prominent” integer 

Assume that:        
X is an integer within the range [1..100,000];       
each element of array Numbers is an integer within the range [0..2,147,483,647];        
array Numbers is sorted in non-decreasing order.*/

// SOLUTION
/* This is a two step process.

    NOTE : This Method only works when we are given that majority element do exist in the array, 
    otherwise this method won’t work, as in the problem definition we said that majority element 
    may or may not exist but for applying this approach you can assume that majority element 
    do exist in the given input array

The first step gives the element that may be majority element in the array.
If there is a majority element in an array, then this step will definitely return majority element, 
otherwise it will return candidate for majority element.
    Check if the element obtained from above step is majority element.
    This step is necessary as we are not always sure that element return by first step is majority element.

1. Finding a Candidate:
The algorithm for first phase that works in O(n) is known as Moore’s Voting Algorithm.
Basic idea of the algorithm is that if we cancel out each occurrence of an element e with 
all the other elements that are different from e then e will exist till end if it is a majority element.

In the second phase we need to check if the candidate is really a majority element. 
Second phase is simple and can be easily done in O(n). We just need to check if count of the candidate 
element is greater than n/2.
*/

// worst case complexity: O(n)
const majorityElement = numbers => {

  let count = 0;
  let i;
  let majorityElement;

  for (i = 0; i < numbers.length; i++) {
    if (count == 0) majorityElement = numbers[i];
    if (numbers[i] == majorityElement) count++;
    else count--;
  }
  count = 0;
  for (i = 0; i < numbers.length; i++)
    if (numbers[i] == majorityElement) count++;
    if (count > numbers.length / 2) return majorityElement;
  return -1;
};

module.exports = majorityElement;
