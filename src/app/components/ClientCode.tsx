'use client';

import OBR from"@owlbear-rodeo/sdk"
import { useEffect } from "react";
import { setupContextMenu } from "~/utils/contextMenu"

export function ClientCode() {
    useEffect(()=>
        OBR.onReady(()=>{
            setupContextMenu().catch(console.error)
        })
    ,[])
    return null
}