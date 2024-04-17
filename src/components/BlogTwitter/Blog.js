import React from "react";
import { Timeline } from 'react-twitter-widgets'

function Blog() {
    
  return (
    <div>
      <Timeline dataSource={{ sourceType: "profile", screenName: "Inst_Santa_Ana" }}  options={{height: "400", id: "profile:Inst_Santa_Ana" }}/>
    </div>
  )
}

export default Blog