import React from "react"
import { Timeline } from 'react-twitter-widgets';


const TwitterWidget = () => {
    return (
        <div className="m-3">
            <h6 className="text-secondary text-uppercase">Connect on Twitter</h6>
            <Timeline 
                dataSource={{
                    sourceType: "profile",
                    screenName: "20thirdPro",
                }}
                options={{
                    height: '400'
                }}
            />
        </div>
    )
}

export default TwitterWidget