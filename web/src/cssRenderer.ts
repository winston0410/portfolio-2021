import { create, prefixer, virtual, keyframes, hydration } from "glory"

const glory = create({})

virtual(glory);
prefixer(glory)
keyframes(glory)
hydration(glory)

export default glory
