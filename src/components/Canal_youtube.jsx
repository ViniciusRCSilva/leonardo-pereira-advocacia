import { YoutubeLogo } from "phosphor-react"

import Image from 'next/image'

function Channel_Image(){
    return `https://yt3.ggpht.com/Rc-k_JZvXgxioE-OOeFL_mrLzU4TctgOgbSYvw48rFBNyGc5F4erLieogaFu0xON3BHLklnHyw=s1920-c-k-c0x00ffffff-no-rj`
}

export default function Principais_videos(){
    return(
        <div>
            <div className="flex flex-col md:flex-row items-center mb-6">
                <span className="text-[#212a72FF] text-center md:text-left text-xl font-bold">
                    CONHEÇA O NOSSO CANAL DO YOUTUBE
{/*                     <div className="flex flex-row items-center w-full justify-center md:justify-start">
                        <span>YOUTUBE</span>
                        <YoutubeLogo weight="fill" className="text-red-500 text-3xl md:text-2xl ml-2"/>    
                    </div>  */}

                </span>
                    <YoutubeLogo weight="fill" className="text-red-500 text-3xl md:text-2xl ml-2"/> 
                
            </div>

            <div className="flex flex-col w-full md:w-[80%] items-center md:flex-row bg-gradient-to-r from-[#141e30] to-[#243b55] shadow-xl rounded-b-2xl rounded-r-2xl p-4">

                {/* Imagem mobile */}
                <div className="flex md:hidden mb-2 rounded-full shadow-lg">
                    <Image src={Channel_Image()} 
                        width={150} 
                        height={150}
                        className="rounded-full"
                    />
                </div>

                {/* Imagem desktop */}
                <div className="hidden md:flex rounded-full shadow-lg">
                    <Image src={Channel_Image()} 
                        width={200} 
                        height={200}
                        className="rounded-full"
                    />
                </div>

                <div className="flex flex-col text-center md:text-left ml-4">
                    <span className="text-lg font-bold mb-2 text-white md:w-56">Leonardo Pereira Sociedade de Advocacia</span>
                    <div className="w-full flex justify-center md:justify-start">
                        <a  
                            href="https://www.youtube.com/channel/UCtOIAzapssSHii6hAdI_E-w/featured" 
                            target="_blank"
                            rel="noreferrer"
                            className="font-raleway text-center w-48 text-white bg-red-600 md:hover:opacity-90 transition-all rounded-md p-2"
                        >
                            INSCREVER-SE
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}