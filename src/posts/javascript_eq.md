---
  title: 'JavaScript三种值比较'
  description: ''
  date: '2019-03-04'
  tags: ["JavaScript", "前端"]
  published: true
---

* 严格相等 ("triple equals" 或 "identity")，使用 === 
* 宽松相等 ("double equals") ，使用 ==
* 以及 Object.is （ECMAScript 2015/ ES6 新特性）

简而言之

* 双等号将执行类型转换
* 三等号将进行相同的比较，而不进行类型转换 (如果类型不同, 只是总会返回 false )
* Object.is的行为方式与三等号相同，但是对于NaN和-0和+0进行特殊处理，所以最后两个不相同，而Object.is（NaN，NaN）将为 true

## 严格相等 ===

全等操作符比较两个值是否相等，两个被比较的值在比较前都不进行隐式转换。如果两个被比较的值具有不同的类型，这两个值是不全等的。否则，如果两个被比较的值类型相同，值也相同，并且都不是 number 类型时，两个值全等。最后，如果两个值都是 number 类型，当两个都不是 NaN，并且数值相同，或是两个值分别为 +0 和 -0 时，两个值被认为是全等的。

```javascript
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

在日常中使用全等操作符几乎总是正确的选择。对于除了数值之外的值，全等操作符使用明确的语义进行比较：一个值只与自身全等。对于数值，全等操作符使用略加修改的语义来处理两个特殊情况：第一个情况是，浮点数 0 是不分正负的。区分 +0 和 -0 在解决一些特定的数学问题时是必要的，但是大部分情况下我们并不用关心。全等操作符认为这两个值是全等的。第二个情况是，浮点数包含了 NaN 值，用来表示某些定义不明确的数学问题的解，例如：正无穷加负无穷。全等操作符认为 NaN 与其他任何值都不全等，包括它自己。（等式 (x !== x) 成立的唯一情况是 x 的值为 NaN）

## 非严格相等 ==

相等操作符比较两个值是否相等，在比较前将两个被比较的值转换为相同类型。在转换后（等式的一边或两边都可能被转换），最终的比较方式等同于全等操作符 === 的比较方式。 相等操作符满足交换律。

相等操作符对于不同类型的值，进行的比较如下图所示：

<table>
  <tr>
    <td></td>
    <td colspan="7" style="text-align: center;">被比较值 B</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Undefined</td>
    <td>Null</td>
    <td>Number</td>
    <td>String</td>
    <td>Boolean</td>
    <td>Object</td>
  </tr>
  <tr>
    <td rowspan="6">被比较值 A</td>
    <td>Undefined</td>
    <td>true</td>
    <td>true</td>
    <td>false</td>
    <td>false</td>
    <td>false</td>
    <td>IsFalsy(B)</td>
  </tr>
  <tr>
    <td>Null</td>
    <td>true</td>
    <td>true</td>
    <td>false</td>
    <td>false</td>
    <td>false</td>
    <td>IsFalsy(B)</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>false</td>
    <td>false</td>
    <td>A === B</td>
    <td>A === ToNumber(B)</td>
    <td>A=== ToNumber(B)</td>
    <td>A=== ToPrimitive(B)</td>
  </tr>
  <tr>
    <td>String</td>
    <td>false</td>
    <td>false</td>
    <td>ToNumber(A) === B</td>
    <td>A === B</td>
    <td>ToNumber(A) === ToNumber(B)</td>
    <td>ToPrimitive(B) == A</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>false</td>
    <td>false</td>
    <td>ToNumber(A) === B</td>
    <td>ToNumber(A) === ToNumber(B)</td>
    <td>A === B</td>
    <td>ToNumber(A) == ToPrimitive(B)</td>
  </tr>
  <tr>
    <td>Object</td>
    <td>false</td>
    <td>false</td>
    <td>ToPrimitive(A) == B</td>
    <td>ToPrimitive(A) == B</td>
    <td>ToPrimitive(A) == ToNumber(B)</td>
    <td>A === B</td>
  </tr>
</table>

在上面的表格中，ToNumber(A) 尝试在比较前将参数 A 转换为数字，这与 +A（单目运算符+）的效果相同。ToPrimitive(A)通过尝试调用 A 的A.toString() 和 A.valueOf() 方法，将参数 A 转换为原始值（Primitive）。

一般而言，根据 ECMAScript 规范，所有的对象都与 undefined 和 null 不相等。但是大部分浏览器允许非常窄的一类对象（即，所有页面中的 document.all 对象），在某些情况下，充当效仿 undefined 的角色。相等操作符就是在这样的一个背景下。因此，IsFalsy(A) 方法的值为 true ，当且仅当 A 效仿 undefined。在其他所有情况下，一个对象都不会等于 undefined 或 null。

```javascript
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// both false, except in rare cases
console.log(obj == null);
console.log(obj == undefined);
```

有些开发者认为，最好永远都不要使用相等操作符。全等操作符的结果更容易预测，并且因为没有隐式转换，全等比较的操作会更快。

## 同值相等

同值相等解决了最后一个用例：确定两个值是否在任何情况下功能上是相同的。（这个用例演示了里氏替换原则的实例。）当试图对不可变（immutable）属性修改时发生出现的情况：

```javascript
// 向 Nmuber 构造函数添加一个不可变的属性 NEGATIVE_ZERO
Object.defineProperty(Number, "NEGATIVE_ZERO",
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v)
{
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

Object.defineProperty 在试图修改不可变属性时，如果这个属性确实被修改了则会抛出异常，反之什么都不会发生。例如如果 v 是 -0 ，那么没有发生任何变化，所以也不会抛出任何异常。但如果 v 是 +0 ，则会抛出异常。不可变属性和新设定的值使用 same-value 相等比较。

同值相等由 Object.is 方法提供。

## 零值相等

与同值相等类似，不过会认为 +0 与 -0 相等。

## 什么时候使用 Object.is 或是三等

总的来说，除了对待NaN的方式，Object.is唯一让人感兴趣的，是当你需要一些元编程方案时，它对待0的特殊方式，特别是关于属性描述器，即你的工作需要去镜像Object.defineProperty的一些特性时。如果你的工作不需要这些，那你应该避免使用Object.is，使用===来代替。即使你需要比较两个NaN使其结果为true，总的来说编写使用NaN 检查的特例函数(用旧版本ECMAScript的isNaN方法)也会比想出一些计算方法让Object.is不影响不同符号的0的比较更容易些。

这里是一个会区别对待-0和+0的内置方法和操作符不完全列表：

- (一元负)

  显而易见，对0一元负操作得到-0。但表达式的抽象化可能在你没有意识到得情况下导致-0延续传播。例如当考虑下例时:

  ```javascript
  let stoppingForce = obj.mass * -obj.velocity
  ```

  如果obj.velocity是0 (或计算结果为0), 一个-0就在上处产生并被赋值为stoppingForce的值.

* Math.atan2
* Math.ceil
* Math.pow
* Math.round

  即使传入的参数中没有-0，这些方法的返回值都有可能是-0。例如当用 Math.pow计算-Infinity的任何负奇指数的幂都会得到-0。详情请参见这些方法各自的文档。

* Math.floor
* Math.max
* Math.min
* Math.sin
* Math.sqrt
* Math.tan

  当传入参数中有-0时，这些方法也可能返回-0。例如， Math.min(-0, +0) 得出 -0。详情请参见这些方法各自的文档。

* ~
* <<
* >>

  这些操作符内部都使用了ToInt32算法。因为内部32位整数类型只有一个0（没有符号区别），-0的符号在反操作后并不会保留下来。例如Object.is(~~(-0), -0)和Object.is(-0 << 2 >> 2, -0) 都会得到false.

在未考虑0的符号的情况下依赖于Object.is是危险的。当然，如果本意就是区分-0和+0的话，Object.is能按照期望完成工作。