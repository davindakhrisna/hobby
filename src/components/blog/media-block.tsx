"use client";

import * as React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayIcon, ExternalLinkIcon, CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";
import type { PostMedia } from "@/data/posts";

interface MediaBlockProps {
  figure: PostMedia;
  figureNumber?: string;
  priority?: boolean;
}

export function MediaBlock({ figure, figureNumber, priority = false }: MediaBlockProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [videoActivated, setVideoActivated] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    const fullUrl = figure.type === "youtube"
      ? `https://www.youtube.com/watch?v=${figure.url}`
      : figure.url;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    toast.success("Source URL copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const ratio = figure.aspectRatio === "3/2" ? 3 / 2
    : figure.aspectRatio === "4/3" ? 4 / 3
    : figure.aspectRatio === "5/4" ? 5 / 4
    : figure.aspectRatio === "4/5" ? 4 / 5
    : figure.aspectRatio === "2/3" ? 2 / 3
    : 16 / 9;

  return (
    <figure
      id={figure.id}
      className="group relative my-8 border border-border bg-card p-2 sm:p-3 scroll-mt-24 transition-colors hover:border-foreground/30"
    >
      <div className="relative w-full overflow-hidden border border-border bg-muted/30">
        <AspectRatio ratio={ratio}>
          {figure.type === "image" && (
            <>
              {!isLoaded && (
                <div className="absolute inset-0 flex flex-col justify-between p-4 bg-muted/40 animate-pulse">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-28 bg-muted-foreground/20" />
                    <Skeleton className="h-4 w-16 bg-muted-foreground/20" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full bg-muted-foreground/20" />
                    <Skeleton className="h-3 w-3/4 bg-muted-foreground/20" />
                  </div>
                </div>
              )}
              <Image
                src={figure.url}
                alt={figure.caption}
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 720px, 860px"
                className={`object-contain transition-opacity duration-300 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsLoaded(true)}
              />
            </>
          )}

          {figure.type === "youtube" && (
            <>
              {!videoActivated ? (
                <div className="relative size-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-center select-none">
                  {figure.thumbUrl && (
                    <Image
                      src={figure.thumbUrl}
                      alt={figure.caption}
                      fill
                      className="object-cover opacity-40 filter grayscale hover:opacity-50 transition-opacity"
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <Button
                      onClick={() => setVideoActivated(true)}
                      variant="outline"
                      size="lg"
                      className="h-12 border-border bg-background/90 text-foreground hover:bg-foreground hover:text-background font-mono text-xs uppercase tracking-wider gap-2 shadow-none cursor-pointer"
                    >
                      <PlayIcon className="size-4 fill-current" />
                      Initialize Video Stream
                    </Button>
                    <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                      Lazy click-to-load // YouTube Embed
                    </span>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${figure.url}?autoplay=1&rel=0`}
                  title={figure.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full border-0"
                />
              )}
            </>
          )}
        </AspectRatio>
      </div>

      <figcaption className="mt-3 flex flex-col gap-2 pt-2 border-t border-border/60 sm:flex-row sm:items-start sm:justify-between text-xs">
        <div className="space-y-1 max-w-2xl">
          <p className="font-medium text-foreground leading-relaxed">
            {figureNumber && <strong className="font-mono text-[11px] font-semibold mr-1.5 uppercase tracking-wide">[{figureNumber}]</strong>}
            {figure.caption}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-muted-foreground">
            <span>SOURCE: {figure.sourceCredit}</span>
            <span>•</span>
            <Badge variant="outline" className="text-[10px] font-mono px-1 py-0 h-4 border-border text-muted-foreground rounded-none uppercase">
              {figure.license}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-1 self-start shrink-0 font-mono">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopyLink}
            className="h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground font-mono gap-1"
            title="Copy Source Reference Link"
          >
            {copied ? <CheckIcon className="size-3 text-emerald-600" /> : <CopyIcon className="size-3" />}
            <span className="hidden md:inline">Cite</span>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground font-mono gap-1"
          >
            <a
              href={figure.type === "youtube" ? `https://www.youtube.com/watch?v=${figure.url}` : figure.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Raw Source in New Tab"
            >
              <ExternalLinkIcon className="size-3" />
              <span className="hidden md:inline">Raw</span>
            </a>
          </Button>
        </div>
      </figcaption>
    </figure>
  );
}
