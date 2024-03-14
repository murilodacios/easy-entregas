import { Sidebar } from '@/components/sidebar/Sidebar';
import { Header } from '@/components/header/Header';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Table } from 'lucide-react';
import { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


export default function Entregas() {

    return (

        <>
            <Header />

            <div className='grid grid-cols-94'>
                <Sidebar />

                <div className='flex flex-col gap-4 p-4'>

                    <p className='font-medium text-lg'>Entregas</p>


                    <div className='grid grid-cols-4 gap-2 min-h-screen'>

                        <div className='border p-4 rounded-sm'>
                            <p className='text-sm'>Aguardando confirmação</p>
                        </div>

                        <div className='border p-4 rounded-sm'>
                            <p className='text-sm'>Em preparação</p>
                        </div>

                        <div className='border p-4 rounded-sm'>
                            <p className='text-sm'>Saiu para a entrega</p>
                        </div>

                        <div className='border p-4 rounded-sm'>
                            <p className='text-sm'>Entregue</p>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}
