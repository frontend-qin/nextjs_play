import React from 'react'
import dynamic from 'next/dynamic'

// 异步加载
const TextDemo = dynamic(import('./../components/Text'), {
  loading: () => <p>加载loading</p>
})
export default () => {
  return (
    <div>
      <p>hello, home page</p>
      <TextDemo />
    </div>
  )
}
