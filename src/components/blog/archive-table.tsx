"use client";

import * as React from "react";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SearchIcon, ArrowUpRightIcon, CheckCircle2Icon } from "lucide-react";
import type { Post } from "@/data/posts";

interface ArchiveTableProps {
  posts: Post[];
}

export function ArchiveTable({ posts }: ArchiveTableProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [readPosts, setReadPosts] = React.useState<string[]>([]);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("kryisnn_read_posts");
      if (stored) {
        setReadPosts(JSON.parse(stored));
      }
    } catch {
      // LocalStorage unavailable in sandbox / SSR
    }
  }, []);

  const categories = ["all", "Homelab", "Systems", "Architecture", "History"];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.docNumber.toLowerCase().includes(query) ||
      post.summary.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4">
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
        {/* Topic filter: cathode-gauze principle: all categories visible, active inked */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider shrink-0 mr-1">
            Topic Filter:
          </span>
          <ToggleGroup
            type="single"
            value={selectedCategory}
            onValueChange={(val) => val && setSelectedCategory(val)}
            className="border border-border bg-card p-0.5 rounded-none"
          >
            {categories.map((cat) => (
              <ToggleGroupItem
                key={cat}
                value={cat}
                size="sm"
                className="h-7 px-2.5 font-mono text-xs uppercase tracking-wider rounded-none data-[state=on]:bg-foreground data-[state=on]:text-background cursor-pointer"
              >
                {cat}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Quick query filter */}
        <div className="relative w-full sm:w-64">
          <SearchIcon className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8 pl-8 font-mono text-xs bg-card border-border rounded-none shadow-none focus-visible:ring-1"
          />
        </div>
      </div>

      {/* Parts Selection Table */}
      <div className="border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border bg-muted/40 hover:bg-muted/40">
              <TableHead className="font-mono text-xs font-semibold uppercase text-foreground py-2.5 w-32">
                Doc Number
              </TableHead>
              <TableHead className="font-mono text-xs font-semibold uppercase text-foreground py-2.5">
                Title / Specification Summary
              </TableHead>
              <TableHead className="hidden md:table-cell font-mono text-xs font-semibold uppercase text-foreground py-2.5 w-28">
                Category
              </TableHead>
              <TableHead className="hidden lg:table-cell font-mono text-xs font-semibold uppercase text-foreground py-2.5 w-24">
                Revision
              </TableHead>
              <TableHead className="hidden sm:table-cell font-mono text-xs font-semibold uppercase text-foreground py-2.5 w-28 text-right">
                Published
              </TableHead>
              <TableHead className="w-12 text-center font-mono text-xs font-semibold uppercase text-foreground py-2.5">
                Read
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center font-mono text-xs text-muted-foreground">
                  NO MATCHING SPECIFICATIONS FOUND IN REGISTRY
                </TableCell>
              </TableRow>
            ) : (
              filteredPosts.map((post) => {
                const isRead = readPosts.includes(post.slug);
                return (
                  <TableRow
                    key={post.slug}
                    className="border-b border-border/60 group hover:bg-muted/30 transition-colors"
                  >
                    {/* Doc No */}
                    <TableCell className="font-mono text-xs font-medium text-foreground py-3 align-top">
                      <div className="flex items-center gap-1.5">
                        <span className="group-hover:underline">{post.docNumber}</span>
                      </div>
                    </TableCell>

                    {/* Title + Preview HoverCard */}
                    <TableCell className="py-3 align-top font-sans">
                      <HoverCard openDelay={200} closeDelay={150}>
                        <HoverCardTrigger asChild>
                          <Link
                            href={`/posts/${post.slug}`}
                            className="block space-y-1 group-hover:text-foreground"
                          >
                            <div className="flex items-center gap-1.5 font-semibold text-sm text-foreground tracking-tight">
                              <span>{post.title}</span>
                              <ArrowUpRightIcon className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground shrink-0" />
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1 max-w-xl font-normal">
                              {post.summary}
                            </p>
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent
                          align="start"
                          side="bottom"
                          className="w-96 p-4 rounded-none border border-border bg-popover shadow-sm font-sans space-y-2"
                        >
                          <div className="flex items-center justify-between border-b border-border pb-2">
                            <span className="font-mono text-[11px] font-semibold">{post.docNumber}</span>
                            <Badge variant="outline" className="text-[10px] font-mono rounded-none">
                              {post.revision}
                            </Badge>
                          </div>
                          <div className="font-medium text-sm text-foreground">{post.title}</div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{post.description}</p>
                          <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                            <span>READ: {post.readingTime}</span>
                            <span>{post.category}</span>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>

                    {/* Category */}
                    <TableCell className="hidden md:table-cell py-3 align-top">
                      <Badge
                        variant="secondary"
                        className="rounded-none font-mono text-[11px] px-1.5 py-0 font-normal border border-border/60 text-muted-foreground"
                      >
                        {post.category}
                      </Badge>
                    </TableCell>

                    {/* Revision */}
                    <TableCell className="hidden lg:table-cell font-mono text-xs text-muted-foreground py-3 align-top">
                      {post.revision}
                    </TableCell>

                    {/* Date */}
                    <TableCell className="hidden sm:table-cell font-mono text-xs text-muted-foreground py-3 align-top text-right">
                      {post.date}
                    </TableCell>

                    {/* Read Status Mark (Cutting bench principle) */}
                    <TableCell className="py-3 align-top text-center">
                      {isRead ? (
                        <span title="Document read">
                          <CheckCircle2Icon className="size-3.5 text-foreground mx-auto" />
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-muted-foreground/40">—</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-1">
        <div>TOTAL REGISTRY ENTRIES: {filteredPosts.length} OF {posts.length}</div>
        <div>TABLE ID: TBL-SEL-01 // SELECTION REGISTER</div>
      </div>
    </div>
  );
}
