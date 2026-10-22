import Link from "next/link";
import { PORTFOLIO } from "@/data/portfolio";
import { getAllPosts } from "@/data/posts";
import { SiteHeader } from "@/components/blog/site-header";
import { SiteFooter } from "@/components/blog/site-footer";
import { GitHubSvg, LinkedInSvg } from "@/components/blog/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
  TerminalIcon,
  CpuIcon,
  GitBranchIcon,
  AlertCircleIcon,
  CheckCircle2Icon,
  CalendarIcon,
  MapPinIcon,
  BookOpenIcon,
  LayersIcon,
} from "lucide-react";

export const metadata = {
  title: "Davinda Khrisna Adyatma (kryisnn) // Systems & Software Engineering Portfolio",
  description: "Personal engineering portfolio and biography of Davinda Khrisna Adyatma (kryisnn). Declarative operating systems, kernel labs, educational timeline, and systems case studies.",
};

export default function PortfolioPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader docNumber="SPEC-PORTFOLIO-2026" revision="REV B" activeNav="portfolio" />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 space-y-16">
        {/* SECTION 1: Personal Dossier & Identity Header */}
        <section className="border border-border bg-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 cols: Name, Title, Mission Statement */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                <span className="font-semibold text-foreground">{PORTFOLIO.handle}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPinIcon className="size-3 text-muted-foreground" />
                  {PORTFOLIO.location}
                </span>
                <span>•</span>
                <Badge variant="outline" className="font-mono text-[10px] rounded-none py-0 text-foreground border-border">
                  VERIFIED IDENTITY
                </Badge>
              </div>

              <div className="space-y-1.5">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground font-sans leading-[1.1]">
                  {PORTFOLIO.name}
                </h1>
                <p className="font-mono text-xs sm:text-sm text-foreground/80 tracking-tight">
                  // {PORTFOLIO.role}
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans max-w-2xl">
                {PORTFOLIO.summary}
              </p>

              {/* Verified Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="font-mono text-xs uppercase tracking-wider rounded-none h-9 px-4">
                  <a href={PORTFOLIO.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <GitHubSvg className="size-3.5 fill-current" />
                    GitHub (@davindakhrisna)
                  </a>
                </Button>
                <Button asChild variant="outline" size="default" className="font-mono text-xs uppercase tracking-wider rounded-none h-9 px-4 border-border">
                  <a href={PORTFOLIO.linkedin} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <LinkedInSvg className="size-3.5 fill-current" />
                    LinkedIn (davindakhrisna85)
                  </a>
                </Button>
                <Button asChild variant="ghost" size="default" className="font-mono text-xs uppercase tracking-wider rounded-none h-9 px-4">
                  <Link href="/hobby" className="gap-2">
                    Datasheets & Research
                    <ArrowRightIcon className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right 4 cols: Engineering Snapshot Box */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-6 space-y-4 font-mono text-xs">
              <div className="font-semibold text-foreground uppercase tracking-wider border-b border-border pb-2">
                ENGINEERING PROFILE
              </div>
              <div className="space-y-2.5 text-[11px] text-muted-foreground">
                <div>
                  <div className="text-foreground font-medium">Undergraduate Affiliation</div>
                  <div>Telkom University (Informatics / Systems)</div>
                </div>
                <div>
                  <div className="text-foreground font-medium">Foundational Background</div>
                  <div>SMK Telkom Purwokerto (Network Eng.)</div>
                </div>
                <div>
                  <div className="text-foreground font-medium">Core Technical Thesis</div>
                  <div>Byte-reproducible systems, zero-dependency services, let-it-crash concurrency.</div>
                </div>
                <div>
                  <div className="text-foreground font-medium">Active Codebase</div>
                  <div>15 Public GitHub Repositories</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Biography & Philosophical Intent */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span className="font-semibold text-foreground">01 // BIOGRAPHY</span> & ENGINEERING PATHWAY
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              PERSPECTIVE & BACKGROUND
            </span>
          </div>

          <div className="border border-border bg-card p-6 sm:p-8 space-y-4 font-sans text-sm sm:text-base text-foreground/90 leading-relaxed max-w-4xl">
            {PORTFOLIO.biography.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* SECTION 3: Career & Educational Timeline */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span className="font-semibold text-foreground">02 // TIMELINE</span> & INSTITUTIONAL FORMATION
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              2020 — PRESENT
            </span>
          </div>

          <div className="border border-border bg-card divide-y divide-border">
            {PORTFOLIO.timeline.map((entry, idx) => (
              <div key={idx} className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-foreground bg-muted px-2 py-0.5 border border-border">
                        {entry.period}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {entry.location}
                      </span>
                    </div>
                    <h3 className="font-sans font-bold text-lg text-foreground tracking-tight pt-1">
                      {entry.headline}
                    </h3>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    {entry.role}
                  </div>
                </div>

                <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  {entry.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-border/60">
                  <div className="font-mono text-[11px] font-semibold uppercase text-foreground">
                    Documented Milestones & Deliverables:
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-sans text-foreground/80">
                    {entry.keyOutputs.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <span className="font-mono text-[10px] text-muted-foreground mt-0.5">→</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Engineering Case Studies (Deep Architectural Truth) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span className="font-semibold text-foreground">03 // ARCHITECTURAL CASE STUDIES</span>
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              NO TUTORIAL APPS // PRODUCTION RESEARCH
            </span>
          </div>

          <div className="space-y-8">
            {PORTFOLIO.caseStudies.map((study) => (
              <div
                key={study.id}
                className="border border-border bg-card p-6 sm:p-8 space-y-6 group hover:border-foreground/30 transition-colors"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-border pb-4">
                  <div className="space-y-1">
                    <Badge variant="outline" className="font-mono text-[10px] rounded-none border-border">
                      {study.domain}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-sans pt-1">
                      {study.title}
                    </h3>
                  </div>
                  <Button asChild variant="outline" size="sm" className="font-mono text-xs rounded-none self-start border-border">
                    <a href={study.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                      <GitBranchIcon className="size-3.5" />
                      <span>Examine Repository</span>
                      <ExternalLinkIcon className="size-3" />
                    </a>
                  </Button>
                </div>

                {/* Context & Problem Definition */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs sm:text-sm">
                  <div className="space-y-1.5">
                    <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Operational Context
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.context}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Core Technical Challenge
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                </div>

                {/* Architectural Mechanisms */}
                <div className="border border-border/80 bg-muted/20 p-4 sm:p-5 space-y-2">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    Architectural Mechanisms
                  </div>
                  <ul className="space-y-2 font-sans text-xs text-foreground/90">
                    {study.architecture.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle2Icon className="size-3.5 text-foreground shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trade-offs & Post-Mortem Failure Mode */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border pt-4">
                  {/* Evaluated Tradeoffs */}
                  <div className="space-y-2 font-sans text-xs">
                    <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                      Evaluated Trade-Offs
                    </div>
                    {study.tradeoffs.map((t, tIdx) => (
                      <div key={tIdx} className="space-y-1 border-l-2 border-border pl-2.5 py-1">
                        <div className="font-semibold text-foreground">{t.choice}</div>
                        <div className="text-muted-foreground leading-relaxed">{t.why}</div>
                        <div className="font-mono text-[10px] text-muted-foreground">
                          REJECTED ALTERNATIVE: {t.rejectedAlternative}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Failure Mode / What Went Wrong */}
                  <div className="space-y-2 font-sans text-xs">
                    <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <AlertCircleIcon className="size-3.5 text-muted-foreground" />
                      <span>Failure Mode & Resolution</span>
                    </div>
                    <div className="border border-border/60 bg-muted/10 p-3 font-mono text-[11px] text-muted-foreground leading-relaxed">
                      {study.failureMode}
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-border/60">
                  {study.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="font-mono text-[10px] rounded-none px-2 py-0.5">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Operational Decision Matrix (Stack & Rationales) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              <span className="font-semibold text-foreground">04 // OPERATIONAL STACK</span> & SYSTEM RATIONALES
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              INTENTIONAL CHOICES
            </span>
          </div>

          <div className="border border-border bg-card">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border bg-muted/40 hover:bg-muted/40 font-mono text-xs">
                  <TableHead className="w-48 font-semibold text-foreground">Category</TableHead>
                  <TableHead className="w-72 font-semibold text-foreground">Chosen Tool / Standard</TableHead>
                  <TableHead className="font-semibold text-foreground">Engineering Rationale</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {PORTFOLIO.operationalStack.map((row, idx) => (
                  <TableRow key={idx} className="border-b border-border/60 font-sans text-xs hover:bg-muted/20">
                    <TableCell className="font-mono font-medium text-foreground py-3 align-top">
                      {row.category}
                    </TableCell>
                    <TableCell className="font-mono text-foreground font-semibold py-3 align-top">
                      {row.decision}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-3 leading-relaxed">
                      {row.rationale}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* SECTION 6: Cross-link to Technical Datasheet Monograph */}
        <section className="border border-border bg-card p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div className="space-y-1">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span className="font-semibold text-foreground">05 // TECHNICAL RESEARCH & DATASHEETS</span>
              </div>
              <h2 className="text-xl font-bold text-foreground font-sans tracking-tight">
                Engineering Monographs & Hardware Architecture Datasheets
              </h2>
            </div>
            <Button asChild variant="outline" className="font-mono text-xs uppercase tracking-wider rounded-none self-start border-border">
              <Link href="/hobby" className="gap-2">
                Open Datasheet Index ({posts.length} Posts)
                <ArrowRightIcon className="size-3.5" />
              </Link>
            </Button>
          </div>

          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-3xl">
            In addition to software and systems building, I publish technical research monographs formatted as electronic hardware component datasheets. Topics include Apollo Guidance Computer core memory, low-power 10GbE cluster topologies, and ferrite magnetics physics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
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
