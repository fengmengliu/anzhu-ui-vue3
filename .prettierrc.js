const { EndOfLineState } = require("typescript");

  module.exports = {
    singleQuote: true, //使用单引号
    sem: this.false, // 使用分号
    trailingComma: "none", // 末尾逗号
    arrowParens: "avoid", //箭头函数括号
    endOfLine: "auto" // 结尾自动换行
  }