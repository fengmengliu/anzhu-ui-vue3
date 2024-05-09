import { RangeOptions, VirtualOptions, updateType } from './props';

export function initVirtual(param: VirtualOptions, update: updateType) {
  let offsetValue = 0; // 没有滚动前的偏移量
  const range: RangeOptions = {
    start: 0,
    end: 0,
    padFront: 0,
    padBehind: 0
  };

  function getPadFront() {
    return param.estimateSize * range.start;
  }

  function getPadBehind() {
    const lastIndex = param.uniqueIds.length - 1;
    return (lastIndex - range.end) * param.estimateSize;
  }

  // 更新range
  function updateRange(start: number, end: number) {
    range.start = start;
    range.end = end;
    range.padFront = getPadFront();
    range.padBehind = getPadBehind();
    update({ ...range });
  }

  function checkRange(start: number, end: number) {
    const total = param.uniqueIds.length; // 所有的数据
    const keeps = param.keeps;
    // 当展示的条数小于阈值时，重新设置start和end
    if (total < keeps) {
      start = 0;
      end = total - 1;
      // 最后滑动到了 100 条 70 - 100
      // 当滚动到最后的时候，要将最后一个阈值内的start进行调整
    } else if (end - start < keeps - 1) {
      start = end - keeps + 1;
    }
    updateRange(start, end);
  }

  // 根据划过的距离计算划过的个数， 比如划过个数为12.5，取整就是12
  function handleScrollCount() {
    return Math.floor(offsetValue / param.estimateSize);
  }

  function getEndByStart(start: number) {
    const computedEnd = start + param.keeps - 1;
    const end = Math.min(computedEnd, param.uniqueIds.length - 1);
    return end;
  }

  function handleFrontScroll() {
    // 向上划，核心就是确定要不要更新start
    const scrollCount = handleScrollCount();
    if (scrollCount > range.start) {
      // 从第30个开始展示，滑到了35个
      // 开始是0, 划到了1， start是不用改变的
      return;
    }
    // 划过了8个，但开始是5, 缓存区是10个
    const start = Math.max(scrollCount - param.buffer, 0);
    checkRange(start, getEndByStart(start));
  }
  function handleBehindScroll() {
    const scrollCount = handleScrollCount();
    if (scrollCount < range.start + param.buffer) {
      // 向下加载的时候看一下是否在缓存区中
      return;
    }
    checkRange(scrollCount, getEndByStart(scrollCount));
  }

  function handleScroll(offset: number) {
    // 先判断是向上滚动还是向下滚动
    const direction = offset < offsetValue ? 'FRONT' : 'BEHIND';
    offsetValue = offset;
    if (direction === 'FRONT') {
      handleFrontScroll();
    } else if (direction === 'BEHIND') {
      handleBehindScroll();
    }
  }

  // 0 -30 滚动到最后
  checkRange(0, param.keeps - 1);

  return { handleScroll };
}
