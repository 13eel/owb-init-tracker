"use client";

import OBR from "@owlbear-rodeo/sdk";
import { useEffect, useState } from "react";
import { OwlbearSetup } from "~/owlbear-rodeo/setup";

export const Owlbear = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(
    () => (mounted ? OBR.onReady(() => void OwlbearSetup()) : undefined),
    [mounted],
  );
  return null;
};
