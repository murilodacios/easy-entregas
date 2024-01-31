
import { Header } from '@/components/header/Header';

import { Sidebar } from '@/components/sidebar/Sidebar';



export default function Financeiro() {

  return (
    <>

      <Header />

      <div className='grid grid-cols-94'>
        <Sidebar />

        <div className='flex flex-col gap-4 p-4'>

          <p className='font-medium text-lg'>Financeiro</p>
        
        </div>

      </div>




    </>
  )
}
