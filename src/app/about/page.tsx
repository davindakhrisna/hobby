import Link from "next/link";
import { SiteHeader } from "@/components/blog/site-header";
import { SiteFooter } from "@/components/blog/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon, TerminalIcon, CpuIcon, LayersIcon } from "lucide-react";

export const metadata = {
  title: "Architecture Specification & System Standard",
  description: "About kryisnn engineering datasheets, aesthetic philosophy, and hardware telemetry principles.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader docNumber="DOC-STD-0001" revision="REV A" />

      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <Button asChild variant="ghost" size="sm" className="font-mono text-xs gap-1">
            <Link href="/">
              <ArrowLeftIcon className="size-3" /> Back to Registry Index
            </Link>
          </Button>
          <span className="font-mono text-xs text-muted-foreground">
            STANDARD: EC-DS-2026.04
          </span>
        </div>

        <article className="border border-border bg-card p-6 sm:p-10 space-y-8 font-sans">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-[10px] rounded-none">
                AUTHOR: KRYISNN
              </Badge>
              <Badge variant="outline" className="font-mono text-[10px] rounded-none">
                STATUS: ACTIVE
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
              System Specification & Publishing Ethos
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Why this publication exists as electronic hardware datasheets rather than generic blog cards.
            </p>
          </div>

          <Separator className="border-border" />

          <div className="prose prose-neutral max-w-none text-foreground/90 space-y-6 text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl font-bold text-foreground font-sans">1.0 The Datasheet as a Medium</h2>
            <p>
              In hardware engineering, datasheets do not seek to entertain or upsell. They exist to convey precise operational tolerances, absolute maximum ratings, pinouts, and timing diagrams. They treat the engineer&apos;s time as scarce and valuable.
            </p>
            <p>
              This publication applies the exact same discipline to technical software writing. Every post has a stable document identifier, revision log, enumerated figures, and verified sources.
            </p>

            <h2 className="text-xl font-bold text-foreground font-sans pt-4">2.0 Media Discipline & Skeletons</h2>
            <p>
              Modern web articles regularly stutter, jump, and freeze during page render as megabytes of unoptimized trackers, advertisements, and auto-playing video players hydrate.
            </p>
            <p>
              Here, all figures adhere to strict constraints:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Zero Layout Shift:</strong> Every image and video block reserves exact aspect ratio dimensions using shadcn <code className="font-mono text-xs bg-muted px-1 py-0.5">AspectRatio</code>.</li>
              <li><strong>Text First:</strong> Prose is readable instantly. Images lazy-load under pulsed skeleton placeholders.</li>
              <li><strong>Click-to-Load Videos:</strong> No YouTube iframe is injected until the user explicitly commands it via the initialization button.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground font-sans pt-4">3.0 Component System</h2>
            <p>
              Constructed using Next.js 16 (App Router), Tailwind CSS v4, and Radix UI primitives via shadcn/ui. The design system eschews saturated accents and loud gradients in favor of high-contrast graphite ink, crisp geometric borders, and Archivo + Geist typography.
            </p>
          </div>

          <div className="border border-border bg-muted/20 p-6 space-y-3 font-mono text-xs">
            <div className="font-semibold text-foreground uppercase tracking-wider">
              Verification Matrix
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CpuIcon className="size-4 text-foreground" />
                <span>Responsive Grid (320px to 4K)</span>
              </div>
              <div className="flex items-center gap-2">
                <TerminalIcon className="size-4 text-foreground" />
                <span>Zero Loud Colors / Pure Minimalist</span>
              </div>
              <div className="flex items-center gap-2">
                <LayersIcon className="size-4 text-foreground" />
                <span>20+ shadcn/ui Atomic Components</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Verified Public Commons Media Only</span>
              </div>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
