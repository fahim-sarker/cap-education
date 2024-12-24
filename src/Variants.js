export const fadein = (direction, deLay) => {
    return{
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        },
        show : {
            y : 0,
            x : 0,
            opacity : 1,
            transition : {
                type : 'tween',
                durattion : 1.5,
                delay : deLay,
                easeInOut: [0.42, 0, 0.58, 1]
            }
        }
    }
}