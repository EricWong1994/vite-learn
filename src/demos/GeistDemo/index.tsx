import React from 'react'
import { Button } from '@geist-ui/core';

export default function GeistDemoIndex() {
  return (
    <div>
      {/* 按钮默认是14px,        最小12px */}

      {/* font-size: calc(0.65625 * 16px);  12px */}
      <Button scale={0.5}>Scale 0.5</Button>
      {/* font-size: calc(0.875 * 16px);  14px */}
      <Button>Default</Button>

      <Button scale={2}>Scale 2</Button>

      {/* font-size: calc(1.3125 * 16px);  21px */}
      <Button width="300px" font={1.5}>
        Full Button
      </Button>

      {/* font-size: calc(0.875 * 2rem); 即28px */}
      <Button unit="2rem" >2rem</Button>
    </div>
  )
}
