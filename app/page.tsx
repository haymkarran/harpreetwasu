import Image from 'next/image'
import Testimonials from './components/testimonials/Testimonials'
import TopNav from './components/top-nav/TopNav'
import FeatureGridCards from './components/featureGridCards/FeatureGridCards'
import GridGallary from './components/gridGallary/GridGallary'
import FeaturedVideo from './components/featuredVideo/FeaturedVideo'
import GridContainer from './components/gridData/GridContainer'
import GridChild from './components/gridData/GridChild'
import ScrollAnimate from './components/scrollBasedAnimation/ScrollAnimate'
import Link from 'next/link'
import GridChildApi from './components/gridData/gridChildApi'
import certifiedPattern from '../public/assets/images/patterns/progressPattern.svg'
import ClienteleScroller from './components/clientele-scroller/ClienteleScroller'
import Stack from './components/cardStack/Stack'
import leafPattern from "../public/assets/patterns/leaf.svg"
import wheelPattern from "../public/assets/patterns/wheel.svg"
import heartImage from "../public/assets/icons/heart.svg"
import WordChanger from './components/wordChanger/WordChanger'
// import Stack from './components/cardStack/Stack'

// import ThemeToggler from './components/themeToggler/ThemeToggler'

export default function Home() {
  return (
    <>
    {/* Your Trusted Migration Expert */}
    <section className='m-auto w-full max-parent-grid-container-width pt-28 pb-60 bannerHome banner'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
            <div className='flex flex-col justify-center w-full'>
                <h1 className='min1280px:text-h1 max1279px:text-h2 max554px:text-h4 font-bold relative'>Your Trusted <br /><WordChanger /><br /> <span className='h1Hero'><span className='feelSpecial textGradient'>Expert.</span></span></h1>
            </div>
            <div className='w-11/12 h-full'><ScrollAnimate /></div>
        </GridContainer>
    </section>

    <div className='rotate-90 w-80 gradientLineSeparator'></div>

    {/* 200+ projects */}
    <section className='m-auto w-full max-parent-grid-container-width pt-60 pb-10'>
        <GridContainer gridCols="grid-cols-1">
            <GridChild childId={2}
                childName="200PlusProjects"
                customHeaderCss='font-bold'
             />
        </GridContainer>
    </section>

    <section className='m-auto w-full sectionClientele mb-60'>
        <GridContainer gridCols="!flex flex-col overflow-visible">
                <ClienteleScroller scrollerApiId={1} slideDirection="Backwards" />
                {/* <ClienteleScroller scrollerApiId={2} slideDirection="Forwards" /> */}
                <ClienteleScroller scrollerApiId={1} slideDirection="BackwardsSlow" />
        </GridContainer>
    </section>

    {/* star studs */}
    <section className='animate-pulse m-auto w-full max-parent-grid-container-width min1280px:-mb-50 max1279px:mb-20'>
        <GridContainer gridCols="grid-cols-1">
            <GridChild childId={3} 
                childName="starStuds"
            />
        </GridContainer>
    </section>

    {/* Hello. I'm Harpreet */}
    <section className='m-auto max-parent-grid-container-width pb-60 relative'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1 textGradientBefore">
            <GridChild childId={4} 
                childName="aboutHarpreet"
                customHeaderCss='font-bold'
            />
            <GridChild childId={5} 
                childName="aboutHarpreetAssetSection"
            />
        </GridContainer>
    </section>

    <div className='rotate-90 w-80 -mt-56 mb-96 gradientLineSeparator'></div>

    {/* what can I do for you */}
    <section className='m-auto max-parent-grid-container-width pb-60 relative'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1 textGradient">
            <div className='relative max709px:mb-60 min710px:pr-10'><Stack /></div>
            <GridChild childId={7}
                childName="whatCanIDoForYou"
                customHeaderCss='font-bold'
            />
        </GridContainer>
    </section>

    <div className='rotate-90 w-80 mt-80 -mb-6 m-auto gradientLineSeparator'></div>

    {/* star studs */}
    <section className='animate-pulse m-auto w-full max-parent-grid-container-width min1280px:-mb-50 max1279px:mb-20 mt-20'>
        <GridContainer gridCols="grid-cols-1">
            <GridChild childId={3} 
                childName="starStuds"
            />
        </GridContainer>
    </section>

    {/* Impact that my work creates */}
    <section className='m-auto w-full max-parent-grid-container-width pb-4'>
        <GridContainer gridCols="grid-cols-1">
            <GridChild childId={30} 
                childName=""
                customHeaderCss='font-bold'
                assetOrder={1}
                h2Order={2}
            />
        </GridContainer>
    </section>

    <section className='testimonialContainer grid'>
        <div className='testimonialChild !ml-10 relative overflow-hidden flex flex-col gap-y-4 align-center justify-center text-center m-auto my-16 p-20 testimonialColor mb-60 !mr-10'>
                <GridChild childId={31} 
                    childName="harpreetCollab"
                    customHeaderCss='font-bold'
                    assetOrder={1}
                    h2Order={2}
                />

                <GridChild childId={32} 
                    childName="testimonialPeopleGroup"
                    paragraphOrder={1}
                    assetOrder={2}
                    h4Order={3}
                    customParagraphCss='first-letter:text-9xl first-letter:font-bold'
                    customHeaderCss='textSmall'
                />
                <div className='patternPosition max709px:hidden'><img src={leafPattern.src} alt=""></img></div>
        </div>
        <div className='testimonialChild relative overflow-hidden flex flex-col gap-y-4 align-center justify-center text-center m-auto my-16 p-20 testimonialColor mb-60 !mr-10'>
                <GridChild childId={31} 
                    childName="harpreetCollab"
                    customHeaderCss='font-bold'
                    assetOrder={1}
                    h2Order={2}
                />

                <GridChild childId={32} 
                    childName="testimonialPeopleGroup"
                    paragraphOrder={1}
                    assetOrder={2}
                    h4Order={3}
                    customParagraphCss='first-letter:text-9xl first-letter:font-bold'
                    customHeaderCss='textSmall'
                />
                <div className='patternPosition max709px:hidden'><img src={leafPattern.src} alt=""></img></div>
        </div>
        <div className='testimonialChild relative overflow-hidden flex flex-col gap-y-4 align-center justify-center text-center m-auto my-16 p-20 testimonialColor mb-60 !mr-10'>
                <GridChild childId={31} 
                    childName="harpreetCollab"
                    customHeaderCss='font-bold'
                    assetOrder={1}
                    h2Order={2}
                />

                <GridChild childId={32} 
                    childName="testimonialPeopleGroup"
                    paragraphOrder={1}
                    assetOrder={2}
                    h4Order={3}
                    customParagraphCss='first-letter:text-9xl first-letter:font-bold'
                    customHeaderCss='textSmall'
                />
                <div className='patternPosition max709px:hidden'><img src={leafPattern.src} alt=""></img></div>
        </div>
        <div className='testimonialChild relative overflow-hidden flex flex-col gap-y-4 align-center justify-center text-center m-auto my-16 p-20 testimonialColor mb-60 !mr-10'>
                <GridChild childId={31} 
                    childName="harpreetCollab"
                    customHeaderCss='font-bold'
                    assetOrder={1}
                    h2Order={2}
                />

                <GridChild childId={32} 
                    childName="testimonialPeopleGroup"
                    paragraphOrder={1}
                    assetOrder={2}
                    h4Order={3}
                    customParagraphCss='first-letter:text-9xl first-letter:font-bold'
                    customHeaderCss='textSmall'
                />
                <div className='patternPosition max709px:hidden'><img src={leafPattern.src} alt=""></img></div>
        </div>
        <div className='testimonialChild relative overflow-hidden flex flex-col gap-y-4 align-center justify-center text-center m-auto my-16 p-20 testimonialColor mb-60 !mr-10'>
                <GridChild childId={31} 
                    childName="harpreetCollab"
                    customHeaderCss='font-bold'
                    assetOrder={1}
                    h2Order={2}
                />

                <GridChild childId={32} 
                    childName="testimonialPeopleGroup"
                    paragraphOrder={1}
                    assetOrder={2}
                    h4Order={3}
                    customParagraphCss='first-letter:text-9xl first-letter:font-bold'
                    customHeaderCss='textSmall'
                />
                <div className='patternPosition max709px:hidden'><img src={leafPattern.src} alt=""></img></div>
        </div>
    </section>

    <div className='rotate-90 w-80 gradientLineSeparator'></div>

    {/* I'm Your Certified Professional */}
    <section className='certifiedProfessionalSection m-auto w-full mb-40'>
        <div className='sectionBackgroundCP absolute overflow-visible w-full h-full'>
            <div className='certifiedPatternContainerTop'><img className='certifiedPatternImg' src={certifiedPattern.src} /></div>
            <div className='certifiedPatternContainerBottom'><img className='certifiedPatternImg' src={certifiedPattern.src} /></div>
        </div>
        <div className='relative pt-60 pb-40 flex flex-col items-center align-center justify-center w-full'>
            <GridContainer gridCols="m-auto grid-cols-1 pb-20 max-parent-grid-container-width">
                <GridChild childId={24} 
                    childName="certifiedProfessionalHeading"
                    customHeaderCss='font-bold'
                />
            </GridContainer>
            <GridContainer gridCols="m-auto grid-cols-6 max1279px:!grid-cols-2 max709px:!grid-cols-1 max-parent-grid-container-width">
                <GridChild childId={25} 
                    childName="microsoftFundamentals certificationBadge scale-90 max1279px:scale-75 hover:scale-125 overflow-hidden"
                />
                <GridChild childId={26} 
                    childName="microsoftAzure certificationBadge scale-90 max1279px:scale-75 hover:scale-125 overflow-hidden"
                />
                <GridChild childId={27} 
                    childName="microsoftNetworking certificationBadge scale-90 max1279px:scale-75 hover:scale-125 overflow-hidden"
                />
                <GridChild childId={28} 
                    childName="microsoftInstallationStorage certificationBadge scale-90 max1279px:scale-75 hover:scale-125 overflow-hidden"
                />
                <GridChild childId={29} 
                    childName="microsoftCertifiedProfessional certificationBadge col-span-2 scale-90 max1279px:scale-75 hover:scale-105 overflow-hidden"
                />
            </GridContainer>
        </div>
    </section>

    <div className='rotate-90 w-80 mt-96 mb-12 gradientLineSeparator'></div>

    {/* Writings by Harpreet */}
    <section className='m-auto w-full max-parent-grid-container-width pt-60 pb-10 relative'>
        <GridContainer gridCols="grid-cols-1 textGradientBefore">
            <GridChild childId={8} 
                childName="writingsByHarpreet"
                customHeaderCss='font-bold'
            />
        </GridContainer>
    </section>

    {/* blogs under - writings by Harpreet */}
    <section className='m-auto max-parent-grid-container-width pb-60 harpreetWritings'>
        <GridContainer gridCols="grid-cols-4 min1280px:grid-rows-6 lgTablet:grid-cols-2 max990px:grid-cols-1">
            <div className='min1280px:grid flex flex-col cloudComputing w-full row-start-1 row-span-6 max1279px:auto-rows-auto max1279px:row-span-1 items-start content-start overflow-scroll'>
                <a href='https://harpreetwasu.com' className='w-full py-5 items-center text-center'>
                    <h4 className='text-h4'>Cloud Computing</h4>
                </a>
                <GridChild childId={9} 
                    childName="cloudComputingSection h-full !justify-start"
                />
            </div>
            <div className='min1280px:grid flex flex-col microsoft365 row-start-1 row-span-4 max1279px:row-start-auto max1279px:row-span-1 items-start content-start w-full overflow-scroll'>
                <a href='https://harpreetwasu.com' className='w-full py-5 items-center text-center'>
                    <h4 className='text-h4'>Microsoft 365</h4>
                </a>
                <GridChild childId={10} 
                    childName="microsoft365Section h-full !justify-start"
                />
            </div>
            <div className='min1280px:grid flex flex-col cyberSecurity row-start-1 row-span-4 max1279px:row-start-auto max1279px:row-span-1 items-start content-start w-full overflow-scroll'>
                <a href='https://harpreetwasu.com' className='w-full py-5 items-center text-center'>
                    <h4 className='text-h4'>Cyber Security</h4>
                </a>
                <GridChild childId={11} 
                    childName="cyberSecuritySection h-full !justify-start"
                />
            </div>
            <div className='min1280px:grid flex flex-col migrations row-start-1 row-span-6 max1279px:row-start-auto max1279px:row-span-1 items-start content-start w-full overflow-scroll'>
                <a href='https://harpreetwasu.com' className='w-full py-5 items-center text-center'>
                    <h4 className='text-h4'>Migrations</h4>
                </a>
                <GridChild childId={12} 
                    childName="migrationsSection h-full !justify-start"
                />
            </div>
            <div className='min1280px:grid flex flex-col featuredOnSection min1280px:col-start-2 min991px:col-span-2 min1280px:row-start-5 max1279px:row-span-1 row-span-2 w-full overflow-scroll rounded-md'>
                <p className='pt-4 text-paragraph text-center font-bold'>FEATURED ON</p>
                <GridChild childId={13} 
                    childName="featuredOnChild vectorShape scale-75 h-full !justify-start"
                />
            </div>
        </GridContainer>
    </section>

    {/* The Harpreet Times */}
    <section className='newsletterSection m-auto w-full max-parent-grid-container-width min1280px:py-40 py-10 min1280px:px-40 max554px:px-5 min555px:px-10 mb-56 rounded-2xl'>
        <GridContainer gridCols="grid-cols-1 mb-8 min1280px:mb-24">
            <GridChild childId={14} 
                childName="harpreetNewsletters items-center text-center gap-y-8 vectorShape"
                chipsOrder={1}
                assetOrder={2}
            />
        </GridContainer>
        <GridContainer gridCols="min1280px:grid-cols-3 min991px:grid-cols-2 max990px:grid-cols-1">
            <GridChild childId={15}
                childName="noSpamHeading min1280px:col-span-2"
            />
            <div>
            <form>
                <label className="block">
                  {/* <span className="block text-sm font-medium text-slate-700">Username</span> */}
                  <input type="email" name="email" id="email" 
                        className="formInputCss px-3 py-5 bgColorGlobal textColorGlobal
                                  shadow-sm placeholder-slate-400 
                                  disabled:bg-slate-50 disabled:text-slate-500 
                                  disabled:border-slate-200 focus:outline-none 
                                  focus:border-sky-500 focus:ring-sky-500 block w-full 
                                  sm:text-sm focus:ring-1 invalid:border-pink-500 
                                  invalid:text-pink-600 focus:invalid:border-pink-500 
                                  focus:invalid:ring-pink-500 disabled:shadow-none"
                                  placeholder="you@example.com" />
                </label>
              </form>
                <GridChild childId={16}
                childName="newsletterForm text-center"
                buttonOrder={1}
                paragraphOrder={2}
                />
            </div>
        </GridContainer>
    </section>

    {/* Hire Harpreet Today */}
    <section className='m-auto w-full max-parent-grid-container-width pb-10'>
        <GridContainer gridCols="grid-cols-1">
            <GridChild childId={33} 
                childName=""
                customHeaderCss='font-bold'
                assetOrder={1}
                h2Order={2}
            />
        </GridContainer>
    </section>

    {/* 3 column grid */}
    <section className='m-auto max-parent-grid-container-width harpreetTestimonialsByPeople relative'>
        <GridContainer gridCols="grid-cols-3 max990px:grid-cols-1 items-end banner bannerHome">
            <div className='flex flex-col gap-y-8 pb-28'>
                <GridChild childId={34}
                    childName="testimonialTextData"
                    paragraphOrder={1}
                    assetOrder={2}
                />
                <GridChild childId={35}
                    childName="testimonialTextData"
                    paragraphOrder={1}
                    assetOrder={2}
                />
            </div>
            <div className='hireHarpreetFocusAsset overflow-hidden p-0 m-0'>
                    <GridChild childId={38}
                        childName="w-full h-full items-end"
                        paragraphOrder={1}
                        assetOrder={2}
                    />
            </div>
            <div className='flex flex-col gap-y-8 pb-10'>
                <GridChild childId={36}
                    childName="testimonialTextData"
                    paragraphOrder={1}
                    assetOrder={2}
                />
                <GridChild childId={37}
                    childName="testimonialTextData"
                    paragraphOrder={1}
                    assetOrder={2}
                />
            </div>
        </GridContainer>
    </section>


    <section className='m-auto w-full sectionHarpreetAvailability mb-60 z-50'>
        <GridContainer gridCols="!flex flex-col overflow-visible">
                <ClienteleScroller scrollerApiId={3} slideDirection="Backwards" />
        </GridContainer>
    </section>

    {/* Harpreet Podcast */}
    <section className='m-auto w-full max-parent-grid-container-width pt-30 pb-60'>
        <GridContainer gridCols="grid-cols-1 m-auto mb-40 w-full items-center">
                <GridChild childId={23} 
                    childName="podcastsHarpreet w-full items-center"
                    assetOrder={1}
                />
            <GridChild childId={22} 
                childName="podcastsHarpreet w-full items-center"
                assetOrder={1}
            />
        </GridContainer>
    </section>

    {/* Footer */}
    </>
  )
}