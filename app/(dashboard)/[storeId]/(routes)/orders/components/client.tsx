"use client";
import { Heading} from "@/components/ui/heading";

import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
    data:OrderColumn[]
}
export const OrderClient:React.FC<OrderClientProps>=({
    data
})=>{
    const router=useRouter();
    const params=useParams();
    return(
        <>
        
            <Heading
            title={`Orders (${data.length})`}
            description="Manage orders for your store"
            />
          

        
        <Separator/>
        <DataTable searchKey="products" columns={columns} data={data}/>
        
        </>

    )
}