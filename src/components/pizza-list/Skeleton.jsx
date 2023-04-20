import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={487}
    viewBox="0 0 280 487"
    backgroundColor="#eceaea"
    foregroundColor="#d1d1d1"
    {...props}
  >
    <circle cx="145" cy="105" r="105" /> 
    <rect x="0" y="238" rx="0" ry="0" width="280" height="23" /> 
    <rect x="0" y="275" rx="0" ry="0" width="280" height="65" /> 
    <rect x="0" y="366" rx="0" ry="0" width="104" height="40" /> 
    <rect x="161" y="366" rx="0" ry="0" width="136" height="40" />
  </ContentLoader>
)

export default Skeleton