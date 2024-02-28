import Link from 'next/link';

interface MegaMenuDiscoverProps {
    discoverMenuData: {
        id: number;
        link: string;
        image: string;
        title: string;
    }[];
}

const MegaMenuDiscover: React.FC<MegaMenuDiscoverProps> = ({ discoverMenuData }) => {
    return (
        <>
            {discoverMenuData.map((currentElement) => (
                <div className="list-item text-center" key={currentElement.id}>
                    <Link href={currentElement.link}>
                        <img src={currentElement.image} alt="new Product" />
                        <h4 className="title">{currentElement.title}</h4>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default MegaMenuDiscover;
