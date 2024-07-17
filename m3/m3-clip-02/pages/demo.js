import { useState, useEffect } from "react";
import DemoApp from "./demoApp";

const localStateValue = [];
let localStateValueIndex = 0;

export default function Demo() {

    function useMyState(initial) {
        const localStateValueIndexLocal = localStateValueIndex;

        if (localStateValue[localStateValueIndexLocal] === undefined) {
            localStateValue[localStateValueIndexLocal] = initial;
        }

        const setValue = (val) => {
            localStateValue[localStateValueIndexLocal] = val;
            reRenderMe();
        }
        localStateValueIndex++;

        const retVals = [localStateValue[localStateValueIndexLocal], setValue];

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

    localStateValueIndex=0;

    return <DemoApp useState={useMyState} />
}