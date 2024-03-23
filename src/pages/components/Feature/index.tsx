import Image from 'next/image';
import frameChannel from '../../../../public/assets/frame-channel.png';
import frameLanguage from '../../../../public/assets/frame-language.png';
import framePowerful from '../../../../public/assets/frame-powerful.png';
import framePrebuilt from '../../../../public/assets/frame-prebuilt.png';
import frameReport from '../../../../public/assets/frame-report.png';
import frameWhiteLabel from '../../../../public/assets/frame-whitelabel.png';
import picvid from '../../../../public/assets/picvid.png';
import spotify from '../../../../public/assets/mark-spotify.png';
import canva from '../../../../public/assets/mark-canva.png';
import gitlab from '../../../../public/assets/mark-gitlab.png';
import grammarly from '../../../../public/assets/mark-grammarly.png';
import zoom from '../../../../public/assets/mark-zoom.png';
import dribbble from '../../../../public/assets/mark-dribbble.png';
import vectorTink from '../../../../public/assets/vector-tink.png';

function Feature() {
    const listFeature = [
        {
            key: 0,
            icon: frameLanguage,
            title: '98+ Languages',
            description: `Automatically detect customer's language and tailored automations tailored to 98 languages.`
        },
        {
            key: 1,
            icon: frameChannel,
            title: 'Integration with 10+ Channels',
            description: `Easily to connect your chatbot to your favorite tools like Slack, WhatsApp, Telegram... plus in the website's own chat. `
        },
        {
            key: 2,
            icon: framePowerful,
            title: 'Powerful Chatbot API',
            description: `Connect your chatbot with every part of our software, using our API that also offers other multiple integrations.`
        },
        {
            key: 3,
            icon: framePrebuilt,
            title: 'Prebuilt Templates',
            description: `Get started with pre-built templates for popular use cases—from support to teaching...`
        },
        {
            key: 4,
            icon: frameWhiteLabel,
            title: 'White-label AI Chabot',
            description: `We offer chat widget with fully tailored to your specific needs, including removing the “Powered by CustomGPT” branding. `
        },
        {
            key: 5,
            icon: frameReport,
            title: 'Report',
            description: `Collect, analysis and export chatbot usage history across various periods.`
        },
    ];

    const listClient = [spotify, grammarly, canva, dribbble, zoom, dribbble, zoom, gitlab];


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