import Image from "next/image";

import { WhatsappLogo, InstagramLogo, TiktokLogo } from "phosphor-react";

import Logo from '../img/logo_header.png'

export default function Header(){
    return(
        <div className="bg-white h-20 w-full shadow-lg fixed z-20 rounded-b-xl">
            <div className="w-full h-full flex flex-row items-center justify-between pr-6 pl-6">
                <div className="flex flex-row items-end cursor-default">
                    <Image src={Logo} width={40} height={40}/>
                    <div className="hidden items-baseline text-[#212a72FF] lg:flex flex-row pl-4">
                        <span className="text-2xl">Leonardo Pereira</span>
                        <span className="text-md pl-2 font-raleway">Sociedade de Advocacia</span>
                    </div>
                </div>

                <div className="flex flex-row w-36 justify-between text-4xl">
                    <a 
                    href="http://api.whatsapp.com/send?1=pt_BR&phone=5581999998987"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <WhatsappLogo className="text-[#25D366] cursor-pointer lg:hover:text-[#23ff73] transition-colors"/>
                    </a>

                    <a 
                    href="https://www.instagram.com/_vini.rcs_/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <InstagramLogo className="text-[#E4405F] cursor-pointer lg:hover:text-[#ff1c45] transition-colors"/>
                    </a>

                    <a 
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    >
                        <TiktokLogo className="text-[#000] cursor-pointer"/>
                    </a>
                </div>
            </div>
        </div>
    )
}