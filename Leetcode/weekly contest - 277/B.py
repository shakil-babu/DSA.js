class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        n,p = [], []
        for item in nums:
            if item > 0 :
                p.append(item)
            else:
                n.append(item)
        
        res = []
        for i in range(0,len(p)):
            res.append(p[i])
            res.append(n[i])
            
        return res