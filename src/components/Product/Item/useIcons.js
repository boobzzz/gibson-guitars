import { useState } from 'react';
import { isEmpty } from 'lodash';

export const useIcons = (item, pinnedItem, pinItem, removeItem, ref) => {
    const [ isPinnedMsg, setIsPinnedMsg ] = useState(false)

    const reset3D = () => {
        ref.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
        ref.current.children[0].children[0].children[1].children[0].style.transform = 'translateZ(0px)'
        ref.current.children[0].children[0].children[1].children[1].style.transform = 'translateZ(0px)'
        ref.current.children[0].children[0].children[1].children[2].style.transform = 'translateZ(0px)'
    }

    const pinHandler = (e) => {
        e.stopPropagation()
        
        if (item.pinned) pinItem(item)

        if (!item.pinned && isEmpty(pinnedItem)) pinItem(item)
        
        if (!item.pinned && !isEmpty(pinnedItem)) {
            setIsPinnedMsg(true)
            setTimeout(() => setIsPinnedMsg(false), 3000)
        }

        reset3D()
    }

    const removeHandler = (e) => {
        e.stopPropagation()

        removeItem(item)
    }

    return { isPinnedMsg, pinHandler, removeHandler }
}