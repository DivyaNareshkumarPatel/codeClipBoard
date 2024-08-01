import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
export default function UiCursor() {
  return (
    <div>
      <AnimatedCursor
      innerSize={20}
      outerSize={20}
      color='225,225,225'
      outerAlpha={0.2}
      innerScale={2}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      // outerStyle={{
      //   mixBlendMode: 'exclusion'
      // }}
      innerStyle={{
        mixBlendMode: 'exclusion'
      }}
    />
    </div>
  )
}
