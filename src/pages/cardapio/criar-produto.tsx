import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Header } from '@/components/header/Header';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { EyeIcon, Pen, PictureInPicture } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function CriarProduto() {

    return (
        <>

            <Header />

            <div className='grid grid-cols-94'>
                <Sidebar />

                <div className='flex flex-col gap-4 p-4'>

                    <p className='font-medium text-lg'>Cadastrar novo item</p>

                    <div className="border p-6 rounded-sm flex flex-col gap-4">

                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Nome do item</p>
                            <Input className="w-96" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Preço do item</p>
                            <Input className="w-64" />
                        </div>

                        <div className="flex flex-col gap-2">

                            <Select>
                                <SelectTrigger className="w-[280px]">
                                    <SelectValue placeholder="Categoria" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Entradas</SelectItem>
                                    <SelectItem value="dark">Bebidas</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Código do item (Apps de delivery, Integrações)</p>
                            <Input className="w-64" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Foto do produto</p>
                            <Input type="file" className="w-64" />
                        </div>

                        <div>
                            <Button>
                                Cadastrar produto
                            </Button>
                        </div>

                    </div>


                </div>

            </div>




        </>
    )
}
