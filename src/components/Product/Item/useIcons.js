import { useState } from 'react';
import { isEmpty } from 'lodash';

export const useIcons = (item, pinnedItem, setItemPinned, setRemove, ref) => {
    const [ isPinnedMsg, setIsPinnedMsg ] = useState(false)

    const pinItem = (e) => {
        e.stopPropagation()
        
        if (item.pinned) setItemPinned(item)

        if (!item.pinned && isEmpty(pinnedItem)) setItemPinned(item)
        
        if (!item.pinned && !isEmpty(pinnedItem)) {
            setIsPinnedMsg(true)
            setTimeout(() => setIsPinnedMsg(false), 3000)
        }

        ref.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
        ref.current.children[0].children[0].children[0].style.transform = 'translateZ(0px)'
        ref.current.children[0].children[0].children[1].style.transform = 'translateZ(0px)'
        ref.current.children[0].children[0].children[3].style.transform = 'translateZ(0px)'
    }

    const removeItem = (e) => {
        e.stopPropagation()

        setRemove(item)
    }

    return { isPinnedMsg, pinItem, removeItem }
}