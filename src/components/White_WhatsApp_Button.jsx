import { WhatsappLogo } from "phosphor-react";

export default function WhatsApp_Button(){
    return(
        <a 
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5581999998987"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center bg-white rounded-full p-4 w-full lg:w-[30%] justify-center shadow-xl lg:hover:scale-105 transition-all"
        >
            <WhatsappLogo className="text-2xl lg:text-3xl text-[#25D366] transition-colors mr-2"/>
            <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#141e30] to-[#243b55]"
            >
                ENTRAR EM CONTATO
            </span>

        </a>
    )
}