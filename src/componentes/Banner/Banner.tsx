import './Banner.css'

interface BannerProps {
    source: string,
    alt?: string
}

const Banner = ({source, alt} : BannerProps) => {
    return (
        <header className="banner">
            <img src={source} alt={alt}/>
        </header>
    )
}

export default Banner;