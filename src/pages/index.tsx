
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings } from "lucide-react";


export default function Home() {
  return (
    <>
      <Header />

      <div className='grid grid-cols-94'>

        <Sidebar />


        <div className='flex flex-col gap-4 p-6'>
          <p className='text-md'>Bom dia, Murilo Dácio</p>

          <div className="flex flex-row gap-2">

            <div>

              {/* DIV DO CARD */}
              <div className="flex flex-row gap-2 p-6 border rounded-sm items-center justify-between">

                <div className="flex flex-row gap-4 items-center">
                  <Settings />
                  <div className="flex flex-col">
                    <p className="font-bold">Termine a configuração da sua loja</p>
                    <p>Falta pouco para você começar a usar a sua loja</p>
                  </div>
                </div>


                <div className="flex flex-row gap-2">
                  <Button className="">Continuar</Button>
                  <Button variant="outline">Me lembre depois</Button>
                </div>

              </div>

            {/* RESTANTE DO CODIGO */}


            </div>

            <div>
              <p>div do lado</p>
            </div>



          </div>


        </div>

      </div>





    </>
  )
}
