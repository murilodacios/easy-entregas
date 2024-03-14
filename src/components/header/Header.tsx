import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import { Avatar, AvatarImage } from "../ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"

export const Header = () => {

    const router = usePathname()

    const url = router

    return (
        <div className='flex flex-row justify-between items-center w-full p-6 border border-t-0 border-x-0 '>
            <img src="/logo.svg" alt="" className="w-12"/>
           
           {/* <ul className='flex flex-row gap-4 text-sm items-center'>
                <li className={`${url === "/" ? "text-slate-500" : "text-slate-600"}`}>
                    <Link href="/">
                        Painel
                    </Link>
                </li>
            
                <li className={`${url === "/entregas" ? "text-slate-500" : "text-slate-600"}`}>
                    <Link href="/entregas">
                        Usuários
                    </Link>
                </li>
                
            </ul> */}
           
            <div className="flex flex-row gap-2 items-center">
                <div className="flex flex-row gap-2 items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <Button className="bg-slate-800">
                    Sair
                </Button>
            </div>
        </div>
    )
}