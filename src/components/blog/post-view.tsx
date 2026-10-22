"use client";

import * as React from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/blog/site-header";
import { SiteFooter } from "@/components/blog/site-footer";
import { MediaBlock } from "@/components/blog/media-block";
import { TableBlock } from "@/components/blog/table-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CheckIcon, Share2Icon, BookmarkIcon, ClockIcon } from "lucide-react";
import { toast } from "sonner";
import type { Post } from "@/data/posts";

interface PostViewProps {
  post: Post;
  prevPost?: Post;
  nextPost?: Post;
}

export function PostView({ post, prevPost, nextPost }: PostViewProps) {
  const [activeSection, setActiveSection] = React.useState<string>(post.toc[0]?.id || "");
  const [isBookmarked, setIsBookmarked] = React.useState<boolean>(false);

  // Mark as read in localStorage
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("kryisnn_read_posts");
      const list: string[] = stored ? JSON.parse(stored) : [];
      if (!list.includes(post.slug)) {
        list.push(post.slug);
        localStorage.setItem("kryisnn_read_posts", JSON.stringify(list));
      }
    } catch {
      // safe fallback
    }
  }, [post.slug]);

  // Scroll spy for TOC
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    post.toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post.toc]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Document link copied to clipboard");
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast(isBookmarked ? "Document unpinned" : "Document pinned to reference cache");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader docNumber={post.docNumber} revision={post.revision} />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList className="font-mono text-xs text-muted-foreground">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">REGISTRY</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">{post.category.toUpperCase()}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-mono font-semibold text-foreground">
                  {post.docNumber}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBookmark}
              className="h-7 px-2 font-mono text-[11px] rounded-none border-border"
              title="Pin Document"
            >
              <BookmarkIcon className={`size-3 mr-1 ${isBookmarked ? "fill-current" : ""}`} />
              <span className="hidden sm:inline">{isBookmarked ? "Pinned" : "Pin"}</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="h-7 px-2 font-mono text-[11px] rounded-none border-border"
              title="Share Spec Link"
            >
              <Share2Icon className="size-3 mr-1" />
              <span className="hidden sm:inline">Share</span>
            </Button>
          </div>
        </div>

        {/* Document Title Header Block */}
        <article className="border border-border bg-card p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{post.docNumber}</span>
              <span>•</span>
              <Badge variant="secondary" className="rounded-none font-mono text-[10px]">
                {post.revision}
              </Badge>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <ClockIcon className="size-3" />
              <span>{post.readingTime} read</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans leading-[1.1]">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans max-w-3xl">
              {post.description}
            </p>
          </div>

          {/* Quick specs grid */}
          <div className="border border-border bg-muted/20 p-4 sm:p-6 space-y-3">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Subsystem Reference Specifications
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 font-mono text-xs">
              {post.specs.map((spec, i) => (
                <div key={i} className="flex justify-between border-b border-border/50 py-1 gap-2">
                  <span className="text-muted-foreground">{spec.label}:</span>
                  <span className="font-medium text-foreground text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Two-Column Reading Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Reading Column (Fixed ~66ch Measure) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Primary Document Body */}
            <div className="prose prose-neutral max-w-[68ch] leading-relaxed text-foreground font-sans text-[15px] sm:text-base space-y-6">
              {post.body.split("\n\n").map((para, idx) => {
                if (para.startsWith("### ")) {
                  const headingText = para.replace("### ", "").trim();
                  const matchedSection = post.toc.find((t) =>
                    headingText.toLowerCase().includes(t.title.slice(4).toLowerCase())
                  );
                  const sectionId = matchedSection?.id || `section-${idx}`;

                  return (
                    <h2
                      key={idx}
                      id={sectionId}
                      className="text-xl sm:text-2xl font-bold tracking-tight text-foreground border-b border-border pb-2 pt-6 scroll-mt-20 font-sans"
                    >
                      {headingText}
                    </h2>
                  );
                }

                if (para.startsWith("- ") || para.startsWith("1. ")) {
                  const items = para.split("\n");
                  return (
                    <ul key={idx} className="list-disc pl-5 space-y-2 text-foreground my-4">
                      {items.map((item, iIdx) => (
                        <li key={iIdx} className="leading-relaxed">
                          {item.replace(/^[-*]|\d+\.\s*/, "").trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // In-text figure references preview with HoverCard
                return (
                  <p key={idx} className="leading-relaxed text-foreground/90 font-sans">
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Figures Embedded Section */}
            <section className="space-y-6 pt-6 border-t border-border">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Document Plates & Schematics
              </div>
              <div className="space-y-8">
                {Object.entries(post.figures).map(([key, fig], fIdx) => (
                  <MediaBlock
                    key={key}
                    figure={fig}
                    figureNumber={`FIG-${fIdx + 1}.0`}
                    priority={fIdx === 0}
                  />
                ))}
              </div>
            </section>

            {/* Post Tables Section */}
            {post.tables && (
              <section className="space-y-6 pt-6 border-t border-border">
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Reference Tables & Tolerances
                </div>
                {Object.entries(post.tables).map(([key, tbl]) => (
                  <TableBlock key={key} table={tbl} />
                ))}
              </section>
            )}

            {/* Revision History Block */}
            <section id="revisions" className="space-y-4 pt-8 border-t border-border scroll-mt-24">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                Document Revision Log
              </div>
              <div className="border border-border bg-card">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-border bg-muted/40 hover:bg-muted/40 font-mono text-xs">
                      <TableHead className="w-20 font-semibold text-foreground">Rev</TableHead>
                      <TableHead className="w-28 font-semibold text-foreground">Date</TableHead>
                      <TableHead className="w-24 font-semibold text-foreground">Author</TableHead>
                      <TableHead className="font-semibold text-foreground">Change Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {post.revisions.map((rev, rIdx) => (
                      <TableRow key={rIdx} className="border-b border-border/60 font-mono text-xs">
                        <TableCell className="font-semibold text-foreground">{rev.rev}</TableCell>
                        <TableCell className="text-muted-foreground">{rev.date}</TableCell>
                        <TableCell className="text-muted-foreground">{rev.author}</TableCell>
                        <TableCell className="text-foreground font-sans text-xs">{rev.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            {/* Next / Previous Pagination */}
            <div className="pt-8 border-t border-border">
              <Pagination>
                <PaginationContent className="w-full justify-between">
                  {prevPost ? (
                    <PaginationItem>
                      <PaginationPrevious
                        href={`/posts/${prevPost.slug}`}
                        text={`Previous: ${prevPost.docNumber}`}
                        className="font-mono text-xs rounded-none border border-border"
                      />
                    </PaginationItem>
                  ) : (
                    <div />
                  )}

                  {nextPost ? (
                    <PaginationItem>
                      <PaginationNext
                        href={`/posts/${nextPost.slug}`}
                        text={`Next: ${nextPost.docNumber}`}
                        className="font-mono text-xs rounded-none border border-border"
                      />
                    </PaginationItem>
                  ) : (
                    <div />
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </div>

          {/* Sticky Sidebar: Table of Contents & Figure Fast-Jumps */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-20 space-y-6">
            {/* Table of Contents */}
            <div className="border border-border bg-card p-5 space-y-3">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground border-b border-border pb-2">
                Table of Contents
              </div>
              <nav className="space-y-1 font-mono text-xs">
                {post.toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1 px-2 transition-colors border-l-2 ${
                      activeSection === item.id
                        ? "border-foreground bg-muted font-medium text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Figure Jump Index */}
            <div className="border border-border bg-card p-5 space-y-3">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground border-b border-border pb-2">
                Plates & Figures Index
              </div>
              <div className="space-y-2">
                {Object.entries(post.figures).map(([key, fig], idx) => (
                  <HoverCard key={key} openDelay={150}>
                    <HoverCardTrigger asChild>
                      <a
                        href={`#${fig.id}`}
                        className="flex items-center justify-between py-1 px-2 border border-border/60 bg-muted/20 hover:bg-muted font-mono text-xs transition-colors"
                      >
                        <span className="font-semibold text-foreground">FIG-{idx + 1}.0</span>
                        <span className="text-muted-foreground text-[11px] truncate max-w-[140px]">
                          {fig.type.toUpperCase()} // Jump ↗
                        </span>
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side="left"
                      align="start"
                      className="w-72 p-3 rounded-none border border-border bg-popover text-xs space-y-2 font-sans"
                    >
                      <div className="font-mono text-[11px] font-semibold uppercase text-muted-foreground">
                        FIG-{idx + 1}.0 Preview
                      </div>
                      <p className="line-clamp-2 text-foreground text-xs">{fig.caption}</p>
                      <div className="font-mono text-[10px] text-muted-foreground">
                        SOURCE: {fig.sourceCredit}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            {/* Document Telemetry card */}
            <div className="border border-border bg-muted/20 p-4 font-mono text-[11px] text-muted-foreground space-y-1">
              <div className="font-semibold text-foreground">DOCUMENT TELEMETRY</div>
              <div>DOC: {post.docNumber}</div>
              <div>STATUS: APPROVED FOR RELEASE</div>
              <div>CLASSIFICATION: UNCLASSIFIED</div>
              <div>FORMAT: IEEE/AIAA COMPATIBLE</div>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
