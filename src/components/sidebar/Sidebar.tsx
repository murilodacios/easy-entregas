
import { Button } from '@/components/ui/button'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



import { Eye, ShieldCheck, Box, Settings, CircleUser, Home, Wallet, BoxIcon, DollarSign, ShoppingBag, Menu, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export const Sidebar = () => {

    const router = usePathname()

    const url = router

    return (
        <div className='border border-b-0 border-t-0 h-screen p-4'>

            <div className="flex flex-col gap-2 pl-2">

                <div>
                    <ul className='flex flex-col gap-2 text-md pt-2'>
                        <li className={url === "/" ? "text-slate-900 flex flex-row gap-2 items-center bg-slate-100 p-4 rounded-3xl font-medium" : "text-slate-900  flex flex-row gap-2 items-center p-4 rounded-3xl"}>
                            <Home size="16" />
                            <Link href="/">
                                Painel
                            </Link>
                        </li>

                        <li className={url === "/cardapio" ? "text-slate-900 flex flex-row gap-2 items-center bg-slate-100 p-4 rounded-3xl font-medium" : "text-slate-900  flex flex-row gap-2 items-center p-4 rounded-3xl"}>
                            <Menu size="16" />
                            <Link href="/cardapio">
                                Cardápio
                            </Link>
                        </li>

                        <li className={url === "/entregas" ? "text-slate-900 flex flex-row gap-2 items-center bg-slate-100 p-4 rounded-3xl font-medium" : "text-slate-900  flex flex-row gap-2 items-center p-4 rounded-3xl"}>
                            <Box size="16" />
                            <Link href="/entregas">
                                Entregas
                            </Link>
                        </li>

                        <li className={url === "/financeiro" ? "text-slate-900 flex flex-row gap-2 items-center bg-slate-100 p-4 rounded-3xl font-medium" : "text-slate-900  flex flex-row gap-2 items-center p-4 rounded-3xl"}>
                            <DollarSign size="16" />
                            <Link href="/financeiro">
                                Financeiro
                            </Link>
                        </li>

                        <li className={url === "/clientes" ? "text-slate-900 flex flex-row gap-2 items-center bg-slate-100 p-4 rounded-3xl font-medium" : "text-slate-900  flex flex-row gap-2 items-center p-4 rounded-3xl"}>
                            <User2 size="16" />
                            <Link href="/clientes">
                                Clientes
                            </Link>
                        </li>
                        
                        <li className={url === "/loja" ? "text-slate-900 flex flex-row gap-2 items-center bg-slate-100 p-4 rounded-3xl font-medium" : "text-slate-900  flex flex-row gap-2 items-center p-4 rounded-3xl"}>
                            <ShoppingBag size="16" />
                            <Link href="/loja">
                                Minha loja
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-4 pt-4'>
                    <div>
                        <p className='text-md text-slate-500 pb-4'>Outros</p>
                        <ul className='flex flex-col gap-2 text-md pt-2'>
                            <li className="text-slate-900 flex flex-row gap-2 items-center pl-4">
                                <ShieldCheck size="16" />
                                <Link href="/">
                                    Meu plano
                                </Link>
                            </li>

                        </ul>
                    </div>


                </div>
            </div>



        </div>
    )
}