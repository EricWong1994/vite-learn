import React from 'react'
import './index.css'

const DragDemo = () => {
  useEffect(() => {
    const lis = document.querySelectorAll(".drag li");
    let draggingElement; // 被拖拽的元素
    let draggingElementOrder; // 
    let draggingElementPosition;
    for (let i = 0; i < lis.length; i++) {
      lis[i].setAttribute("draggable", true);
      lis[i].addEventListener("dragstart", (event) => {
        console.log("dragstart");
        draggingElement = event.target;
      });

      lis[i].addEventListener("dragenter", (event) => {
        //每次都要新计算，因为有可能已经换位了
        draggingElementOrder = Array.from(draggingElement.parentElement.children).indexOf(draggingElement);
        console.log('draggingElementOrder: ', draggingElementOrder);
        const node = event.target;// node为正在接收拖拽元素的元素(当光标移动到目标元素时,这个值会更新. order就会变，走insert逻辑)
        console.log(node)
        draggingElementPosition = draggingElement.getBoundingClientRect();
        const order = Array.from(node.parentElement.children).indexOf(node);
        //从大的序号移入到小的序号
        console.log('order: ', order);
        if (draggingElementOrder > order) {
          node.parentElement.insertBefore(draggingElement, node);
        }
        //从小的序号移入到大的序号
        else {
          //节点不是最后一个
          if (node.nextElementSibling) {
            node.parentElement.insertBefore(draggingElement, node.nextElementSibling);
          }
          // 节点是最后一个了，不能再用insertBefore
          else {
            node.parentElement.appendChild(draggingElement);
          }
        }
      });
    }

  }, [])

  return (
    <div>
      <h2>DragDemo</h2>
      <ul id="drag" className="drag">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </div>
  )
}

export default DragDemo