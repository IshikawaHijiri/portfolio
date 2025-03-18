import Image from "next/image";

interface LinkInfoInterface {
    name: string,
    link: string,
    image: string,
}

const linkInfos: LinkInfoInterface[] = [
    {
        name: "Qiita",
        link: "",
        image: "qiita.png",
    },
    {
        name: "Github",
        link: "",
        image: "github.png",
    },
    {
        name: "X",
        link: "",
        image: "x.jpg",
    },
    {
        name: "Youtube",
        link: "",
        image: "youtube.png",
    },
];

const LinkComponent = ({ linkInfo }: { linkInfo: LinkInfoInterface }) => {
    const basepath = "./icons/"
    const imagePath = `${basepath}${linkInfo.image}`;
    //console.log(imagePath);
    const image = require(imagePath);

    return (
        <div>
            <div className="link-icon-pair">
                <Image src={image} alt={linkInfo.name} className="link-icon" />
                <a href={linkInfo.link}>{linkInfo.name}</a>
            </div>
        </div>
    )
};

const LinksComponent = () => {
    return (
        <div>
            <div className="responsive-splitter">
                <h1>Links</h1>
                <div className="texts">
                    {
                        linkInfos.map((linkInfo, index) => {
                            return (
                                <LinkComponent linkInfo={linkInfo} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default LinksComponent;