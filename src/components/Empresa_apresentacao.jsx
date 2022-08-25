import Image from "next/image";

import Logo from '../img/logo_body.png'

export default function Empresa_apresentacao(){
    return(
        <>
            {/* Logo e Nome da empresa - versão desktop */}
            <div className="hidden items-center md:flex w-full flex-col mt-20">
                <Image src={Logo} width={180} height={180} className="rounded-full"/>
                <span className="text-3xl">Leonardo Pereira</span>
                <span className="text-xl">Sociedade de Advocacia</span>
            </div>

            {/* Logo e Nome da empresa - versão mobile */}
            <div className="flex items-center md:hidden w-full flex-col mt-32">
                <Image src={Logo} width={90} height={90} className=" rounded-full "/>
                <span className="text-xl pt-2">Leonardo Pereira</span>
                <span className="text-lg">Sociedade de Advocacia</span>
            </div>

            {/* Descrição empresa */}
            <div className="flex flex-col items-center text-center pt-12">
            <span className="text-[#001eff] text-xl">QUEM SOMOS?</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
            </div>
        </>

    )
}