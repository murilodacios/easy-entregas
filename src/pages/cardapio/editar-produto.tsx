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


export default function EditarProduto() {

    return (
        <>

            <Header />

            <div className='grid grid-cols-94'>
                <Sidebar />

                <div className='flex flex-col gap-4 p-4'>

                    <p className='font-medium text-lg'>Editar produto</p>



                </div>

            </div>




        </>
    )
}
