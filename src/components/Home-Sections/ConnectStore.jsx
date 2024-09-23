import React , {useState ,useEffect , useRef} from 'react'
import ConnectionCard from '../ConnectionCard'

const connections = [
    {
        storename: "wix",
        logo: "assets/connect/wix.svg",
        position: { top: '8%', left: '80%' },
        size: "medium"
    },
    {
        storename: "woo",
        logo: "assets/connect/woo.svg",
        position: { top: '25%', left: '60%' },
        size: "small"
    },
    {
        storename: "shopify",
        logo: "assets/connect/shopify.svg",
        position: { top: '53%', left: '15%' },
        size: "large"
    },
    {
        storename: "etsy",
        logo: "assets/connect/etsy.svg",
        position: { top: '55%', left: '80%' },
        size: "large"
    },
    {
        storename: "presta",
        logo: "assets/connect/presta.svg",
        position: { top: '40%', left: '70%' },
        size: "small"
    },
    {
        storename: "more-integration",
        logo: "assets/connect/more-integration.svg",
        position: { top: '64%', left: '37%' },
        size: "small"
    },
    {
        storename: "big-commerce",
        logo: "assets/connect/big-commerce.svg",
        position: { top: '14%', left: '37%' },
        size: "small"
    },
    {
        storename: "wix",
        logo: "assets/connect/wix.svg",
        position: { top: '75%', left: '52%' },
        size: "medium"
    },

]
// function ConnectStore() {
//     return (
//         <div className='relative py-24'>
//                 <div className='w-full flex justify-center'>
//                 <img src='assets/connect/arrow-down.png' alt="Background" className='flex absolute w-80 -z-10' />
//                 <div className='pt-28 flex justify-center items-center flex-col gap-6'>
//                     <h1 className='font-semibold text-5xl'>Connect your store</h1>
//                     <div className='text-gray-400'>Printify easily integrates with major e-commerce platforms and marketplaces</div>
//                 </div>
//                 </div>
       
//             <div className='connect relative w-full h-screen grid place-items-center'>
//                 {/* center main logo */}
//                     <ConnectionCard image={"assets/connect/printify.svg"} bgColor="primary" />

//                 {/* other logo's connection */}
//                 {
//                     connections.map(({ storename, logo, position, size }, index) => <div key={index} className='connect-logo absolute' style={{ top: position.top, left: position.left }}>
//                         <ConnectionCard image={logo} bgColor="white" size={size} />

//                     </div>)
//                 }
//             </div>
//             <div>
//                 <div className="lg:mx-44 md:mx-12 mx-4 overflow-hidden bg-[url('assets/connect/talk-to-sales.svg')] bg-right bg-no-repeat h-28 object-contain border rounded-2xl bg-[#E2F7E3] grid place-items-center">
//                     <div className='flex w-full justify-between items-center lg:px-24 md:px-12 px-4'>
//                         <h1 className='font-bold text-green-700 text-lg lg:max-w-72 max-w-64'>Are you a large business looking for custom solutions?</h1>
//                         <button className='bg-white px-4 py-1 border border-gray-400 text-sm rounded-sm'>Talk to sales</button>
//                     </div>
//                 </div>
//             </div>



//         </div>
//     )
// }

function ConnectStore() {
    const [isAnimated, setIsAnimated] = useState(false);
    const connectStoreRef = useRef(null); // Create a reference to the ConnectStore element

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Check if the component is intersecting with the viewport
                if (entries[0].isIntersecting) {
                    setIsAnimated(true); // Start the animation
                }
            },
            {
                threshold: 0.5, // Trigger when at least 50% of the component is visible
            }
        );

        if (connectStoreRef.current) {
            observer.observe(connectStoreRef.current);
        }

        return () => {
            if (connectStoreRef.current) {
                observer.unobserve(connectStoreRef.current); // Clean up
            }
        };
    }, []);

    return (
        <div ref={connectStoreRef} className='relative w-[100%] pb-40'>
            <div className='w-full flex justify-center'>
                <img src='assets/connect/arrow-down.png' alt="Background" className='flex absolute w-80 -z-10' />
                <div className='pt-32 px-12 text-center flex justify-center items-center flex-col gap-6'>
                    <h1 className='font-semibold text-5xl'>Connect your store</h1>
                    <div className='text-gray-400'>Printify easily integrates with major e-commerce platforms and marketplaces</div>
                </div>
            </div>

            <div className={`connect relative w-full h-screen grid place-items-center ${isAnimated ? 'animated' : ''} lg:overflow-hidden md:overflow-hidden overflow-x-scroll`}>
                {/* center main logo */}
                <div className='z-50'>
                    <ConnectionCard image={"assets/connect/printify.svg"} bgColor="primary" />
                </div>

                {/* other logos */}
                {connections.map(({ storename, logo, position, size }, index) => (
                    <div
                        key={index}
                        className={`connect-logo ${isAnimated ? 'animated' : ''} -z-50 `}
                        style={{
                            top: isAnimated ? position.top : '50%',
                            left: isAnimated ? position.left : '50%',
                            transform: isAnimated ? 'none' : 'translate(-50%, -50%)',
                            transitionDelay: `${index * 0}s`
                        }}
                    >
                        <ConnectionCard image={logo} bgColor="white" size={size} />
                    </div>
                ))}
            </div>


            <div>
                <div className="lg:mx-44 md:mx-12 mx-4 overflow-hidden bg-[url('assets/connect/talk-to-sales.svg')] bg-right bg-no-repeat h-28 object-contain border rounded-2xl bg-[#E2F7E3] grid place-items-center">
                    <div className='flex w-full justify-between items-center lg:px-24 md:px-12 px-4'>
                        <h1 className='font-bold text-green-700 text-lg lg:max-w-72 max-w-64'>Are you a large business looking for custom solutions?</h1>
                        <button className='bg-white px-4 py-1 border border-gray-400 text-sm rounded-sm'>Talk to sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectStore;