import Canal_youtube from './Canal_youtube'
import Canal_tiktok from './Canal_tiktok'
import Canal_instagram from './Canal_instagram'
import Blue_WhatsApp_Button from "../components/Blue_WhatsApp_Button";
import Lista_Contatos from "./Lista_Contatos";
import Mapa from './Mapa';

export default function Contatos(){
    return(
        <>
            <div className="flex flex-col w-full items-center lg:items-start lg:flex-row lg:justify-between mt-12">

                <div className="mt-10 lg:mt-0 w-full lg:w-[45%]">
                    <div className="flex flex-col lg:flex-row items-center mb-6">
                        <span className="text-[#212a72FF] text-center lg:text-left text-xl font-bold">
                            REDES SOCIAIS
                        </span>
                    </div>
                    <Canal_youtube/>
                    <Canal_tiktok/>
                    <Canal_instagram/>
                </div>
                
                <div className="flex flex-col w-full lg:w-[45%]">

                    <div className="lg:text-start text-center">
                        <span className="text-[#212a72FF] text-xl font-bold">CONTATOS</span>
                    </div>
                    <div className="flex flex-col w-full items-center lg:items-start">
                        <Lista_Contatos/>
                    </div>

                    <div className="mt-6">
                        <Blue_WhatsApp_Button/>
                    </div>

                    <div className="mt-6">
                        <Mapa/>
                    </div>
                </div>

            </div>
        </>
    )
}