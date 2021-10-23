import { atom, selector } from "recoil";

export const counterState = atom({
    key:"counterState",
    default: 0
});

export const multipliedCounterSelector = selector({
    key:"multipliedCounterSelector",
    get: ({get}) => {
        const counter = get(counterState);
        return counter * 10;
    }
})
