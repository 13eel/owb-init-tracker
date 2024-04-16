"use client";

import OBR from "@owlbear-rodeo/sdk";
import { useEffect } from "react";
import { setupContextMenu } from "~/utils/contextMenu";

export default function ClientCode() {
  useEffect(() => {
    const cleanup = OBR.onReady(() => {
      setupContextMenu().catch(console.error);
    });
    return cleanup;
  }, []);
  return null;
}
