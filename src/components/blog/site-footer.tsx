import * as React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card/50 text-xs font-mono text-muted-foreground">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="space-y-1.5">
            <div className="font-semibold text-foreground tracking-tight">
              kryisnn // technical monograph
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground font-sans max-w-xs">
              Hardware architecture, systems programming, and homelab infrastructure. Published as technical datasheets.
            </p>
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="font-semibold text-foreground uppercase tracking-wider">
              Document Specifications
            </div>
            <div>SPEC: EC-DS-2026.04</div>
            <div>TYPESET: Archivo / Geist Mono</div>
            <div>PALETTE: Graphite / Neutral Gray</div>
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="font-semibold text-foreground uppercase tracking-wider">
              Directory Routing
            </div>
            <div className="flex flex-col gap-1">
              <Link href="/" className="hover:text-foreground hover:underline">
                Index / Archive
              </Link>
              <Link href="/about" className="hover:text-foreground hover:underline">
                Architecture Spec / About
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6 border-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-muted-foreground">
          <div>© {new Date().getFullYear()} kryisnn. Content and media cited under respective public archives.</div>
          <div className="flex items-center gap-3">
            <span>SEC_LEVEL: UNCLASSIFIED</span>
            <span>•</span>
            <span>REV_BUILD: 2026.10</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
