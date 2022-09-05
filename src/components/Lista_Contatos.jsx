import { Phone, GoogleLogo, InstagramLogo, TiktokLogo } from "phosphor-react";

export default function Lista_Contatos(){
    return(
        <>
            <a 
                className="flex flex-row items-center mt-2 lg:hover:scale-105 transition-all"
                href="http://api.whatsapp.com/send?1=pt_BR&phone=5581999998987" 
                target="_blank"
                rel="noreferrer"
            >
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <Phone className="text-[#212a72FF] mr-2"/>
                        <span>Telefone: (81) 9 9999-9999</span>
                    </div>
                </div>
            </a>

            <a 
                className="flex flex-row items-center mt-2 lg:hover:scale-105 transition-all"
                href="mailto:" 
                target="_blank"
                rel="noreferrer"
            >
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <GoogleLogo className="text-[#212a72FF] mr-2"/>
                        <span>E-Mail: email@gmail.com</span>
                    </div>
                </div>
            </a>
        </>
    )
}