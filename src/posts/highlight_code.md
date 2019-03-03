---
  title: '突出markdown代码'
  description: ''
  date: '2019-03-03'
  tags: ["markdown"]
  published: true
---

要突出显示行，可以在代码中使用以下指令之一作为注释：
* highlight-line 突出当前的路线;
* highlight-next-line 突出了下一行;
* highlight-start突出显示直到匹配的线条hightlight-end;
* highlight-range{1, 4-6} 将突出显示下一行，以及第四行，第五行和第六行。

## 示例：

```jsx
class FlavorForm extends React.Component { // highlight-line
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end

  render() {
    return (
      { /* highlight-range{1,4-9,12} */ }
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

您还可以在代码块之外指定突出显示的行。在下面的代码片段中，第1行和第4行到第6行将突出显示行。行范围解析使用

```
```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
``` end
```

与突出显示行一样，您可以通过在源代码中添加指令作为注释来控制要隐藏的行。

可用的指令是：
* hide-line 隐藏当前行;
* hide-next-line 隐藏下一行;
* hide-start隐藏线直到匹配hide-end;
* hide-range{1, 4-6} 将隐藏下一行，以及第四行，第五行和第六行。

## 内联代码块
除了受防护的代码块之外，内联代码块也将通过PrismJS传递。

如果设置了inlineCodeMarker，则还可以指定格式样式。

以下是如果inlineCodeMarker设置为›：如何使用此示例的示例：

```
这个符号“›”通过alt + 155输出
I can highlight `css›.some-class { background-color: red }` with CSS syntax.
```

这将`<code class=language-css>`仅使用（语法突出显示）文本呈现`css›.some-class { background-color: red }`

## 禁用语法突出显示
如果您需要阻止任何转义或突出显示，您可以使用该none 语言; 内部内容根本不会改变。