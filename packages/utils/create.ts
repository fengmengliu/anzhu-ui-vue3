// bem block 代码块  elment 元素  modifier 装饰 state状态
// z-button 最外层的盒子
// z-button__element 最外层代码块里的某个元素
// z-button__element--disabled  // 默认的样式
// is-checked is-enabled // 动态添加的

// :class=[bem.b('button')]

// 前缀名字 z-button-box
function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }
  if (modifier) {
    prefixName += `--${modifier}`;
  }
  return prefixName;
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
  const e = (element: string = "") =>
    element ? _bem(prefixName, "", element, "") : "";
  const m = (modifier: string = "") =>
    modifier ? _bem(prefixName, "", "", modifier) : "";
  const be = (blockSuffix: string = "", element: string = "") =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
  const bm = (blockSuffix: string = "", modifier: string = "") =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, "", modifier) : "";
  const em = (element: string = "", modifier: string = "") =>
    element && modifier ? _bem(prefixName, "", element, modifier) : "";
  const bem = (
    blockSuffix: string = "",
    element: string = "",
    modifier: string = ""
  ) =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : "";

  const is = (name: string, state: string) => (state ? `is-${name}` : "")  

  return {
    b,
    e,
    m,
    bm,
    em,
    bem,
    is
  };
}

// 添加前缀
export function createNamespace(name: string) {
  const prefixName = `anzhu-${name}`;
  return createBEM(prefixName);
}
