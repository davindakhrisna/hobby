---
name: kryisnn-datasheet-design-system
description: Component datasheet design language for engineering monographs, systems portfolios, and technical notes.
colors:
  background: "#fbfbfb"
  foreground: "#18181b"
  card: "#ffffff"
  muted: "#f4f4f5"
  muted-foreground: "#52525b"
  border: "#e4e4e7"
  ring: "#71717a"
typography:
  display:
    fontFamily: "var(--font-archivo), sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "var(--font-archivo), sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "var(--font-archivo), sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "normal"
  mono:
    fontFamily: "var(--font-geist-mono), monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "normal"
  caption:
    fontFamily: "var(--font-geist-mono), monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "1.4"
  badge:
    fontFamily: "var(--font-geist-mono), monospace"
    fontSize: "10px"
    fontWeight: 600
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  badge:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
---

## Overview

The `kryisnn` portfolio and engineering monograph interface is constructed on the visual metaphor of an electronic component engineering datasheet. It rejects generic SaaS cards, loud marketing gradients, and saturated hero sections. Instead, it prioritizes structured comprehension, strict typographic hierarchies, and low-cognitive-load reading ergonomics.

## Colors

- **Paper Background (`#fbfbfb`):** Cool neutral white background avoiding harsh pure white glare while preserving technical print aesthetics.
- **Graphite Ink (`#18181b`):** Deep graphite foreground offering crisp legibility with WCAG AAA contrast ratio (>13:1).
- **Secondary Ink (`#52525b`):** Muted metadata text, maintaining minimum 4.5:1 contrast against `#fbfbfb`.
- **Plate Border (`#e4e4e7`):** Neutral gray hairline rules used for table outlines, figure containers, and title blocks.

## Typography

- **Display & Headings:** Archivo (Variable). Used for titles, section headings, and datasheet stamps.
- **Body Measure:** Fixed 65–68 character measure to ensure ergonomic long-form reading across desktop, tablet, and mobile.
- **Monospace:** Geist Mono. Reserved strictly for technical data, document numbers (`SPEC-ENG-2026`, `DOC-AGC-0104`), code, and specifications.
- **Micro Telemetry:** 10px and 11px micro-typography used for engineering stamps, status labels, and metric readings.

## Layout

- **Desktop Header:** Two-column split title block with document identifier, revision stamp, and core specifications list.
- **Portfolio Catalog:** Engineered artifacts grid with concrete system architecture, tech stacks, and live metrics.
- **Responsive Parts Table:** Archive catalog modeled after electronics distributor component selection tables.
- **Post Layout:** Two-column reading layout with persistent sticky Table of Contents and fast Figure jumping index.

## Elevation & Depth

- **Zero Drop Shadows:** Elevation is expressed exclusively through 1px border lines and tonal contrast.
- **No Decorative Blur:** Blur and backdrop filters are limited to the sticky header container for content pass-through.

## Shapes

- **Near-Square Corners:** Component radii are constrained to `0px` (badges, buttons, plates) or `2px–4px` (subtle containers).

## Components

- **MediaBlock:** Encapsulated figure container featuring AspectRatio containers, pulsing skeletons, and click-to-initialize YouTube video streams.
- **ArchiveTable:** Filterable registry table with topic filtering where all options remain visible with active highlighted.
- **TableBlock:** Monospace-formatted data tables for hardware specs and tolerances.

## Do's and Don'ts

- **Do:** Use verified public media sources with explicit licenses and author attribution.
- **Do:** Keep media behind skeletons until completely rendered to avoid layout shifts.
- **Don't:** Introduce saturated or fluorescent accent colors.
- **Don't:** Auto-play third-party video embeds without user command.
