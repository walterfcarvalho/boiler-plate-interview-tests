export const nonDivisibleSubset = (k, s) => {
  // Write your code here
  let answer = 0;
  let arr = new Array(k).fill(0);
  s.forEach(val => {
      arr[val % k]++;
  })


  if (arr[0] > 0) answer++;
  for (let i = 1; i < k; i++) {
      if (arr[i] == 0) continue;
      if (i + i == k) answer++;
      else {
          answer += Math.max(arr[i], arr[k - i])
          arr[i] = 0;
          arr[k - i] = 0;
      }
  }
  return answer;
}