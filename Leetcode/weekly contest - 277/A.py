class Solution:
    def countElements(self, nums: List[int]) -> int:
        mn = min(nums)
        mx = max(nums)
        counter = 0
        
        for item in nums :
            if item > mn and item < mx : 
                counter += 1
                
        return counter