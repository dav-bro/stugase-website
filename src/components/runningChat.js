import React, { useState, useEffect } from "react";
import Button from "./button";


export default ({ count, setCount }) => {



    return(
        <Button onClick={() => setCount(count + 1)}> + 1</Button>
    )

}