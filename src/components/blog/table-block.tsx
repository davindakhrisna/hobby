import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import type { PostTable } from "@/data/posts";

interface TableBlockProps {
  table: PostTable;
}

export function TableBlock({ table }: TableBlockProps) {
  return (
    <div className="my-8 space-y-2">
      <div className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
        {table.caption}
      </div>
      <div className="border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border bg-muted/40 hover:bg-muted/40">
              {table.headers.map((h, i) => (
                <TableHead key={i} className="font-mono text-xs font-semibold uppercase text-foreground py-2.5">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.rows.map((row, rIdx) => (
              <TableRow key={rIdx} className="border-b border-border/60 hover:bg-muted/20">
                {row.map((cell, cIdx) => (
                  <TableCell
                    key={cIdx}
                    className={`py-2 text-xs text-foreground font-sans ${
                      cIdx === 0 ? "font-mono font-medium text-foreground" : ""
                    }`}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
