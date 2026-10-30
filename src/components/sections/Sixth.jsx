import image from '../../assets/chap6.jpg';
import image2 from '../../assets/mobile/sixth.webp';
import BackgroundImage from '../common/BgPic';
const Sixth = () => {
  return (
    <div className="md:h-screen relative flex items-center" data-motion="float-bottom">
               <div data-motion="fade" className="absolute inset-0 -z-10 opacity-10">
                             <BackgroundImage source={image2} />
                           </div>
                           <div className="md:hidden absolute inset-0 -z-10 opacity-10 flex flex-col overflow-x-hidden">
                             <div data-motion="fade" className="w-full ">
                               <BackgroundImage source={image} />
                             </div>
                           </div>
               <div className="flex flex-col md:justify-around md:h-2/3 h-fit gap-2 md:gap-0">

                <h3 className="font-tag text-(--gold-primary) border rounded-xl border-(--gold-primary) w-fit p-1 px-2 bg-(--fground-highlighted)" style={{fontSize:"var(--font-size-small)"}} data-motion="float-down">ACT 6 // ARCHIVAL DOSSIER • THE RESISTANCE</h3>

                <div className='my-6'>
                  <div className="relative pl-3" data-motion="float-left">
                    <div className="w-2 h-2 bg-(--gold-primary) absolute top-1.5 -left-0.5"></div>
                    <h2 style={{fontSize:"var(--font-size-small)"}} className="text-(--font-color-s1)" data-motion="float-left">THE DOUBTERS</h2></div>
                  <h2 className="font-display font-semibold text-(--font-color) leading-12 md:leading-20" style={{fontSize:"var(--font-size-big)"}} data-motion="float-right">People doubted.<br />From the <span className='text-(--font-color-s1)'>first day.</span></h2>
                   <p className="mt-3 md:mt-2 md:w-[70%] font-light text-gray-400" data-motion="float-left">
              They questioned the age. The ambition. What was humanly and commercially possible within the empire.
            </p>

            <div className="w-full pl-3 border-l-2 border-(--gold-highlight) mt-3" data-motion="float-right"><h3 style={{fontSize:"var(--font-size-small)"}} className="font-thin text-(--gold-primary) mt-8 md:mt-0">
               “ I never argued back. I just kept building. ”
            </h3></div>
                </div>

                <div className='w-fit flex flex-col gap-2 mt-12 border-t pt-4 border-(--gold-highlight)' style={{fontSize:"var(--font-size-small)"}} data-motion="float-up">
                  <div className="pl-2 relative">
                    <div className="w-2 h-2 bg-(--gold-primary) absolute top-2 -left-1"></div>
                    <h3>While others planned the next quarter, I was already building the next decade</h3>
                  </div>
                   <div className="pl-2 relative">
                    <div className="w-2 h-2 bg-(--gold-primary) absolute top-2 -left-1"></div>
                    <h3>I didn't come to compete. I came to rewrite teh game.</h3>
                  </div>
                </div>
               </div>
    </div>
  )
}

export default Sixth