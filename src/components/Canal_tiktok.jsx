import { TiktokLogo } from "phosphor-react"
import Image from 'next/image'

function Channel_Image(){
    return `https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/23756da4310d263fe58d61fc54dc71e7~c5_100x100.jpeg?x-expires=1663016400&x-signature=3oi8yFkDvEG6LIpc3iG8nZO0y9E%3D`
}

export default function Principais_videos(){
    return(
        <div className="flex flex-col w-full lg:w-[80%] bg-white shadow-xl rounded-b-2xl rounded-r-2xl p-4 mb-6">
            <span 
                className="flex flex-row items-center mb-4">
                TIKTOK 
                <TiktokLogo 
                    className="ml-2 text-2xl"
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
                    <span className="text-md font-bold mb-2 lg:w-56">Leonardo Pereira Sociedade de Advocacia</span>
                    <div className="w-full flex justify-center lg:justify-start">
                        <a  
                            href="https://www.tiktok.com/@leonardopereira.adv?lang=pt-BR" 
                            target="_blank"
                            rel="noreferrer"
                            className="font-raleway text-center w-48 text-white bg-gradient-to-r from-[#141e30] to-[#243b55] lg:hover:opacity-90 transition-all rounded-md p-2"
                        >
                            VISITAR
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}