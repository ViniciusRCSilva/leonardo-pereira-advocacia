import { ArrowBendDownRight } from "phosphor-react";

export default function Area_de_atuacao(){
    return(
        <>
            {/* Tópicos da área de atuação */}
            <div className="mt-12 lg:text-start text-center">
                <span className="text-[#212a72FF] text-xl font-bold">ÁREA DE ATUAÇÃO</span>
            </div>

            <div className="flex w-full justify-center">
                <div className="flex w-full h-24 lg:h-40 mt-6 bg-banner2 bg-no-repeat bg-center bg-cover rounded-lg"></div>
            </div>

            {/* Tópicos */}
            <div className="flex flex-col w-full justify-center mt-4">

                <div className="flex flex-row items-center mt-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center text-lg">
                            <ArrowBendDownRight className="text-[#212a72FF] mr-2"/>
                            <span>Tópico</span>
                        </div>
                        <span className="pl-4 font-raleway">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </div>
                </div>

                <div className="flex flex-row items-center mt-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center text-lg">
                            <ArrowBendDownRight className="text-[#212a72FF] mr-2"/>
                            <span>Tópico</span>
                        </div>
                        <span className="pl-4 font-raleway">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </div>
                </div>

                <div className="flex flex-row items-center mt-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center text-lg">
                            <ArrowBendDownRight className="text-[#212a72FF] mr-2"/>
                            <span>Tópico</span>
                        </div>
                        <span className="pl-4 font-raleway">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </div>
                </div>

            </div>
        </>
    )
}