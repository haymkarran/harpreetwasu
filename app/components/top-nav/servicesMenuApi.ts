import cloudImage from "../../../public/assets/icons/cloud.svg"
import emailIcon from "../../../public/assets/icons/email.svg"
import officeIcon from "../../../public/assets/icons/office.svg"
import serverIcon from "../../../public/assets/icons/server.svg"
import googleToOfficeIcon from "../../../public/assets/icons/googletooffice.svg"
import activedirectory from "../../../public/assets/icons/activedirectory.svg"
import admin from "../../../public/assets/icons/admin.svg"
import customerservice from "../../../public/assets/icons/customerservice.svg"

const ServicesMenuApi = [
    {
        "id": 1,
        "CatagoryTitle": "Migrations",
        "heroImageSrc": "",
        "heroContentLink": "",
        "Contents": [
            { 
                "id": 1, 
                "imageSrc": emailIcon.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "Email migrations to Microsoft 365",
                "subText": "",
                "contentLink": "",
            },
            { 
                "id": 2, 
                "imageSrc": officeIcon.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "IMAP to Microsoft 365",
                "subText": "",
                "contentLink": "",
            },
            { 
                "id": 3, 
                "imageSrc": serverIcon.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "Exchange Server Hybrid Deployment",
                "subText": "",
                "contentLink": "",
            },
            { 
                "id": 4, 
                "imageSrc": googleToOfficeIcon.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "Google to Microsoft 365",
                "subText": "",
                "contentLink": "",
            },
        ],
    },
    {
        "id": 2,
        "CatagoryTitle": "Services by technology",
        "heroImageSrc": "",
        "heroContentLink": "",
        "Contents": [
            { 
                "id": 1, 
                "imageSrc": cloudImage.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "Cloud",
                "subText": "",
                "contentLink": "",
            },
        ],
    },
    {
        "id": 3,
        "CatagoryTitle": "Services by role",
        "heroImageSrc": "",
        "heroContentLink": "",
        "Contents": [
            { 
                "id": 1, 
                "imageSrc": admin.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "Windows System Administartor",
                "subText": "",
                "contentLink": "",
            },
            { 
                "id": 2, 
                "imageSrc": customerservice.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "Microsoft 365 Technial Support Specialist",
                "subText": "",
                "contentLink": "",
            },
            { 
                "id": 3, 
                "imageSrc": activedirectory.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "Azure Active Directory (AD)",
                "subText": "",
                "contentLink": "",
            },
            { 
                "id": 4, 
                "imageSrc": customerservice.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "Helpdesk And Service Desk IT Technician",
                "subText": "",
                "contentLink": "",
            },
            { 
                "id": 5, 
                "imageSrc": customerservice.src,
                "videoSrcImage": "",
                "imageAlt": "icon", 
                "titleText": "Customer Service Representative",
                "subText": "",
                "contentLink": "",
            },
        ],
    },
    {
        "id": 4,
        "CatagoryTitle": "Services by company",
        "heroImageSrc": "",
        "heroContentLink": "",
        "Contents": [
            { 
                "id": 1, 
                "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
                "videoSrcImage": "",
                "imageAlt": "Microsoft", 
                "titleText": "",
                "subText": "",
                "contentLink": "",
            },
            { 
                "id": 2, 
                "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
                "videoSrcImage": "",
                "imageAlt": "Google", 
                "titleText": "",
                "subText": "",
                "contentLink": "",
            },
        ],
    },
];

export default ServicesMenuApi; 