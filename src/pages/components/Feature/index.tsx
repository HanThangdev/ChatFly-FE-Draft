import Image from 'next/image';
import { picvid } from '@/assets/images';
import { vectorTink } from '@/assets/vector';
import { listClient, listFeature } from '@/constants/feature';

function Feature() {

    return (
        <div id='features' className='pt-40 pb-20'>
            <div className='min-h-xl max-w-screen-xl justify-center items-start m-auto flex-col'>
                <div className='text-center'>
                    <h5 className='text-[#3169E6] text-[1.25rem] leading-8'>POWERFUL FEATURES</h5>
                    <div className='flex relative w-fit m-auto'>
                        <h2 className='text-white text-[2.5rem] leading-[3.25rem]'>How Chatfly Empowers Your Business</h2>
                        <Image
                            src={vectorTink}
                            className="absolute filter opacity-90 animate-blob right-[-3rem] bottom-[12px] z-0"
                            alt="icon-blue"
                        />
                    </div>
                    <div className='flex gap-6 flex-wrap py-20'>
                        {listFeature.map((item) =>
                            <div className='max-w-[23.5rem]' key={item.key}>
                                <Image src={item.icon} alt={item.title} className='rounded-t-2xl' />
                                <div className="bg-featureovelay text-white pb-6 rounded-b-2xl px-4 min-h-[11rem]">
                                    <h5 className="text-[1.25rem] leading-10 pt-6 pb-4 font-semibold">{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='py-20'>
                    <Image src={picvid} alt='picvid' />
                </div>
            </div>
            <div className='text-center sw-container'>
                <h5 className='font-medium text-[#D1D2D5] mb-6'>Trusted By Our Beloved Clients</h5>
                <div className='flex gap-[132px]'>
                    {listClient.map((item, i) =>
                        <Image key={i} src={item} alt={'mark'} className="object-cover my-4" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Feature