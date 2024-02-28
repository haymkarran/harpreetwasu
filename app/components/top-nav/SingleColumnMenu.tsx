import Link from 'next/link';

interface SingleColumnMenuProps {
    menuData: {
        id: number;
        link: string;
        title: string;
        description: string;
    }[];
}

const SingleColumnMenu: React.FC<SingleColumnMenuProps> = ({ menuData }) => {
    return (
        <>
            {menuData && menuData.map((currentElement) => (
                <li key={currentElement.id}>
                    <Link href={currentElement.link}>
                        <div className="nav-item-title">{currentElement.title}<span className="right-animate"> &rarr;</span></div><br />
                        <div className="nav-item-description">{currentElement.description}</div>
                    </Link>
                </li>
            ))}
        </>
    );
};

export default SingleColumnMenu;
