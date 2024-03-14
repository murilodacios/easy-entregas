import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Header } from '@/components/header/Header';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { EyeIcon, Pen, PictureInPicture } from "lucide-react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


import { Switch } from "@/components/ui/switch"


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



export default function Cardapio() {

    return (
        <>

            <Header />

            <div className='grid grid-cols-94'>
                <Sidebar />

                <div className='flex flex-col gap-4 p-4'>

                    <p className='font-medium text-lg'>Cardápio</p>


                    <Tabs defaultValue="produtos" className="">
                        <TabsList>
                            <TabsTrigger value="produtos">Produtos</TabsTrigger>
                            <TabsTrigger value="categorias">Categorias</TabsTrigger>
                            <TabsTrigger value="opcionais">Opcionais</TabsTrigger>
                        </TabsList>
                        <TabsContent value="produtos">
                            {/* Produtos */}

                            <div className='flex flex-col gap-4 border p-6 rounded-sm'>

                                <div>
                                    <Button variant="outline">
                                        <a href="/cardapio/criar-produto">
                                            Cadastrar produto
                                        </a>
                                    </Button>

                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-sm">Entradas</p>

                                    <div className="grid grid-cols-3 gap-4">

                                        <div className="flex flex-row items-start border gap-4 p-4 rounded-md">
                                            <div className="flex bg-slate-100 w-24 h-24">
                                                {/* Imagem */}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-sm font-bold">Nome do produto</p>
                                                <p className="text-sm">Descrição do produto</p>
                                                <p className="text-sm">R$ 14,99</p>
                                                <Switch />
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-start border gap-4 p-4 rounded-md">
                                            <div className="flex bg-slate-100 w-24 h-24">
                                                {/* Imagem */}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-sm font-bold">Nome do produto</p>
                                                <p className="text-sm">Descrição do produto</p>
                                                <p className="text-sm">R$ 14,99</p>
                                                <Switch />
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-start border gap-4 p-4 rounded-md">
                                            <div className="flex bg-slate-100 w-24 h-24">
                                                {/* Imagem */}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-sm font-bold">Nome do produto</p>
                                                <p className="text-sm">Descrição do produto</p>
                                                <p className="text-sm">R$ 14,99</p>
                                                <Switch />
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-start border gap-4 p-4 rounded-md">
                                            <div className="flex bg-slate-100 w-24 h-24">
                                                {/* Imagem */}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-sm font-bold">Nome do produto</p>
                                                <p className="text-sm">Descrição do produto</p>
                                                <p className="text-sm">R$ 14,99</p>
                                                <Switch />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </TabsContent>
                        <TabsContent value="categorias" className="flex flex-col gap-2">
                            {/* Categorias */}

                            <div>
                                <Sheet>
                                    <SheetTrigger className="border rounded-md text-sm py-2 px-4 font-medium">Criar categoria</SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Cadastrar categoria</SheetTitle>
                                            <SheetDescription className="flex flex-col gap-4 pt-4">
                                                
                                                <Input placeholder="Nome da categoria"/>
                                                <Button>Cadastrar</Button>
                                            </SheetDescription>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                            </div>


                            <div className="border p-6 rounded-sm">
                                <Table>

                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">ID</TableHead>
                                            <TableHead>Nome</TableHead>
                                            <TableHead>Quantidade de produtos</TableHead>
                                            <TableHead >Ações</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">#1</TableCell>
                                            <TableCell>Entradas</TableCell>
                                            <TableCell>10 items</TableCell>
                                            <TableCell>
                                                <div className="flex flex-row gap-2">
                                                    <Pen size={16} />
                                                    <EyeIcon size={16} />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">#2</TableCell>
                                            <TableCell>Bebidas</TableCell>
                                            <TableCell>20 items</TableCell>
                                            <TableCell>
                                                <div className="flex flex-row gap-2">
                                                    <Pen size={16} />
                                                    <EyeIcon size={16} />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>

                        </TabsContent>
                        <TabsContent value="opcionais" className="flex flex-col gap-2">
                            {/* Opcionais */}

                        </TabsContent>
                    </Tabs>

                </div>

            </div>




        </>
    )
}
