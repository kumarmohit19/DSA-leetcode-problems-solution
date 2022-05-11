const productExceptSelf = (nums) => {
  let output = nums.map((n) => 1);

  let product = 1;

  //Multiply from left
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    output[i] = output[i] * product;
    product = product * num;
  }

  product = 1;
  //Multiply from right
  for (let j = nums.length - 1; j >= 0; j--) {
    const num = nums[j];

    output[j] = output[j] * product;
    product = product * num;
  }

  return output;
};

module.exports = productExceptSelf;
