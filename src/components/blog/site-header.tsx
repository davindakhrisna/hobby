"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, TerminalIcon, CpuIcon, LayersIcon, UserIcon } from "lucide-react";

interface SiteHeaderProps {
  docNumber?: string;
  revision?: string;
  activeNav?: "portfolio" | "hobby" | "about";
}

export function SiteHeader({ docNumber = "DOC-SYS-0001", revision = "REV A", activeNav }: SiteHeaderProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-xs">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Title Block */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 group font-mono text-sm tracking-tight text-foreground font-bold hover:opacity-80 transition-opacity"
          >
            <span className="inline-flex size-6 items-center justify-center border border-foreground bg-foreground text-background font-mono text-xs">
              K
            </span>
            <span className="tracking-tighter">kryisnn // engineering</span>
          </Link>
          <Badge variant="outline" className="hidden sm:inline-flex text-[10px] font-mono uppercase rounded-none border-border px-1.5 py-0 text-muted-foreground">
            Systems Portfolio
          </Badge>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link
                    href="/"
                    className={`font-mono text-xs uppercase tracking-wider ${
                      activeNav === "portfolio" ? "text-foreground font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    Portfolio & Systems
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link
                    href="/hobby"
                    className={`font-mono text-xs uppercase tracking-wider ${
                      activeNav === "hobby" ? "text-foreground font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    Datasheets / Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link
                    href="/about"
                    className={`font-mono text-xs uppercase tracking-wider ${
                      activeNav === "about" ? "text-foreground font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    About / Spec
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a
                    href="https://github.com/davindakhrisna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
                  >
                    GitHub ↗
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Document metadata stamp */}
          <div className="flex items-center gap-2 border-l border-border pl-4 font-mono text-[11px] text-muted-foreground">
            <span className="font-semibold text-foreground">{docNumber}</span>
            <span>::</span>
            <Badge variant="secondary" className="text-[10px] font-mono px-1 py-0 h-4 rounded-none font-medium">
              {revision}
            </Badge>
          </div>
        </div>

        {/* Mobile menu sheet */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="font-mono text-[10px] text-muted-foreground pr-1">
            {docNumber}
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-none border-border" aria-label="Open Navigation Menu">
                <MenuIcon className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-l border-border bg-background p-6">
              <SheetHeader className="text-left border-b border-border pb-4">
                <SheetTitle className="font-mono text-sm tracking-tight">
                  kryisnn // system
                </SheetTitle>
                <div className="font-mono text-xs text-muted-foreground">
                  Navigation & Systems Directory
                </div>
              </SheetHeader>
              <div className="flex flex-col gap-3 py-6 font-mono text-sm">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-2 text-foreground hover:translate-x-1 transition-transform"
                >
                  <UserIcon className="size-4" />
                  <span>Portfolio & Systems</span>
                </Link>
                <Link
                  href="/hobby"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-2 text-foreground hover:translate-x-1 transition-transform"
                >
                  <CpuIcon className="size-4" />
                  <span>Datasheets / Blog</span>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-2 text-foreground hover:translate-x-1 transition-transform"
                >
                  <LayersIcon className="size-4" />
                  <span>About / Spec</span>
                </Link>
                <a
                  href="https://github.com/davindakhrisna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 text-muted-foreground hover:text-foreground hover:translate-x-1 transition-transform"
                >
                  <TerminalIcon className="size-4" />
                  <span>GitHub Profile ↗</span>
                </a>
              </div>
              <div className="mt-auto border-t border-border pt-4 font-mono text-[11px] text-muted-foreground space-y-1">
                <div>AUTHOR: Davinda Khrisna (kryisnn)</div>
                <div>ROLE: Systems & Full-Stack</div>
                <div>THEME: DATASHEET_PORTFOLIO</div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
