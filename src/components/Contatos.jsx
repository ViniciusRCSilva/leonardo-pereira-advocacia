import Canal_youtube from './Canal_youtube'
import Blue_WhatsApp_Button from "../components/Blue_WhatsApp_Button";
import Lista_Contatos from "./Lista_Contatos";

export default function Contatos(){
    return(
        <>
            <div className="flex flex-col w-full items-center lg:items-start lg:flex-row lg:justify-between mt-12">

                <div className="flex flex-col w-full lg:w-[50%]">

                    <div className="lg:text-start text-center">
                        <span className="text-[#212a72FF] text-xl font-bold">CONTATOS</span>
                    </div>
                    <div className="flex flex-col w-full items-center lg:items-start">
                        <Lista_Contatos/>
                    </div>

                    <div className="mt-6">
                        <Blue_WhatsApp_Button/>
                    </div>
                </div>

                <div className="mt-10 lg:mt-0">
                    <Canal_youtube/>
                </div>
            </div>
        </>
    )
}