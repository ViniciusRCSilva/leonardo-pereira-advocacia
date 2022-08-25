import { MapPin, Phone, GoogleLogo, InstagramLogo, TiktokLogo } from "phosphor-react";

export default function Contatos(){
    return(
        <>
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between mt-12">

                <div className="flex flex-col">

                    <div className="md:text-start text-center">
                        <span className="text-[#001eff] text-xl">CONTATOS</span>
                    </div>
                    {/* Lista de contatos */}
                    <div className="flex flex-row items-center mt-2">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <Phone className="text-[#001eff] mr-2"/>
                                <span>Telefone: (81) 9 9999-9999</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center mt-2">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <GoogleLogo className="text-[#001eff] mr-2"/>
                                <span>E-Mail: email@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center mt-2">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <InstagramLogo className="text-[#001eff] mr-2"/>
                                <span>Instagram: @nomeInstagram</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center mt-2">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <TiktokLogo className="text-[#001eff] mr-2"/>
                                <span>Tiktok: @nomeTiktok</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mapa */}
                <div className="flex flex-col items-center md:mt-0 mt-6">
                    <span className="text-[#001eff] text-xl">SAIBA ONDE NOS ENCONTRAR!</span>
                
                    {/* Mapa para Mobile */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15797.160604879926!2d-34.91757025!3d-8.1734964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1661457244569!5m2!1spt-BR!2sbr" 
                        width="300" 
                        height="300" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        className="flex md:hidden rounded-md"
                    ></iframe>   

                    {/* Mapa para Desktop */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15797.160604879926!2d-34.91757025!3d-8.1734964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1661457244569!5m2!1spt-BR!2sbr" 
                        width="400" 
                        height="350" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        className="hidden md:flex rounded-md"
                    ></iframe>    

                    <div className="flex flex-row items-center mt-2">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center">
                                <MapPin className="text-[#001eff] mr-2"/>
                                <span>Endereço: Rua tal, PE, 12345-678</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}