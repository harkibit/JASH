import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import "./loader.css"
function Loading(){
    const style = {
        opacity : 30 + "%",
        height : 100 + "%",
        backgroundColor : "black"
    }
    return(
        <Segment>
            <Dimmer active>
                <div class="lds-facebook"><div></div><div></div><div></div></div>
            </Dimmer>

            <div style = {style} />

        </Segment>
    )
}
export default Loading 