import React from "react";
import Default from "./layouts/default"

function FourOhFour({arrayIndex}){

    let msg = (
        <h3>Page not found.Go <a href="/breads">home</a></h3>
    )
    if(arrayIndex != null){
        msg = (
        <h3>
            The <strong>ID#{arrayIndex}</strong> does not exist. Please redirect back to the <a href="/breads">home</a> and try again!
        </h3>
        )
    }

    return <Default>{msg}</Default>
}

export default FourOhFour