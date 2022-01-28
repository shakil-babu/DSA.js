class Solution:
    def findLonely(self, nums: List[int]) -> List[int]:
        map = {}
        for item in nums:
            if map.get(item):
                map[item] += 1
            else :
                map[item] = 1

        result = []
        for item in map:
            if map[item] == 1 :
                if map.get(item - 1) or map.get(item + 1) :
                    continue
                else :
                    result.append(item)

        return result