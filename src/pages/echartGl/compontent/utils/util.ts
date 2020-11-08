/*
 * @Author: your name
 * @Date: 2020-11-04 09:40:35
 * @LastEditTime: 2020-11-05 16:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fxts\src\pages\riskMonitor\compontent\utils\util.ts
 */
function fullClose(n: number, m: number) {
  var result = Math.random() * (m + 1 - n) + n;
  while (result > m) {
    result = Math.random() * (m + 1 - n) + n;
  }
  return result;
}

export function randomTest(
  cnt: number,
  start: number,
  end: number,
  start1: number,
  end1: number,
) {
  const arr = [];
  for (let i = 0; i < cnt; i += 1) {
    const result = fullClose(start, end);
    const result1 = fullClose(start1, end1);
    const item = [];
    item.push(result, result1, 0);
    arr.push({
      name: '',
      value: item,
      itemStyle: {
        color: '#FFFF8A',
        opacity: Math.random() + 0.5,
      },
    });
  }
  return arr;
}
