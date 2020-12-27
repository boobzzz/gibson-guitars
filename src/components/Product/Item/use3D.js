export const use3D = (ref) => {
    const mouseMoveHandler = (e) => {
        const { offsetWidth, offsetHeight } = ref.current
        let x = e.clientX - ref.current.getBoundingClientRect().left
        let y = e.clientY - ref.current.getBoundingClientRect().top
        let xAxis = (offsetWidth / 2 - x) / 15
        let yAxis = (offsetHeight / 2 - y) / 15
        
        ref.current.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
    }

    const animateIn = () => {
        ref.current.style.transition = 'none'
        ref.current.children[0].children[0].children[0].style.transform = 'translateZ(130px)'
        ref.current.children[0].children[0].children[1].style.transform = 'translateZ(100px) rotateZ(-25deg)'
        ref.current.children[0].children[0].children[3].style.transform = 'translateZ(100px)'
        ref.current.children[0].children[1].children[0].style.transform = 'translateZ(100px)'
        ref.current.children[0].children[1].children[1].style.transform = 'translateZ(130px)'
        ref.current.children[0].children[1].children[2].style.transform = 'translateZ(100px)'
    }

    const animateOut = () => {
        ref.current.style.transition = 'all 0.5s ease'
        ref.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
        ref.current.children[0].children[0].children[0].style.transform = 'translateZ(0px)'
        ref.current.children[0].children[0].children[1].style.transform = 'translateZ(0px)'
        ref.current.children[0].children[0].children[3].style.transform = 'translateZ(0px)'
        ref.current.children[0].children[1].children[0].style.transform = 'translateZ(0px)'
        ref.current.children[0].children[1].children[1].style.transform = 'translateZ(0px)'
        ref.current.children[0].children[1].children[2].style.transform = 'translateZ(0px)'
    }

    return { mouseMoveHandler, animateIn, animateOut }
}