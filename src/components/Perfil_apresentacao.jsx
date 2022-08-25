import Image from "next/image";

export default function Empresa_apresentacao(){
    return(
        <>
            {/* Apresentação Identidade - Leonardo Pereira */}
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start w-full pt-12">
            
            {/* Foto - Mobile */}
            <div className="flex md:hidden w-20 h-20 bg-[#4f4f4f]"></div>

            {/* Nome e descrição */}
            <div className="flex flex-col w-full justify-center items-center md:w-[50%] md:items-start">
                
                <span className="text-[#001eff] uppercase text-xl pt-6 md:pt-0">Leonardo Pereira</span>
                <span className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
            </div>

            {/* Foto - Desktop */}
            <div className="hidden md:flex w-80 h-80 bg-[#4f4f4f]"></div>             

            </div>            
        </>

    )
}