'use client'
import { useEffect } from 'react';
import './CSSheader.css'
import Link from 'next/link';
import ServicesMenuApi from "./servicesMenuApi"
import ResourcesHubMenuApi from './resourcesHubMenuApi';
import AboutMenuApi from './aboutMenuApi';
import ContactMenuApi from './contactMenuApi';
import TestimonialsMenuApi from './testimonialsMenuApi';
import svg from "../../../public/assets/logos/HARPREET WASU.svg"
import playbtn from "../../../public/assets/icons/play-btn.svg"
import harpreetImage from "../../../public/assets/images/harpreet-about.png"
import Image from 'next/image';

interface Props {}

// Types for the content of each item
interface ContentItem {
    id: number;
    imageSrc: string;
    imageAlt: string;
    titleText: string;
    subText: string;
    contentLink: string;
  }
  
  // Type for each category
  interface CategoryItem {
    id: number;
    CatagoryTitle: string;
    Contents: ContentItem[];
  }
  
  // Type for the entire API data
  type ServicesMenuApiType = CategoryItem[];

const TopNav: React.FC<Props> = () => {
    // const productsMenuData = ProductsMenuApi;
    const servicesMenuData = ServicesMenuApi;
    const resourcesHubMenuData = ResourcesHubMenuApi;
    const aboutMenuData = AboutMenuApi;
    const contactMenuData = ContactMenuApi;
    const testimonialsMenuData = TestimonialsMenuApi;

    let subMenu: HTMLDivElement | null;

    const clickedMenuMain = (e: React.MouseEvent) => {
        const menuElement = document.querySelector(".menu");
    
        if (menuElement && menuElement.classList.contains("active")) {
            const targetElement = e.target as HTMLElement;
    
            if (targetElement) {
                const hasChildren = targetElement.closest(".menu-item-has-children") as HTMLElement | null;
    
                if (hasChildren) {
                    showSubMenu(hasChildren);
                }
            }
        }
    };    

    const toggleMenu = () => {
        const menu = document.querySelector(".menu");
        const menuOverlay = document.querySelector(".menu-overlay");
        if (menu && menuOverlay) {
            menu.classList.toggle("active");
            menuOverlay.classList.toggle("active");
        }
    };

    // function showSubMenu(hasChildren: HTMLElement) {
    //     subMenu = hasChildren.querySelector(".sub-menu");
    
    //     // Assert that subMenu is not null
    //     if (subMenu !== null) {
    //         subMenu.classList.add("active");
    //         subMenu.style.animation = "slideLeft 0.5s ease forwards";
    //         const menuTitle = hasChildren.querySelector("span")?.parentNode?.childNodes[0]?.textContent;
    //         const currentMenuTitle = document.querySelector(".menu")?.querySelector(".current-menu-title");
    //         const mobileMenuHead = document.querySelector(".menu")?.querySelector(".mobile-menu-head");
    
    //         if (menuTitle && currentMenuTitle && mobileMenuHead) {
    //             currentMenuTitle.innerHTML = menuTitle;
    //             mobileMenuHead.classList.add("active");
    //         }
    //     }
    // }

    function showSubMenu(hasChildren: HTMLElement) {
        subMenu = hasChildren.querySelector(".sub-menu");
    
        if (subMenu !== null && !subMenu.classList.contains("active")) {
            subMenu.classList.add("active");
            const menuTitle = hasChildren.querySelector("span")?.parentNode?.childNodes[0]?.textContent;
            const currentMenuTitle = document.querySelector(".menu")?.querySelector(".current-menu-title");
            const mobileMenuHead = document.querySelector(".menu")?.querySelector(".mobile-menu-head");
    
            if (menuTitle && currentMenuTitle && mobileMenuHead) {
                currentMenuTitle.innerHTML = menuTitle;
                mobileMenuHead.classList.add("active");
            }
        }
    }
    
    
    // function hideSubMenu() {
    //     // Assert that subMenu is not null
    //     if (subMenu !== null) {
    //         subMenu.style.animation = "slideRight 0.5s ease forwards";
    //         setTimeout(() => {
    //             if (subMenu !== null) {
    //                 subMenu.classList.remove("active");
    //             }
    //         }, 0);
    
    //         const currentMenuTitle = document.querySelector(".menu")?.querySelector(".current-menu-title");
    //         const mobileMenuHead = document.querySelector(".menu")?.querySelector(".mobile-menu-head");
    
    //         if (currentMenuTitle && mobileMenuHead) {
    //             currentMenuTitle.innerHTML = "";
    //             mobileMenuHead.classList.remove("active");
    //         }
    //     }
    // }

    function hideSubMenu() {
        if (subMenu !== null && subMenu.classList.contains("active")) {
            subMenu.classList.remove("active");
            const currentMenuTitle = document.querySelector(".menu")?.querySelector(".current-menu-title");
            const mobileMenuHead = document.querySelector(".menu")?.querySelector(".mobile-menu-head");
    
            if (currentMenuTitle && mobileMenuHead) {
                currentMenuTitle.innerHTML = "";
                mobileMenuHead.classList.remove("active");
            }
        }
    }
    


    useEffect(() => {
        const handleResize = () => {
          if (typeof window !== 'undefined' && window.innerWidth > 991) {
            const menu = document.querySelector('.menu');
            if (menu && menu.classList.contains('active')) {
              toggleMenu();
            }
          }
        };
    
        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <>
            <header className="header antialiased" id="main_header">
            <div className="m-auto max-parent-grid-container-width">
                <div className="flex flex-row justify-between items-center">
                    <div className="header-item item-left flex-row">
                        <div className="mobile-menu-trigger" onClick={toggleMenu}><span /></div>
                        <div className="logo">
                            <Link href="/">
                            <div
                                style={{ width: 220, height: 80 }}
                                className="logo-container cursor-pointer"
                            >
                                <img className='harpreet-logo'
                                src={svg.src}
                                alt="Harpreet Wasu"
                                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                                />
                            </div>
                            </Link>
                        </div>
                    </div>
                    {/* <button
                    type="button"
                    className="membership-button cursor-pointer sm-screen-btn display-block"
                    >
                    Contact Us
                    </button> */}
                    {/* menu start here */}
                    <div className="header-item item-center">
                        <div className="menu-overlay" onClick={toggleMenu}></div>
                        <nav className="menu" onClick ={clickedMenuMain}>
                            <div className="mobile-menu-head">
                            <div className="go-back" onClick={hideSubMenu}>
                                <span className="bold">←</span>
                            </div>
                            <div className="current-menu-title" />
                            <div className="mobile-menu-close" onClick={toggleMenu}>×</div>
                            </div>
                            <ul className="menu-main smLaptop:gap-8 min1367px:gap-10 max1279px:gap-2">
                            {/* <li className="menu-item-has-no-children" style={{ marginTop: 10 }}>
                                <Link to="/">Home</Link>
                            </li> */}
                            <li className="menu-item-has-children">
                                <a href="#">
                                Services <span className="menu-nav-arrow bold">↓</span>
                                </a>
                                <div className="sub-menu p-0.5 min-w-fit rounded-2xl grid m-auto services-menu-nav min1280px:divide-x max1279px:divide-y grid-cols-4 divide-gray-300 dark:divide-gray-800 max-parent-grid-container-width">
                                    {servicesMenuData && servicesMenuData.map((currentElement) => (
                                        <ul className='' key={currentElement.id}>
                                            <p className="text-xl p-6 font-bold h-16">{currentElement.CatagoryTitle}</p>
                                            {currentElement.heroImageSrc &&
                                                <Link href={currentElement.heroContentLink}>
                                                    <div className='m-auto w-11/12 mb-2 rounded-md overflow-hidden h-52 bg-gray-200 dark:bg-gray-900'>
                                                        <img className='w-full h-full object-contain' src={currentElement.heroImageSrc} alt='' />
                                                    </div>
                                                </Link>
                                            }

                                            {currentElement.Contents && currentElement.Contents.map((contentsData) => (
                                                <li className='p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 min710px:m-2 rounded-lg submenu-nav-item' key={contentsData.id}>
                                                    <Link href={contentsData.contentLink} target="_blank">
                                                    {contentsData.titleText ? (
                                                        <div className='flex flex-row gap-x-4 items-start'>
                                                            {contentsData.imageSrc && (
                                                                <div className='grid overflow-hidden rounded-md w-16 h-16 bg-gray-200 border border-gray-200 dark:bg-gray-900 dark:border-gray-800 imageSrc-container'>
                                                                    {contentsData.imageSrc && <img className='place-self-center w-fit h-fit imageSrc' src={contentsData.imageSrc} alt='' />}
                                                                </div>
                                                            )}
                                                            {contentsData.videoSrcImage && (
                                                                <div className='flex-none overflow-hidden rounded-md w-32 h-20 bg-gray-200 dark:bg-gray-900 relative border border-gray-200 dark:bg-gray-900 dark:border-gray-800'>
                                                                    {contentsData.videoSrcImage && 
                                                                        <img className='w-full h-full object-cover' src={contentsData.videoSrcImage as string} alt='' />
                                                                    }
                                                                    <img src={playbtn.src} className='w-full h-full object-contain playButton absolute'></img>
                                                                </div>
                                                            )}
                                                            <div className=''>
                                                                <div className="nav-item-title text-base pb-2">
                                                                    {contentsData.titleText}
                                                                </div>
                                                                {contentsData.subText && <div className="nav-item-description text-sm opacity-60 pb-2">{contentsData.subText}
                                                                </div>}
                                                                <span className="right-animate">{contentsData.titleText && `→`}</span>
                                                            </div>
                                                        </div>
                                                        ) : (
                                                        <div className='grid grid-cols-1 gap-2'>
                                                            <div className='flex-none rounded-md w-full h-40 bg-gray-200 dark:bg-gray-900 imageSrc-container'>
                                                            {contentsData.imageSrc && <img className='w-full h-full p-4 object-contain scale-75' src={contentsData.imageSrc} alt='' />}
                                                            </div>
                                                        </div>
                                                        )
                                                    }
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div> 
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">
                                Resource Hub <span className="menu-nav-arrow bold">↓</span>
                                </a>
                                <div className="sub-menu max-h-64 overflow-y-auto p-0.5 min-w-fit rounded-2xl grid m-auto services-menu-nav min1280px:divide-x max1279px:divide-y grid-cols-4 divide-gray-300 dark:divide-gray-800 max-parent-grid-container-width">
                                    {resourcesHubMenuData && resourcesHubMenuData.map((currentElement) => (
                                        <ul className='' key={currentElement.id}>
                                            <p className="text-xl p-6 font-bold h-16">{currentElement.CatagoryTitle}</p>
                                            {currentElement.heroImageSrc && 
                                                <Link href={currentElement.heroContentLink}>
                                                    <div className='m-auto w-11/12 mb-2 rounded-md overflow-hidden h-52 bg-gray-200 dark:bg-gray-900'>
                                                        <img className='w-full h-full object-contain scale-110 hover:scale-125' src={currentElement.heroImageSrc} alt='' />
                                                    </div>
                                                </Link>
                                            }
                                            {currentElement.Contents && currentElement.Contents.map((contentsData) => (
                                                <li className='p-4 active:font-bold hover:bg-slate-100 dark:hover:bg-neutral-900 min710px:m-2 rounded-lg submenu-nav-item' key={contentsData.id}>
                                                    {/* {contentsData.heroImageSrc &&
                                                        <div className='grid grid-cols-1 gap-2'>
                                                        <div className='flex-none rounded-md w-full h-40 bg-gray-200 dark:bg-gray-900'>
                                                        {contentsData.heroImageSrc && <img className='w-full h-full p-4 object-contain' src={contentsData.heroImageSrc} alt='' />}
                                                        </div>
                                                    </div>
                                                    } */}
                                                    <Link href={contentsData.contentLink} target="_blank">
                                                    {contentsData.titleText ? (
                                                        <div className='flex flex-row gap-x-4 items-start'>
                                                            {contentsData.imageSrc && (
                                                                <div className='grid overflow-hidden rounded-md w-16 h-16 bg-gray-200 border border-gray-200 dark:bg-gray-900 dark:border-gray-800 imageSrc-container'>
                                                                    {contentsData.imageSrc && <img className='place-self-center w-fit h-fit imageSrc' src={contentsData.imageSrc} alt='' />}
                                                                </div>
                                                            )}
                                                            {contentsData.videoSrcImage && (
                                                                <div className='flex-none overflow-hidden rounded-md w-32 h-20 bg-gray-200 dark:bg-gray-900 relative border border-gray-200 dark:bg-gray-900 dark:border-gray-800'>
                                                                    {contentsData.videoSrcImage && 
                                                                        <img className='w-full h-full object-cover' src={contentsData.videoSrcImage as string} alt='' />
                                                                    }
                                                                    <img src={playbtn.src} className='w-full h-full object-contain playButton absolute'></img>
                                                                </div>
                                                            )}
                                                            <div className=''>
                                                                <div className="nav-item-title text-base pb-2">
                                                                    {contentsData.titleText}
                                                                </div>
                                                                {contentsData.subText && <div className="nav-item-description text-sm opacity-60 pb-2">{contentsData.subText}
                                                                </div>}
                                                                <span className="right-animate">{contentsData.titleText && `→`}</span>
                                                            </div>
                                                        </div>
                                                        ) : (
                                                        <div className='grid grid-cols-1 gap-2'>
                                                            <div className='flex-none rounded-md w-full h-40 bg-gray-200 dark:bg-gray-900'>
                                                            {contentsData.imageSrc && <img className='w-full h-full p-4 object-contain' src={contentsData.imageSrc} alt='' />}
                                                            </div>
                                                        </div>
                                                        )
                                                    }
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div> 
                            </li>
                            <li className="menu-item-has-children !max1279px:hidden">
                                <a href="#">
                                Testimonials <span className="menu-nav-arrow bold">↓</span>
                                </a>
                                <div className="sub-menu max-h-64 overflow-y-auto p-0.5 min-w-fit rounded-2xl grid m-auto services-menu-nav min1280px:divide-x max1279px:divide-y grid-cols-2 divide-gray-300 dark:divide-gray-900 max-parent-grid-container-width">
                                    {testimonialsMenuData && testimonialsMenuData.map((currentElement) => (
                                        <ul className='' key={currentElement.id}>
                                            {currentElement.CatagoryTitle && <p className="text-xl p-6 font-bold h-14">{currentElement.CatagoryTitle}</p>}
                                            {currentElement.heroImageSrc &&
                                                <Link href={currentElement.heroContentLink}>
                                                    <div className='submenu-nav-item'>
                                                        <div className='m-auto w-11/12 mt-4 mb-2 rounded-md overflow-hidden h-52 bg-transparent imageSrc-container'>
                                                            <img className='w-full h-full object-contain hover:scale-125' src={currentElement.heroImageSrc} alt='' />
                                                        </div>
                                                    </div>
                                                </Link>
                                            }
                                            {currentElement.Contents && currentElement.Contents.map((contentsData) => (
                                                <li className='p-4 min710px:m-2 rounded-lg submenu-nav-item' key={contentsData.id}>
                                                {contentsData.personDetails ? (
                                                    <div className='flex flex-col gap-4 border p-4 rounded-xl items-start hover:bg-gray-200 dark:hover:bg-gray-900 bg-transparent dark:border-gray-900 border-gray-200'>
                                                        <div className='flex flex-row flex-wrap items-start w-full items-center gap-2'>
                                                            {contentsData.testimonialTagsData && contentsData.testimonialTagsData.map((tagsData) => (
                                                                tagsData.tag && 
                                                                    <Link href={tagsData.tagLink} target="_blank" key={tagsData.id} className='py-2 px-4 !h-auto !w-max hover:dark:bg-black rounded dark:bg-slate-700 dark:border-gray-800'>
                                                                        <div className='flex whitespace-pre-line text-sm leading-normal items-center align-start'>
                                                                            <span>{tagsData.tag}</span>
                                                                        </div>
                                                                    </Link>
                                                            ))}
                                                        </div>
                                                        <Link href={contentsData.contentLink} target="_blank">
                                                            <div className=''>
                                                                <div className="nav-item-title text-base pb-2 text-3xl max554px:text-xl mb-4 antialised">
                                                                    {contentsData.testimonialText}
                                                                </div>
                                                            </div>
                                                                {contentsData.personSrc && (
                                                                    <div className='flex flex-row gap-x-4 items-start'>
                                                                        <div className='grid overflow-hidden rounded-full w-16 h-16 bg-gray-200 border border-gray-200 dark:bg-gray-900 dark:border-gray-800 imageSrc-container'>
                                                                            {contentsData.personSrc && <img className='place-self-center w-fit h-fit' src={contentsData.personSrc} alt={contentsData.personSrcAlt} />}
                                                                        </div>
                                                                        <div className=''>
                                                                            <div className="nav-item-title text-base pb-2">
                                                                                {contentsData.personDetails}
                                                                            </div>
                                                                            {contentsData.subText && <div className="nav-item-description text-sm opacity-60 pb-2">{contentsData.subText}
                                                                            </div>}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Link>
                                                    </div>
                                                        ) : (
                                                        <div className='grid grid-cols-1 gap-2'>
                                                            <div className='flex-none rounded-md w-full h-40 bg-transparent imageSrc-container'>
                                                            {contentsData.imageSrc && <img className='w-full h-full p-4 object-contain' src={contentsData.imageSrc} alt={contentsData.imageSrcAlt} />}
                                                            </div>
                                                        </div>
                                                        )
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div> 
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">
                                About <span className="menu-nav-arrow bold">↓</span>
                                </a>
                                <div className="sub-menu max-h-64 overflow-y-auto p-0.5 min-w-fit rounded-2xl grid m-auto services-menu-nav min1280px:divide-x max1279px:divide-y grid-cols-2 divide-gray-300 dark:divide-gray-800 max-parent-grid-container-width">
                                    {aboutMenuData && aboutMenuData.map((currentElement) => (
                                        <ul className='' key={currentElement.id}>
                                            {currentElement.CatagoryTitle && <p className="text-xl p-6 font-bold h-14">{currentElement.CatagoryTitle}</p>}
                                            {currentElement.Contents && currentElement.Contents.map((contentsData) => (
                                                <li className='p-4 active:font-bold hover:bg-slate-100 dark:hover:bg-neutral-900 min710px:m-2 rounded-lg submenu-nav-item' key={contentsData.id}>
                                                    <Link href={contentsData.contentLink} target="_blank">
                                                    <div className='grid grid-cols-1 gap-2'>
                                                        <div className='flex-none rounded-md w-full max1279px:h-40 min1280px:h-96 bg-gray-200 dark:bg-gray-900 mb-4 overflow-hidden imageSrc-container'>
                                                            {contentsData.imageSrc && <img className='w-full h-full p-4 object-contain hover:scale-125' src={contentsData.imageSrc} alt='' />}
                                                        </div>
                                                        <div className='mb-2'>
                                                             <div className="nav-item-title text-xl pb-2">
                                                                {contentsData.titleText}<br />
                                                                <span className="right-animate">{contentsData.titleText && `→`}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div> 
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">
                                Contact <span className="menu-nav-arrow bold">↓</span>
                                </a>
                                <div className="sub-menu max-h-64 overflow-y-auto p-0.5 min-w-fit rounded-2xl grid m-auto contact-menu-nav min1280px:divide-x max1279px:divide-y grid-cols-4 divide-gray-300 dark:divide-gray-800 max-parent-grid-container-width">
                                    {contactMenuData && contactMenuData.map((currentElement) => (
                                        <ul className='contactMenuUl' key={currentElement.id}>
                                            <p className="inline-flex text-xl p-6 font-bold h-16">{currentElement.CatagoryTitle}
                                                {currentElement.Pulse && <span className="relative flex h-3 w-3 ml-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 dark:bg-lime-300 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500 dark:bg-lime-400"></span>
                                                </span>}
                                            </p>
                                            {currentElement.heroImageSrc && 
                                                <Link href={currentElement.heroContentLink}>
                                                    <div className='m-auto w-11/12 mb-2 rounded-md overflow-hidden h-52 bg-gray-200 dark:bg-gray-900'>
                                                        <img className='w-full h-full object-contain' src={currentElement.heroImageSrc} alt='' />
                                                    </div>
                                                </Link>
                                            }
                                            {currentElement.Contents && currentElement.Contents.map((contentsData) => (
                                                <li className='p-4 active:font-bold hover:bg-slate-100 dark:hover:bg-neutral-900 min710px:m-2 rounded-lg submenu-nav-item' key={contentsData.id}>
                                                    <Link href={contentsData.contentLink} target="_blank">
                                                    {contentsData.titleText ? (
                                                        <div className='flex flex-row gap-x-4 items-start'>
                                                            {contentsData.imageSrc && (
                                                                <div className='grid overflow-hidden rounded-md w-16 h-16 bg-gray-200 border border-gray-200 dark:bg-gray-900 dark:border-gray-800 imageSrc-container'>
                                                                    {contentsData.imageSrc && <img className='place-self-center w-fit h-fit imageSrc' src={contentsData.imageSrc} alt='' />}
                                                                </div>
                                                            )}
                                                            {contentsData.videoSrcImage && (
                                                                <div className='flex-none overflow-hidden rounded-md w-32 h-20 bg-gray-200 dark:bg-gray-900 relative border border-gray-200 dark:bg-gray-900 dark:border-gray-800'>
                                                                    {contentsData.videoSrcImage && 
                                                                        <img className='w-full h-full object-cover' src={contentsData.videoSrcImage as string} alt='' />
                                                                    }
                                                                    <img src={playbtn.src} className='w-full h-full object-contain playButton absolute'></img>
                                                                </div>
                                                            )}
                                                            <div className=''>
                                                                <div className="nav-item-title text-base pb-2">
                                                                    {contentsData.titleText}
                                                                </div>
                                                                {contentsData.subText && <div className="nav-item-description text-sm opacity-60 pb-2">{contentsData.subText}
                                                                </div>}
                                                                <span className="right-animate">{contentsData.titleText && `→`}</span>
                                                            </div>
                                                        </div>
                                                        ) : (
                                                        <div className=''>
                                                            <div className='flex-none rounded-md w-full h-52 bg-gray-200 dark:bg-gray-900 imageSrc-container'>
                                                            {contentsData.imageSrc && <img className='w-full h-full p-4 object-contain scale-75' src={contentsData.imageSrc} alt='' />}
                                                            </div>
                                                        </div>
                                                        )
                                                    }
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div> 
                            </li>
                            <li className="menu-item-has-children">
                                <Link href="/contact-us"><button
                                    type="button"
                                    className="filled-button cursor-pointer flex h-2 justify-center items-center gap-2 rounded-3xl px-6 py-5 hover:py-7"
                                >
                                    Hire Harpreet
                                </button></Link>
                            </li>
                            </ul>
                        </nav>
                        {/* <span className="">
                            <Link href="/contact-us"><button type="button" className="hire-contact-button cursor-pointer lg-screen-btn display-block">Contact Us</button></Link>
                        </span> */}
                    </div>
                    {/* <span className="row v-center flex-row" style={{width: "auto" }}>
                    <Link href="/contact-us"><button type="button" className="hire-contact-button cursor-pointer lg-screen-btn display-block">Contact Us</button></Link>
                    </span> */}
                </div>
            </div>
            </header>
        </>
    );
}

export default TopNav;