'use client'

import OBR from"@owlbear-rodeo/sdk"
import { setupContextMenu } from "~/utils/contextMenu"

OBR.onReady(()=>{
  setupContextMenu().catch(console.error)
})