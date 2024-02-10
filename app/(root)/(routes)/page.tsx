"use client"
import { StoreModal } from "@/components/modals/store-modal";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

const SetupPage=()=> {
    const onOpen= useStoreModal((state)=>state.onOpen);
    const isOpen= useStoreModal((state)=>state.isOpen);

    useEffect(()=>{
        if(!isOpen){
            onOpen();
        }//this will do that we can dlt it without having a store. 
    },[isOpen,onOpen]);
  return (
    <>
    <div className='p-4'>
        <StoreModal/>
        </div>
    </>
  )
}
export default SetupPage;

