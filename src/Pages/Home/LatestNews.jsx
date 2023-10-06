import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div>
            <Marquee className="font-semibold" speed={150}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default LatestNews;