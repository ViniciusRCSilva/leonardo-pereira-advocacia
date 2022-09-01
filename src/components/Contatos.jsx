import { Phone, GoogleLogo, InstagramLogo, TiktokLogo } from "phosphor-react";

import Canal_youtube from './Canal_youtube'

export default function Contatos(){
    return(
        <>
            <div className="flex flex-col w-full items-center lg:items-start lg:flex-row lg:justify-between mt-12">

                <div className="flex flex-col w-full lg:w-[50%]">

                    <div className="lg:text-start text-center">
                        <span className="text-[#212a72FF] text-xl font-bold">CONTATOS</span>
                    </div>
                    <div className="flex flex-col w-full items-center lg:items-start">
                        {/* Lista de contatos */}
                        <div className="flex flex-row items-center mt-2">
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <Phone className="text-[#212a72FF] mr-2"/>
                                    <span>Telefone: (81) 9 9999-9999</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center mt-2">
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <GoogleLogo className="text-[#212a72FF] mr-2"/>
                                    <span>E-Mail: email@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center mt-2">
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <InstagramLogo className="text-[#212a72FF] mr-2"/>
                                    <span>Instagram: @nomeInstagram</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center mt-2">
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <TiktokLogo className="text-[#212a72FF] mr-2"/>
                                    <span>Tiktok: @nomeTiktok</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Youtube */}
                <div className="mt-10 lg:mt-0">
                    <Canal_youtube/>
                </div>
            </div>
        </>
    )
}