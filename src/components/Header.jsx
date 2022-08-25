import Image from "next/image";

import { WhatsappLogo, InstagramLogo, TiktokLogo } from "phosphor-react";

import Logo from '../img/logo_header.png'

export default function Header(){
    return(
        <div className="bg-white h-20 w-full shadow-lg fixed z-20">
            <div className="w-full h-full flex flex-row items-center justify-between pr-6 pl-6 font-Raleway">
                <div className="flex flex-row items-end cursor-default">
                    <Image src={Logo} width={40} height={40}/>
                    <div className="hidden items-baseline text-[#212a72FF] md:flex flex-row pl-4">
                        <span className="text-2xl">Leonardo Pereira</span>
                        <span className="text-md pl-2">Sociedade de Advocacia</span>
                    </div>
                </div>

                <div className="flex flex-row w-36 justify-between text-4xl">
                    <WhatsappLogo className="text-[#25D366] cursor-pointer"/>
                    <InstagramLogo className="text-[#E4405F] cursor-pointer"/>
                    <TiktokLogo className="text-[#000] cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}