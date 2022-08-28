import Image from "next/image";

import foto_perfil from '../img/person_photo.jpeg'

export default function Empresa_apresentacao(){
    return(
        <>
            {/* Apresentação Identidade - Leonardo Pereira */}
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start w-full mt-6 mb-6">
            
                {/* Foto - Mobile */}
                <div className="flex md:hidden border-white border-8 rounded-lg">
                    <Image src={foto_perfil} width={100} height={100}/>
                </div>
                {/* <div className="flex md:hidden w-20 h-20 bg-white rounded-lg"></div> */}

                {/* Nome e descrição */}
                <div className="flex flex-col w-full justify-center items-center md:w-[50%] md:items-start">
                    <span className="uppercase text-xl pt-6 md:pt-0 font-bold">Leonardo Pereira</span>
                    <span className="text-center md:text-left mt-6 font-raleway">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                </div>

                {/* Foto - Desktop */}
                <div className="hidden md:flex border-white border-8 rounded-lg">
                    <Image src={foto_perfil} width={200} height={200}/>
                </div>
                {/* <div className="hidden md:flex w-80 h-80 bg-white rounded-lg"></div> */}                         

            </div>            
        </>

    )
}