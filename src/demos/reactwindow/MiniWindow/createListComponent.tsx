
import React from 'react'

function createListComponent({
  getEstimatedTotalSize, // 估算内容高度
  getItemSize, // 每一项的高度
  getItemOffset, // 每一项的 top 值
  getStartIndexForOffset,
  getEndIndexForOffset
}) {
  return class extends React.Component {
    // 定义需要预渲染的个数
    static defaultProps = {
      overscanCount: 2, // 性能好可以多设置
      // overscanCount: 5, // 性能好可以多设置
    }

    state = {
      scrollOffset: 0, // 向上卷去的高度，就是我们说的滚动距离，scrollTop，默认 0
    }

    getRangeToRender = () => {
      const { scrollOffset } = this.state
      const { overscanCount, itemCount } = this.props
      console.log('overscanCount: ', overscanCount);
      // 索引的计算处理同样因为场景不同外部传入

      // 根据卷去高度计算开始索引
      const startIndex = getStartIndexForOffset(this.props, scrollOffset)
      // 根据开始索引计算 结束索引
      const endIndex = getEndIndexForOffset(this.props, startIndex)
      return [startIndex, endIndex]
      // 向下滚动要取最大值，向上滚动时要取最小值，需要跟索引临界值对比
      // return [Math.max(0, startIndex - overscanCount), Math.min(itemCount - 1, endIndex + overscanCount)]
    }

    // 每一项的样式
    getItemStyle = (i: number) => {
      const style = {
        position: "absolute",
        width: "100%",
        height: getItemSize(this.props),
        top: getItemOffset(this.props, i)
      };

      return style;
    }

    render() {
      console.log('render: ');
      // 这个类组件是返回的页面具体使用的那个组件，所以可以直接通过属性获取值
      const { width, height, itemCount, children: ComponentType } = this.props;
      // 我们根据上面的 dom 结构可以写出如下布局
      const containerStyle = {
        position: "relative",
        width,
        height,
        overflow: "auto",
        willChange: "transform",
      };
      const contentStyle = {
        width: '100%',
        // 预计高度
        height: getEstimatedTotalSize(this.props)
      };
      const items = []
      // 如果有列表长度，进行每一项的处理，样式待定
      if (itemCount > 0) {
        // 需要计算得出截取的索引
        const [startIndex, endIndex] = this.getRangeToRender()
        for (let i = startIndex; i <= endIndex; i++) {
          items.push(<ComponentType index={i} style={this.getItemStyle(i)} key={i} />)
        }
      }
      return <div style={containerStyle}>
        <div style={contentStyle}>{items}</div>
      </div>
    }

  }
}

export default createListComponent