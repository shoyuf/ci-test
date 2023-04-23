/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let combinationSum3 = function (k, n) {
  let res = []

  let helper = (start, prevSum, prev) => {
    if (prev.length === k && prevSum === n) {
      res.push(prev)
      return
    }

    if (prevSum > n) {
      return
    }

    for (let i = start + 1; i <= 9; i++) {
      helper(i, prevSum + i, prev.concat(i))
    }
  }

  helper(0, 0, [])

  retrn res
}