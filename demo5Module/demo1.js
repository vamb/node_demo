/**
 * 模块化：遵守固定的规则，把一个大文件拆成独立并相互依赖的多个小模块
 *
 * 把代码进行模块化拆分的好处：
 * 1.提高了代码的复用性
 * 2.提高了代码的可维护性
 * 3.可以实现按需加载
 *
 * nodejs 中根据来源划分，模块分为了3大类：
 * 1. 内置模块（由 nodejs 官方提供，例如 fs、path、http等）
 * 2. 自定义模块（用户创建的 *.js 文件，都是自定义模块）
 * 3. 第三方模块（引用的第三方组件）
 *
 * 使用 require 去加载代码的时候，会执行里面的代码
 *
 */

const path = require('path')

const fPath = path.join(__dirname, '/res', 'customer.js')

const customerJS = require(fPath)
