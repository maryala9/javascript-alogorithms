//considering all positive integers
var twoSum = function(nums, target) {
  var accum = [];
	for (var i=0; i< nums.length; i++) {
		secondElement = target-nums[i];
		if(nums.indexOf(secondElement,i+1) != -1) {
			accum.push(i);
			accum.push(nums.lastIndexOf(secondElement));
			return accum;
		}
	}
};


