import Image from "next/image";

import Logo from '../img/logo_body.png'

export default function Empresa_apresentacao(){
    return(
        <>
            {/* Logo e Nome da empresa - versão desktop */}
            <div className="hidden items-center lg:flex w-full flex-col mt-20 shadow-lg pb-6">
                <div className="rounded-full border-[#141e30]">
                    <Image src={Logo} width={180} height={180} className="rounded-full"/>
                </div>
                <span className="text-3xl mt-2">Leonardo Pereira</span>
                <span className="text-xl font-raleway">Sociedade de Advocacia</span>
            </div>

            {/* Logo e Nome da empresa - versão mobile */}
            <div className="flex items-center lg:hidden w-full flex-col mt-14 shadow-lg pb-6">
                <Image src={Logo} width={90} height={90} className=" rounded-full"/>
                <span className="text-xl pt-2">Leonardo Pereira</span>
                <span className="text-lg font-raleway">Sociedade de Advocacia</span>
            </div>

            {/* Descrição empresa */}
            <div className="flex flex-col items-center text-center mt-12 pl-10 pr-10 p-2">
            <span className="text-[#212a72FF] text-xl font-bold">QUEM SOMOS?</span>
            <span className="font-raleway mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
            </div>
        </>

    )
}