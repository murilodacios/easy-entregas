import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from '@/components/ui/button'
import { BadgeCheck } from "lucide-react"

export const OverviewHome = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <Card className="rounded-md shadow-sm">
                <CardHeader>
                    <CardTitle>Projetos</CardTitle>
                    <CardDescription>Projetos que você acompanha</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <p className='text-2xl font-bold'>12</p>
                    <div>
                        <Button variant="outline" size="sm">Ver projetos</Button>
                    </div>
                </CardContent>

            </Card>

            <Card className="rounded-md shadow-sm">
                <CardHeader>
                    <CardTitle>Inventário de gases</CardTitle>
                    <CardDescription>Gases de efeito estufa em sua empresa</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-2xl font-bold'>1000 CO2e</p>
                </CardContent>
            </Card>

            <Card className="rounded-md shadow-sm">
                <CardHeader>
                    <CardTitle>ESG</CardTitle>
                    <CardDescription>Seus certificados ESG</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row gap-2 items-center">
                        <p className='text-2xl font-bold'>Em dia</p>
                        <BadgeCheck />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}