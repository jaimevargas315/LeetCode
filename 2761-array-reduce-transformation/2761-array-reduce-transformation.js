/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length===0)
    return init

    if(nums.length>0){
        let answer = init;
        for(i=0;i<nums.length;i++)
        {
            answer=fn(answer,nums[i]);
        }
       return answer;
    }
};