import Link from "next/link";
import { getAllPosts } from "@/data/posts";
import { SiteHeader } from "@/components/blog/site-header";
import { SiteFooter } from "@/components/blog/site-footer";
import { ArchiveTable } from "@/components/blog/archive-table";
import { MediaBlock } from "@/components/blog/media-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const metadata = {
  title: "Engineering Notes & Hardware Architecture Datasheets",
  description: "Technical blog and system datasheets by kryisnn. Computing systems, infrastructure, homelab, and historical hardware architecture.",
};

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = posts[0]; // Apollo Guidance Computer

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader docNumber="DOC-IDX-0001" activeNav="hobby" revision="REV A" />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 space-y-12">
        {/* Title Block (Datasheet Header Strip) */}
        <section className="border border-border bg-card p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Title and Core Statement */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                <span>kryisnn // technical monograph</span>
                <span>•</span>
                <span>SPEC EC-DS-2026.04</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans leading-[1.1]">
                Engineering Notes & System Datasheets
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans max-w-2xl">
                A public laboratory journal documenting low-level computing architectures,
                homelab infrastructure, hardware magnetics, and systems engineering principles.
                Every post is structured as an engineering component specification.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="font-mono text-[11px] rounded-none py-1 border-border">
                  TOTAL SPECIFICATIONS: {posts.length}
                </Badge>
                <Badge variant="outline" className="font-mono text-[11px] rounded-none py-1 border-border">
                  STYLE: DATASHEET SPEC
                </Badge>
                <Badge variant="outline" className="font-mono text-[11px] rounded-none py-1 border-border">
                  VERIFIED SOURCES ONLY
                </Badge>
              </div>
            </div>

            {/* Right 5 cols: Description & Features block */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8 space-y-4 font-sans text-xs">
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Document Protocol
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  Publications contain verifiable historical schematics, oscillograms, and archival video streams. Media is lazy-loaded with skeleton placeholders to prioritize text accessibility.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-border/60">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Core Architectural Sections
                </span>
                <ul className="space-y-1 text-muted-foreground font-mono text-[11px]">
                  <li className="flex items-center gap-2">
                    <span className="text-foreground font-bold">01.</span>
                    <span>Apollo Guidance Computer Block II</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-foreground font-bold">02.</span>
                    <span>Low-Power 10GbE Homelab Cluster</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-foreground font-bold">03.</span>
                    <span>Magnetic Core Memory Hysteresis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-foreground font-bold">04.</span>
                    <span>Resilient Software Architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post Spotlight (Figure 1 on Desktop) */}
        {featuredPost && (
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span className="font-semibold text-foreground">FIGURE 1 // CURRENT FEATURED SPECIFICATION</span>
                <span>•</span>
                <span>{featuredPost.docNumber}</span>
              </div>
              <Button asChild variant="ghost" size="sm" className="font-mono text-xs h-7 gap-1">
                <Link href={`/posts/${featuredPost.slug}`}>
                  Read Full Spec <ArrowRightIcon className="size-3" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-border bg-card p-6">
              {/* Media Block for Featured Spec */}
              <div className="lg:col-span-7">
                <MediaBlock
                  figure={featuredPost.figures["fig-1"]}
                  figureNumber="FIG-1.0"
                  priority={true}
                />
              </div>

              {/* Specification Abstract & Quick Specs */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="rounded-none font-mono text-[11px]">
                      {featuredPost.category}
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground">
                      {featuredPost.readingTime} read
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
                    <Link href={`/posts/${featuredPost.slug}`} className="hover:underline">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {featuredPost.description}
                  </p>
                </div>

                {/* Quick specs grid */}
                <div className="border border-border bg-muted/20 p-4 space-y-2">
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
                    Technical Specifications
                  </div>
                  <div className="divide-y divide-border/60 font-mono text-xs">
                    {featuredPost.specs.map((s, i) => (
                      <div key={i} className="py-1.5 flex justify-between gap-4">
                        <span className="text-muted-foreground">{s.label}:</span>
                        <span className="font-medium text-foreground text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full font-mono text-xs uppercase tracking-wider rounded-none h-10 shadow-none">
                  <Link href={`/posts/${featuredPost.slug}`}>
                    Open Document {featuredPost.docNumber}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Parts Selection Table (The Complete Archive) */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span className="font-semibold text-foreground">DOCUMENT REGISTRY</span> // PARTS SELECTION TABLE
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              SORT: CHRONOLOGICAL_DESC
            </span>
          </div>

          <ArchiveTable posts={posts} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
