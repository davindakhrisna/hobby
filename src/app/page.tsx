import Link from "next/link";
import { PROFILE } from "@/data/portfolio";
import { getAllPosts } from "@/data/posts";
import { SiteHeader } from "@/components/blog/site-header";
import { SiteFooter } from "@/components/blog/site-footer";
import { GitHubSvg, LinkedInSvg } from "@/components/blog/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  ShieldCheckIcon,
} from "lucide-react";

export const metadata = {
  title: "Davinda Khrisna Adyatma (kryisnn) // Systems & Engineering Portfolio",
  description: "Personal engineering portfolio of Davinda Khrisna Adyatma (kryisnn). Declarative operating systems, low-level kernels, homelab infrastructure, and minimalist web applications.",
};

export default function PortfolioPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader docNumber="SPEC-ENG-2026" revision="PROD" activeNav="portfolio" />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 space-y-12">
        {/* Engineering Title Block / Hero Section */}
        <section className="border border-border bg-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Identity and Engineering Statement */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                <span className="font-semibold text-foreground">{PROFILE.handle}</span>
                <span>•</span>
                <span>{PROFILE.role}</span>
                <span>•</span>
                <span>{PROFILE.location}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground font-sans leading-[1.1]">
                  {PROFILE.name}
                </h1>
                <p className="font-mono text-xs sm:text-sm text-foreground/80 tracking-tight">
                  // {PROFILE.headline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans max-w-2xl">
                {PROFILE.bio}
              </p>

              {/* Status and Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="font-mono text-xs uppercase tracking-wider rounded-none h-9 px-4">
                  <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <GitHubSvg className="size-3.5 fill-current" />
                    GitHub Profile
                  </a>
                </Button>
                <Button asChild variant="outline" size="default" className="font-mono text-xs uppercase tracking-wider rounded-none h-9 px-4 border-border">
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <LinkedInSvg className="size-3.5 fill-current" />
                    LinkedIn Network
                  </a>
                </Button>
                <Button asChild variant="ghost" size="default" className="font-mono text-xs uppercase tracking-wider rounded-none h-9 px-4">
                  <Link href="/hobby" className="gap-2">
                    Technical Blog / Datasheets
                    <ArrowRightIcon className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right 5 cols: Telemetry and Quick Hardware/OS Stats */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="font-semibold uppercase text-foreground">OPERATING PROFILE</span>
                <Badge variant="secondary" className="font-mono text-[10px] rounded-none py-0">
                  SYSTEM READY
                </Badge>
              </div>

              <div className="divide-y divide-border/60 text-[11px] text-muted-foreground">
                <div className="py-1.5 flex justify-between">
                  <span>Primary OS Architecture:</span>
                  <span className="font-medium text-foreground">NixOS (Flakes / Reproducible)</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Low-Level Environments:</span>
                  <span className="font-medium text-foreground">QEMU/KVM + PXE + Libvirt</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Engineering Paradigm:</span>
                  <span className="font-medium text-foreground">Zero-Dependency / Let-It-Crash</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Networking Fabric:</span>
                  <span className="font-medium text-foreground">Tailscale Mesh / SFP+ 10GbE</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>Editor & Environment:</span>
                  <span className="font-medium text-foreground">Neovim (Lua) + Hyprland (Wayland)</span>
                </div>
              </div>

              <div className="border border-border/80 bg-muted/20 p-3 space-y-1 font-mono text-[11px]">
                <div className="text-foreground font-semibold flex items-center gap-1.5">
                  <ShieldCheckIcon className="size-3.5 text-foreground" />
                  <span>Verified Public Artifacts</span>
                </div>
                <p className="text-muted-foreground leading-normal font-sans text-xs">
                  All repositories listed below are publicly inspectable on GitHub under <code className="font-mono text-foreground">davindakhrisna</code>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Engineered Systems & Repositories (The Catalog) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span className="font-semibold text-foreground">SYSTEM CATALOG</span> // ENGINEERED ARTIFACTS & PLATFORMS
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              INDEX: {PROFILE.projects.length} SYSTEMS DOCUMENTED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILE.projects.map((proj) => (
              <div
                key={proj.id}
                className="border border-border bg-card p-6 flex flex-col justify-between group hover:border-foreground/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-mono text-[10px] rounded-none border-border">
                      {proj.category}
                    </Badge>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {proj.repo.split("/")[1]}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-lg text-foreground tracking-tight group-hover:underline">
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                        <span>{proj.name}</span>
                        <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                      </a>
                    </h3>
                    <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
                      {proj.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Architectural Highlight */}
                  {proj.highlightSnippet && (
                    <div className="border-l-2 border-border pl-2.5 py-0.5 font-mono text-[11px] text-foreground/80 leading-relaxed bg-muted/10">
                      {proj.highlightSnippet}
                    </div>
                  )}

                  {/* Metrics Table */}
                  <div className="border border-border/60 bg-muted/20 p-2.5 font-mono text-[10px] divide-y divide-border/40">
                    {proj.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="py-1 flex justify-between gap-2">
                        <span className="text-muted-foreground">{m.label}:</span>
                        <span className="font-medium text-foreground text-right">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {proj.tech.slice(0, 3).map((t) => (
                      <Badge key={t} variant="secondary" className="font-mono text-[10px] px-1 py-0 rounded-none">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 font-mono text-xs">
                    <Button asChild variant="ghost" size="sm" className="h-7 px-2 font-mono text-[11px]">
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
                        <span>Source</span>
                        <ExternalLinkIcon className="size-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Competency Matrix */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span className="font-semibold text-foreground">TECHNICAL CAPABILITY MATRIX</span> // DOMAINS & TOOLCHAINS
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              VERIFICATION: APPLIED IN PRODUCTION
            </span>
          </div>

          <div className="border border-border bg-card">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border bg-muted/40 hover:bg-muted/40 font-mono text-xs">
                  <TableHead className="w-56 font-semibold text-foreground">Domain Area</TableHead>
                  <TableHead className="font-semibold text-foreground">Concrete Competencies & Technologies</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {PROFILE.skills.map((skillGroup, sIdx) => (
                  <TableRow key={sIdx} className="border-b border-border/60 font-sans text-xs hover:bg-muted/20">
                    <TableCell className="font-mono font-medium text-foreground py-3 align-top">
                      {skillGroup.category}
                    </TableCell>
                    <TableCell className="py-3">
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center font-mono text-[11px] bg-muted/40 border border-border px-2 py-0.5 text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Datasheet Blog Spotlight (Direct Seam to the Technical Journal) */}
        <section className="border border-border bg-card p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
            <div className="space-y-1">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span className="font-semibold text-foreground">TECHNICAL WRITING & RESEARCH</span> // DATASHEET ARCHIVE
              </div>
              <h2 className="text-xl font-bold text-foreground font-sans tracking-tight">
                Engineering Monographs & Hardware Architecture Datasheets
              </h2>
            </div>
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider rounded-none self-start border-border">
              <Link href="/hobby" className="gap-2">
                Open Document Registry ({posts.length})
                <ArrowRightIcon className="size-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="border border-border/70 p-4 bg-muted/10 hover:bg-muted/30 transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>{post.docNumber}</span>
                    <span>{post.revision}</span>
                  </div>
                  <h4 className="font-sans font-semibold text-sm text-foreground group-hover:underline line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="font-sans text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                  <span>{post.category}</span>
                  <span>{post.readingTime} read →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
