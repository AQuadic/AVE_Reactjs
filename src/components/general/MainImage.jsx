const MainImage = () => {
    return (
        <div className="relative z-10 mt-5">
            <img src="/dist/assets/MainImage.png" className="w-full" alt="Main Image" />
            <img src="/dist/assets/redLine.png" className="w-full absolute bottom-[6%] left-0 -z-10" alt="Red Line" />
        </div>
    )
}

export default MainImage
