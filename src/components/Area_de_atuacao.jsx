import { ArrowBendDownRight } from "phosphor-react";

export default function Area_de_atuacao(){
    return(
        <>
            {/* Tópicos da área de atuação */}
            <div className="mt-12 md:text-start text-center">
                <span className="text-[#001eff] text-xl">ÁREA DE ATUAÇÃO</span>
            </div>
            <div className="flex w-full h-40 items-center justify-center bg-[#4f4f4f] mt-6"></div>

            {/* Tópicos */}
            <div className="flex flex-col w-full justify-center mt-4">

                <div className="flex flex-row items-center mt-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center">
                            <ArrowBendDownRight className="text-[#001eff] mr-2"/>
                            <span>Tópico</span>
                        </div>
                        <span className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </div>
                </div>

                <div className="flex flex-row items-center mt-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center">
                            <ArrowBendDownRight className="text-[#001eff] mr-2"/>
                            <span>Tópico</span>
                        </div>
                        <span className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </div>
                </div>

                <div className="flex flex-row items-center mt-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center">
                            <ArrowBendDownRight className="text-[#001eff] mr-2"/>
                            <span>Tópico</span>
                        </div>
                        <span className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </div>
                </div>

            </div>
        </>
    )
}