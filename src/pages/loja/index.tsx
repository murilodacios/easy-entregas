import { Image, ShoppingBagIcon, User } from "lucide-react";



export default function Loja() {

    return (
        <>


            <div className="max-w-screen-lg m-auto h-screen bg-slate-100">
                
                <div className="flex flex-row gap-2 justify-between items-center text-white p-4 bg-red-600">
                    <img src="/logo-white.svg" alt="" className="w-12" />
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2">
                            <ShoppingBagIcon />
                            <p>Carrinho</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <User />
                            <p>Conta</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 flex flex-col p-4">

                    <div className="rounded-full bg-slate-100 w-24 h-24 flex items-center justify-center text-slate-600">
                        <Image />
                    </div>

                </div>

            </div>




        </>
    )
}
