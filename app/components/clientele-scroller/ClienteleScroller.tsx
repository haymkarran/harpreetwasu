'use client'
import React, { useState } from "react";
import ClienteleScrollerApi from "./clienteleScrollerApi";
import ClienteleScrollerChildContainer from "./ClienteleScrollerChildContainer";
import './ClienteleScrollerCSS.css';

interface ClienteleScrollerProps {
    scrollerApiId: number;
    slideDirection: string;
}

const ClienteleScroller: React.FC<ClienteleScrollerProps> = ({scrollerApiId, slideDirection}) => {
    const [clienteleScrollerData] = useState(ClienteleScrollerApi);

    return (
        <>
            <div className="clientele-carousal-parent-container w-full py-4">
                    <div
                        className={`clientele-horizontal-track ${slideDirection}`}
                        id="community_pics_file"
                    >
                        <ClienteleScrollerChildContainer clienteleScrollerData={clienteleScrollerData} scrollerApiId={scrollerApiId} />
                    </div>
             </div>
        </>
    );
};

export default ClienteleScroller;
