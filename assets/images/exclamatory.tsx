import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={16}
      height={13}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.667 12.976h14.666L8 .31.667 12.976zm8-2H7.333V9.643h1.334v1.333zm0-2.666H7.333V5.643h1.334V8.31z"
        fill="#EA2A2A"
      />
    </Svg>
  )
}

export default SvgComponent
