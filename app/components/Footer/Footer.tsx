import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import heartImage from "../../../public/assets/icons/heart.svg"

import React from 'react'

const Footer = () => {
  return (
    <>
         <section className='m-auto w-full max-parent-grid-container-width pt-30 pb-20 relative'>
            <GridContainer gridCols="grid-cols-6 justify-between align-start items-start max1279px:grid-cols-2 max709px:!grid-cols-1 banner bannerHome">
                <GridChild childId={17} 
                    childName="aboutHarpreetFooterMenu col-span-2"
                    assetOrder={1}
                    h4Order={2}
                    buttonOrder={3}
                />
                <GridChild childId={18} 
                    childName="servicesFooterMenu"
                    h4Order={1}
                    paragraphOrder={2}
                />
                <GridChild childId={19} 
                    childName="workFooterMenu"
                    h4Order={1}
                    paragraphOrder={2}
                />
                <GridChild childId={20} 
                    childName="resourcesHubFooterMenu"
                    h4Order={1}
                    paragraphOrder={2}
                />
                <GridChild childId={21} 
                    childName="ContactFooterMenu"
                    h4Order={1}
                    paragraphOrder={2}
                />
            </GridContainer>
        </section>
        <div className='max-parent-grid-container-width m-auto border-b dark:border-gray-700 border-gray-900 my-10'></div>
        <section className='m-auto w-full max-parent-grid-container-width pt-30 pb-20'>
            <GridContainer gridCols="grid-cols-3 justify-between align-start items-center max1279px:grid-cols-2 max709px:!grid-cols-1">
                <GridChild childId={39} 
                    childName="footer-footnotes"
                    paragraphOrder={1}
                />
                <div className='footer-footnotes flex flex-row gap-x-2'><span>Designed with </span><img src={heartImage.src}></img><span>by <b>Grow With Design</b></span></div>
                <GridChild childId={40} 
                    childName="!flex !flex-row gap-x-8 footer-footnotes items-right justify-right"
                    paragraphOrder={1}
                />
            </GridContainer>
        </section>
    </>
  )
}

export default Footer
