import { Disclosure } from '@headlessui/react'

import { CaretDown } from "phosphor-react";

export default function Perguntas_frequentes(){
    return(
        <div className='mt-6 mb-6'>
            <div className="lg:text-start text-center mb-4">
                <span className="text-xl font-bold">PERGUNTAS FREQUENTES</span>
            </div>

            <div className='flex flex-col lg:items-start items-center'>
                <Disclosure>
                    <Disclosure.Button className="py-2 flex flex-row items-center p-4 rounded-lg mb-4 link link-underline link-underline-white">
                    Pergunta frequente 1
                    <CaretDown className="ml-2 animate-pulse"/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-white text-black p-4 rounded-b-3xl rounded-r-3xl mb-4 lg:text-left text-center">
                    <span className="pl-4 font-raleway">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </Disclosure.Panel>
                </Disclosure>

                <Disclosure>
                    <Disclosure.Button className="py-2 flex flex-row items-center p-4 rounded-lg mb-4 link link-underline link-underline-white">
                    Pergunta frequente 2
                    <CaretDown className="ml-2 animate-pulse"/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-white text-black p-4 rounded-b-3xl rounded-r-3xl mb-4 lg:text-left text-center">
                    <span className="pl-4 font-raleway">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </Disclosure.Panel>
                </Disclosure>

                <Disclosure>
                    <Disclosure.Button className="py-2 flex flex-row items-center p-4 rounded-lg mb-4 link link-underline link-underline-white">
                    Pergunta frequente 3
                    <CaretDown className="ml-2 animate-pulse"/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-white text-black p-4 rounded-b-3xl rounded-r-3xl mb-4 lg:text-left text-center">
                    <span className="pl-4 font-raleway">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </Disclosure.Panel>
                </Disclosure>
            </div>

        </div>
    )
}