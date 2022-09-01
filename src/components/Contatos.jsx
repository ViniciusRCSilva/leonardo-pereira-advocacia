import { MapPin, Phone, GoogleLogo, InstagramLogo, TiktokLogo } from "phosphor-react";

import Canal_youtube from './Canal_youtube'

export default function Contatos(){
    return(
        <>
            <div className="flex flex-col w-full items-center md:items-start md:flex-row md:justify-between mt-12">

                <div className="flex flex-col w-full md:w-[50%]">

                    <div className="md:text-start text-center">
                        <span className="text-[#212a72FF] text-xl font-bold">CONTATOS</span>
                    </div>
                    <div className="flex flex-col w-full items-center md:items-start">
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

                    <div className="mt-10">
                        <Canal_youtube/>
                    </div>
                </div>

                {/* Mapa */}
                <div className="flex flex-col items-center md:mt-0 mt-10">
                    <span className="text-[#212a72FF] text-lg font-bold">SAIBA ONDE NOS ENCONTRAR</span>

                    <div className="flex flex-row items-center mt-2">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <MapPin weight="fill" className="text-[#212a72FF] mr-2"/>
                                <span>Endereço: Rua tal, PE, 12345-678</span>
                            </div>
                        </div>
                    </div>
                
                    {/* Mapa para Mobile */}
                    <div className="flex md:hidden border-4 border-[#212a72FF] rounded-md mt-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15797.160604879926!2d-34.91757025!3d-8.1734964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1661457244569!5m2!1spt-BR!2sbr" 
                            width="340" 
                            height="300" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>   
                    </div>

                    {/* Mapa para Desktop */}
                    <div className="hidden md:flex border-4 border-[#212a72FF] rounded-md mt-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15797.160604879926!2d-34.91757025!3d-8.1734964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1661457244569!5m2!1spt-BR!2sbr" 
                            width="450" 
                            height="450" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>    
                    </div>

                </div>
            </div>
        </>
    )
}