//  Action for setting the elem's height dynamically to the elem with the greatest height
//
import type { Action } from 'svelte-action-type';
import { writable, get } from 'svelte/store';

const maxHeightStore = writable(0);

const useMaxHeight: Action<HTMLElement, boolean> = (node, enabled) => {
    if(!enabled) return
    
    const ro = new ResizeObserver(([entry]) => {
        const { height } = entry.contentRect 

        maxHeightStore.update((prev) => {
            return (height > prev) ? Math.ceil(height) : prev
        })

        node.style.minHeight = `${get(maxHeightStore)}px`
    })

    ro.observe(node)
    
	return {
        destroy(){
            ro.disconnect()
        }
	};
};

export default useMaxHeight;
