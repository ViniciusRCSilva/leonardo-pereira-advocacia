import { Disclosure } from '@headlessui/react'

import { CaretDown } from "phosphor-react";

export default function Perguntas_frequentes(){
    return(
        <>
            <div className="mt-12 md:text-start text-center mb-4">
                <span className="text-[#001eff] text-xl">PERGUNTAS FREQUENTES</span>
            </div>

            <div className='flex flex-col md:items-start items-center'>
                <Disclosure>
                    <Disclosure.Button className="py-2 flex flex-row items-center text-white bg-[#212a72FF] md:hover:bg-[#1f33c5] transition-colors p-4 rounded-lg mb-4">
                    Quais os propósitos para essa pergunta?
                    <CaretDown className="ml-2"/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 mb-4 md:text-left text-center">
                    <span className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </Disclosure.Panel>
                </Disclosure>

                <Disclosure>
                    <Disclosure.Button className="py-2 flex flex-row items-center text-white bg-[#212a72FF] md:hover:bg-[#1f33c5] transition-colors p-4 rounded-lg mb-4">
                    Quais os propósitos para essa pergunta?
                    <CaretDown className="ml-2"/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 mb-4 md:text-left text-center">
                    <span className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </Disclosure.Panel>
                </Disclosure>

                <Disclosure>
                    <Disclosure.Button className="py-2 flex flex-row items-center text-white bg-[#212a72FF] md:hover:bg-[#1f33c5] transition-colors p-4 rounded-lg mb-4">
                    Quais os propósitos para essa pergunta?
                    <CaretDown className="ml-2"/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 mb-4 md:text-left text-center">
                    <span className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo quisquam autem non libero? Velit assumenda ea laborum, ullam quas cum sapiente tempore ratione nostrum possimus ad reiciendis voluptatum. Cumque.</span>
                    </Disclosure.Panel>
                </Disclosure>
            </div>

        </>
    )
}