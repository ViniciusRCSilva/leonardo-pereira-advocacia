import { InstagramLogo } from "phosphor-react"
import Image from 'next/image'

function Channel_Image(){
    return `https://instagram.frec17-1.fna.fbcdn.net/v/t51.2885-19/269768371_1042782779600684_4300817812173427951_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.frec17-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Rwf5TLq5tRgAX_FW-Lg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT_Bm1vkkmdWBimoYYy3jBlSTHiSVgx_4UhLpdWAnc-f0w&oe=631E6E20&_nc_sid=8fd12b`
}

export default function Principais_videos(){
    return(
        <div className="flex flex-col w-full lg:w-[80%] bg-white shadow-xl rounded-b-2xl rounded-r-2xl p-4 mb-6">
            <span 
                className="flex flex-row items-center mb-4">
                INSTAGRAM 
                <InstagramLogo 
                    className="text-[#E4405F] ml-2 text-2xl"
                />
            </span>

            <div className="flex lg:flex-row items-center">
                {/* Imagem mobile */}
                <div className="flex lg:hidden mb-2 rounded-full shadow-lg">
                    <Image src={Channel_Image()} 
                        width={150} 
                        height={150}
                        className="rounded-full"
                    />
                </div>

                {/* Imagem desktop */}
                <div className="hidden lg:flex rounded-full shadow-lg">
                    <Image src={Channel_Image()} 
                        width={80} 
                        height={80}
                        className="rounded-full"
                    />
                </div>

                <div className="flex flex-col text-center lg:text-left ml-4">
                    <span className="text-md font-bold mb-2 lg:w-56">leonardopereira.adv</span>
                    <div className="w-full flex justify-center lg:justify-start">
                        <a  
                            href="https://www.instagram.com/leonardopereira.adv/" 
                            target="_blank"
                            rel="noreferrer"
                            className="font-raleway text-center w-48 text-white bg-gradient-to-r from-[#fd5949] to-[#d6249f] lg:hover:opacity-90 transition-all rounded-md p-2"
                        >
                            SEGUIR
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}