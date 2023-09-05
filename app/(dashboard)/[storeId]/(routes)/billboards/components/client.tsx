"use client";
import { useParams, useRouter } from "next/navigation";


import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";


interface BillboardClientProps {
    // data: Billboard
}
export const BillboardClient = () => {
    const params = useParams();
    const router = useRouter();
    const data = [];
    return (
        <>
        <div className="flex items-center justify-between">
          <Heading title={`Billboards (${data.length})`} description="Manage billboards for your store" />
          <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
        <Separator />
        {/* <DataTable searchKey="label" columns={columns} data={data} /> */}
        <Heading title="API" description="API Calls for Billboards" />
        <Separator />
        {/* <ApiList entityName="billboards" entityIdName="billboardId" /> */}
      </>
    )
}
