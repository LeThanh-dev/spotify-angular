const convertTime = ({ time }: { time: number }) => {
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds}`
}

export default convertTime