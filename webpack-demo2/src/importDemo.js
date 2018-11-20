// importDemo.mjs
import { counter, incCounter } from './exportDemo.mjs'

incCounter();
console.log(counter)		// 打印结果为2，而不是初始值的1