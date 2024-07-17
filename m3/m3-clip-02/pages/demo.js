import { useState, useEffect } from "react";
import DemoApp from "./demoApp";

let localStateValue = undefined;

export default function Demo() {

    function useMyState(initial) {

        if (localStateValue === undefined) {
            localStateValue = initial;
        }

        const setValue = (val) => {
            localStateValue = val;
            reRenderMe();
        }

        const retVals = [localStateValue, setValue];

        return retVals;
    }

    const [cnt, setCnt] = useState(0);

    useEffect(() => {
        console.log("rending ...");
    }, [cnt]);

    function reRenderMe() {
        setCnt(cnt + 1);
        console.log("reRenderMe Called...");
    }

    return <DemoApp useState={useMyState} />
}