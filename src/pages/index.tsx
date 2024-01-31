
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";


export default function Home() {
  return (
    <>
      <Header />

      <div className='grid grid-cols-94'>

        <Sidebar />


        <div className='flex flex-col gap-4 p-6'>
          <p className='text-md'>Bom dia, Murilo Dácio</p>

         
        </div>

      </div>





    </>
  )
}
