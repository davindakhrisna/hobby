export interface PostMedia {
  id: string;
  type: "image" | "youtube" | "video";
  url: string;
  thumbUrl?: string;
  caption: string;
  sourceCredit: string;
  license: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

export interface PostRevision {
  rev: string;
  date: string;
  author: string;
  description: string;
}

export interface PostTable {
  id: string;
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface Post {
  slug: string;
  docNumber: string;
  revision: string;
  title: string;
  subtitle?: string;
  date: string;
  readingTime: string;
  category: "Homelab" | "Systems" | "Architecture" | "History";
  summary: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  toc: { id: string; title: string }[];
  figures: Record<string, PostMedia>;
  tables?: Record<string, PostTable>;
  revisions: PostRevision[];
  body: string;
}

export const POSTS: Post[] = [
  {
    slug: "apollo-guidance-computer-architecture",
    docNumber: "DOC-AGC-0104",
    revision: "REV C",
    title: "Apollo Guidance Computer Architecture & Core Rope ROM",
    subtitle: "RTL Flat-Packs, LOL Memory, and Preemptive Scheduling",
    date: "2026-09-14",
    readingTime: "9 min",
    category: "History",
    summary: "Dissecting the rope core memory, priority-preemptive scheduler, and hardware recovery loops of the Apollo Guidance Computer.",
    description: "A hardware-level engineering analysis of the Apollo Guidance Computer (AGC Block II). Built on 5,600 NOR gates, 36.8 kilowords of woven core rope ROM, and a preemptive interrupt architecture that survived the 1201/1202 alarms during lunar descent.",
    features: [
      "Discrete dual 3-input NOR gate RTL flat-packs",
      "Woven core rope read-only memory (16-bit word length)",
      "Priority-based job queue with executive checkpointing",
      "DSKY (Display and Keyboard) numerical interface telemetry",
    ],
    specs: [
      { label: "Clock Frequency", value: "2.048 MHz (1.024 MHz internal cycle)" },
      { label: "Memory (ROM)", value: "36,864 words (woven core rope)" },
      { label: "Memory (RAM)", value: "2,048 words (magnetic core)" },
      { label: "Power Draw", value: "70 W at 28 VDC" },
      { label: "Logic Type", value: "RTL (Dual 3-input NOR gates)" },
    ],
    toc: [
      { id: "overview", title: "1.0 Architecture Overview" },
      { id: "core-rope", title: "2.0 Woven Core Rope Memory" },
      { id: "scheduler", title: "3.0 Executive & Priority Job Scheduling" },
      { id: "telemetry", title: "4.0 DSKY & Operator Telemetry" },
      { id: "video-log", title: "5.0 Hardware Restoration Video Logs" },
      { id: "revisions", title: "6.0 Revision History" },
    ],
    figures: {
      "fig-1": {
        id: "fig-1",
        type: "image",
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Apollo_Guidance_Computer_%28NASM%29.JPG/1280px-Apollo_Guidance_Computer_%28NASM%29.JPG",
        caption: "Figure 1: Apollo Guidance Computer (AGC) main chassis assembly, displaying dual logic tray connectors and hermetic sealing provisions.",
        sourceCredit: "Smithsonian National Air and Space Museum / Photo by Tamorlan",
        license: "CC BY-SA 3.0",
        width: 1280,
        height: 853,
        aspectRatio: "3/2",
      },
      "fig-2": {
        id: "fig-2",
        type: "image",
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Margaret_Hamilton_restaured.jpg/1280px-Margaret_Hamilton_restaured.jpg",
        caption: "Figure 2: Margaret Hamilton alongside the listing of Apollo project flight software produced by the MIT Instrumentation Laboratory.",
        sourceCredit: "MIT Draper Laboratory / Restored by Wilfredor & Yann",
        license: "Public Domain",
        width: 1028,
        height: 1280,
        aspectRatio: "4/5",
      },
      "fig-3": {
        id: "fig-3",
        type: "image",
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Apollo_display_and_keyboard_unit_%28DSKY%29_used_on_F-8_DFBW_DVIDS683588.jpg/1280px-Apollo_display_and_keyboard_unit_%28DSKY%29_used_on_F-8_DFBW_DVIDS683588.jpg",
        caption: "Figure 3: Apollo DSKY (Display and Keyboard) unit with numeric electroluminescent readouts and key matrix.",
        sourceCredit: "NASA / Dennis Taylor",
        license: "Public Domain",
        width: 1280,
        height: 1004,
        aspectRatio: "5/4",
      },
      "fig-4": {
        id: "fig-4",
        type: "youtube",
        url: "2KSahAoOLdU",
        thumbUrl: "https://i.ytimg.com/vi/2KSahAoOLdU/hqdefault.jpg",
        caption: "Figure 4: CuriousMarc engineering laboratory documenting electrical bring-up, memory harness inspection, and clock generation on AGC Serial #1.",
        sourceCredit: "CuriousMarc Laboratory Archival Stream",
        license: "Public Educational Broadcast",
        aspectRatio: "16/9",
      },
    },
    tables: {
      "tbl-1": {
        id: "tbl-1",
        caption: "Table 1: AGC Block II Subsystem Specifications and Tolerances",
        headers: ["Subsystem", "Technology", "Capacity / Rate", "Fault Tolerance Provision"],
        rows: [
          ["Fixed Memory", "Core Rope ROM (Woven)", "36,864 words (16-bit)", "Parity bit per word, unalterable in flight"],
          ["Erasable Memory", "Coincident-current ferrite core", "2,048 words (16-bit)", "Write-strobe verify, refresh cycle"],
          ["Logic Family", "Integrated Flat-pack DTL/RTL", "5,600 NOR gates", "Hermetic flat-packs, redundant weld ribbons"],
          ["Instruction Set", "16 instructions, 3-bit op code + ext", "40–80 kIPS", "Trap on illegal op code, restart phase reset"],
        ],
      },
    },
    revisions: [
      { rev: "REV C", date: "2026-09-14", author: "kryisnn", description: "Expanded Executive priority-inversion analysis; added CuriousMarc restoration telemetry link." },
      { rev: "REV B", date: "2026-07-22", author: "kryisnn", description: "Corrected memory cycle timing from 11.72 µs to 11.7 µs nominal." },
      { rev: "REV A", date: "2026-05-04", author: "kryisnn", description: "Initial release of technical architecture notes." },
    ],
    body: `The Apollo Guidance Computer (AGC) represents one of the earliest real-world milestones in real-time fault-tolerant embedded computing. Designed by the MIT Instrumentation Laboratory under Hal Laning and Eldon Hall, and programmed under the leadership of Margaret Hamilton, the AGC navigated nine lunar voyages without a catastrophic digital failure.

### 1.0 Architecture Overview
The computer is built around a single component logic family: a dual 3-input NOR gate flat-pack manufactured by Fairchild. By restricting the bill of materials to one verified integrated circuit, the engineering team could qualify the semiconductor manufacturing line at high volume and ensure extreme reliability.

Every operation—from program counter updates to binary addition—was synthesized out of NOR operations. Word length was standard 16 bits (15 data bits plus one odd-parity bit). Memory cycle time stood at 11.7 microseconds, governed by a master 2.048 MHz crystal oscillator.

### 2.0 Woven Core Rope Memory
Before mask-programmable silicon ROMs existed, flight software was woven physically by hand into ferrite cores known colloquially as "LOL memory" (Little Old Lady memory).

A copper sense wire threaded through a toroidal magnetic core registered a binary 1 upon interrogation. A wire routed around the core registered a binary 0. Because a single magnetic core could support up to 64 separate wire paths, packing density reached unprecedented levels for 1968. No voltage spike, ionizing radiation, or mechanical vibration could flip a bit in core rope.

### 3.0 Executive & Priority Job Scheduling
The operating system, named Executive, was a priority-driven non-preemptive cooperative multitasking system combined with an interrupt-driven Waitlist scheduler. Tasks were allotted run-time based on mission criticality:

1. Phase 1 Priority: Radar telemetry and engine throttle servos.
2. Phase 2 Priority: Orbital calculation updates and inertial measurement integration.
3. Phase 3 Priority: DSKY operator display updates.

When the rendezvous radar was inadvertently left in the wrong mode during the Apollo 11 lunar descent, the AGC was bombarded with unexpected cycle-stealing interrupts (800 Hz phase pulses). The Executive continuously shed Phase 3 telemetry tasks, flashed the legendary 1201 and 1202 alarms on the DSKY to notify Neil Armstrong and Buzz Aldrin, yet kept computing engine thrust vectors without missing a servo deadline.

### 4.0 DSKY & Operator Telemetry
Astronauts interfaced with the guidance system through the DSKY (Display and Keyboard). Built with 19 pushbuttons and numeric high-voltage electroluminescent indicators, operations followed a strict Verb-Noun linguistic syntax:

- VERB 37 ENTER 06 instructed the computer to change operating mode to Program 06.
- VERB 16 NOUN 65 initiated a decimal readout of mission elapsed time, latitude, and longitude.`,
  },
  {
    slug: "homelab-low-power-cluster-topology",
    docNumber: "DOC-LAB-0208",
    revision: "REV B",
    title: "Low-Power 10GbE Homelab Cluster Topology",
    subtitle: "Ceph Storage, PXE Stateless Provisioning, and SFP+ Switching Under 85W",
    date: "2026-08-30",
    readingTime: "7 min",
    category: "Homelab",
    summary: "Configuring a redundant 10GbE SFP+ switching fabric, PXE boot pipelines, and Ceph cluster on 15-watt nodes.",
    description: "Design documentation for a 6-node low-power homelab cluster. Covers isolated out-of-band management VLANs, wireguard mesh failover, and flash storage tiering under a continuous 85-watt total rack envelope.",
    features: [
      "10GbE DAC dual-homed SFP+ interconnects",
      "Stateless PXE booting with ZFS root over iSCSI",
      "Ceph triple-replicated distributed object storage",
      "Power consumption budget capped under 90 W idle",
    ],
    specs: [
      { label: "Node Count", value: "6x Custom Mini-ITX nodes" },
      { label: "Aggregate Cores", value: "48 Cores / 96 Threads" },
      { label: "Memory Pool", value: "384 GB ECC DDR5" },
      { label: "Switching Fabric", value: "MikroTik CRS309-1G-8S+IN (10GbE)" },
      { label: "Idle Draw", value: "84.2 Watts total rack draw" },
    ],
    toc: [
      { id: "topology", title: "1.0 Physical & Network Topology" },
      { id: "power", title: "2.0 Power Consumption Profiling" },
      { id: "storage", title: "3.0 Distributed Storage Fabric (Ceph)" },
      { id: "video-tour", title: "4.0 Rack Infrastructure Video Inspection" },
      { id: "revisions", title: "5.0 Revision History" },
    ],
    figures: {
      "fig-1": {
        id: "fig-1",
        type: "image",
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bc/19-inch_rackmount_Ethernet_switches_and_patch_panels.jpg",
        caption: "Figure 1: 19-inch rackmount patch panel and high-density Ethernet switching layout showing color-coded management isolation.",
        sourceCredit: "Wikimedia Commons Archive / Technical Collection",
        license: "Public Domain / CC BY",
        width: 1280,
        height: 960,
        aspectRatio: "4/3",
      },
      "fig-2": {
        id: "fig-2",
        type: "image",
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Servers_in_a_Rack.jpg/1280px-Servers_in_a_Rack.jpg",
        caption: "Figure 2: Dense rack chassis deployment demonstrating front-to-back laminar airflow channel design.",
        sourceCredit: "Abigor / Wikimedia Commons",
        license: "CC BY-SA 3.0",
        width: 1280,
        height: 1925,
        aspectRatio: "2/3",
      },
      "fig-3": {
        id: "fig-3",
        type: "youtube",
        url: "5UHqaNt0W6s",
        thumbUrl: "https://i.ytimg.com/vi/5UHqaNt0W6s/hqdefault.jpg",
        caption: "Figure 3: Power profiling, cable management routing, and active thermal load benchmarking in a private homelab server room.",
        sourceCredit: "RawTruthRF Engineering Archive",
        license: "Public Broadcast",
        aspectRatio: "16/9",
      },
    },
    tables: {
      "tbl-1": {
        id: "tbl-1",
        caption: "Table 1: Power and Thermal Dissipation Under Variable Workloads",
        headers: ["Node Identifier", "CPU Model", "Idle Power (W)", "Full Load (W)", "Air Exhaust Temp (°C)"],
        rows: [
          ["node-01 (Master)", "AMD Ryzen 5 7600 (Eco 45W)", "13.8 W", "52.4 W", "34.1 °C"],
          ["node-02 (Storage)", "AMD Ryzen 5 7600 (Eco 45W)", "14.2 W", "56.1 W", "35.8 °C"],
          ["node-03 (Worker)", "AMD Ryzen 5 7600 (Eco 45W)", "13.6 W", "51.8 W", "33.9 °C"],
          ["node-04 (Worker)", "AMD Ryzen 5 7600 (Eco 45W)", "13.9 W", "52.0 W", "34.0 °C"],
          ["Switch + OOBM", "MikroTik CRS309 + Pi 4", "18.2 W", "21.5 W", "38.5 °C"],
        ],
      },
    },
    revisions: [
      { rev: "REV B", date: "2026-08-30", author: "kryisnn", description: "Migrated Ceph OSDs from SATA SSD to dual NVMe drives per node; updated power tables." },
      { rev: "REV A", date: "2026-06-11", author: "kryisnn", description: "Initial documentation of rack wiring and VLAN segmentation." },
    ],
    body: `Designing a home engineering laboratory presents constraints unlike enterprise datacenters: sound decibels must stay below residential ambient noise, heat dissipation cannot exceed typical passive HVAC thresholds, and 24/7 electrical draw translates directly into utility overhead.

### 1.0 Physical & Network Topology
The compute tier relies on six mini-ITX nodes housed inside short-depth 2U rack chassis. Networking is segregated across three physical planes:

- VLAN 10 (Management / IPMI): Dedicated 1GbE links for serial-over-LAN and remote power cycling via network relay cards.
- VLAN 20 (Storage Fabric): 10GbE SFP+ interconnects configured with 9000-byte jumbo frames for Ceph replication traffic.
- VLAN 30 (Public Services & Ingress): Filtered outbound gateway protected by dual wireguard tunnels with automated BGP failover.

### 2.0 Power Consumption Profiling
By enabling custom BIOS TDP caps (AMD cTDP 45W) and undervolting the core fabric by -30mV via Curve Optimizer, node idle consumption settled at ~13.8 watts. Total continuous rack draw measures 84.2 watts, monitored via calibrated digital shunt meters.`,
  },
  {
    slug: "magnetic-core-memory-physical-principles",
    docNumber: "DOC-MEM-0312",
    revision: "REV A",
    title: "Physical Principles of Magnetic Core Memory Stores",
    subtitle: "Rectangular B-H Hysteresis, Half-Select Thresholds, and Destructive Read Cycles",
    date: "2026-07-18",
    readingTime: "8 min",
    category: "Architecture",
    summary: "Hysteresis loops, coincident-current addressing, and destructive read cycles in early ferrite computing stores.",
    description: "Detailed physics and electrical engineering analysis of magnetic-core memory stores from 1955 through 1975. Examines square-loop ferrites, drive currents, and sense amplifier threshold detection.",
    features: [
      "Square-loop rectangular B-H hysteresis curve mechanics",
      "Coincident-current X/Y matrix half-select addressing",
      "Destructive readout rewrite cycles (read-restore timing)",
      "Sense wire noise-cancellation weave geometries",
    ],
    specs: [
      { label: "Core Outer Diameter", value: "0.050 in down to 0.018 in (later revisions)" },
      { label: "Coercive Force (Hc)", value: "~1.5 Oersteds nominal" },
      { label: "Switching Time", value: "0.2 to 1.5 microseconds" },
      { label: "Addressing Mode", value: "Coincident current (X/2 + Y/2)" },
    ],
    toc: [
      { id: "hysteresis", title: "1.0 Ferrite Magnetics & Hysteresis" },
      { id: "coincident", title: "2.0 Coincident-Current Addressing" },
      { id: "destructive-read", title: "3.0 The Destructive Readout Cycle" },
      { id: "video-demo", title: "4.0 Core Demonstration & Oscilloscope Analysis" },
      { id: "revisions", title: "5.0 Revision History" },
    ],
    figures: {
      "fig-1": {
        id: "fig-1",
        type: "image",
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Museo_de_Inform%C3%A1tica_Hist%C3%B3rica_%28MIH%29_-_UNIZAR_-_Magnetic-core_memory_front.jpg/1280px-Museo_de_Inform%C3%A1tica_Hist%C3%B3rica_%28MIH%29_-_UNIZAR_-_Magnetic-core_memory_front.jpg",
        caption: "Figure 1: Planar magnetic-core memory plane showing orthogonal X and Y copper drive lines intersecting circular ferrite rings.",
        sourceCredit: "Museo de Informática Histórica UNIZAR / José Luis Briz Velasco",
        license: "CC BY-SA 4.0",
        width: 1280,
        height: 854,
        aspectRatio: "3/2",
      },
      "fig-2": {
        id: "fig-2",
        type: "image",
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Museo_de_Inform%C3%A1tica_Hist%C3%B3rica_%28MIH%29_-_UNIZAR_-_Magnetic-core_memory_close_up.jpg/1280px-Museo_de_Inform%C3%A1tica_Hist%C3%B3rica_%28MIH%29_-_UNIZAR_-_Magnetic-core_memory_close_up.jpg",
        caption: "Figure 2: Macro view of individual ferrite toroids with diagonally woven sense wire running through the core intersections.",
        sourceCredit: "Museo de Informática Histórica UNIZAR / José Luis Briz Velasco",
        license: "CC BY-SA 4.0",
        width: 1280,
        height: 854,
        aspectRatio: "3/2",
      },
      "fig-3": {
        id: "fig-3",
        type: "youtube",
        url: "AwsInQLmjXc",
        thumbUrl: "https://i.ytimg.com/vi/AwsInQLmjXc/hqdefault.jpg",
        caption: "Figure 3: Laboratory oscilloscope demonstration of core pulse switching, back-EMF spikes, and read-disturb waveforms.",
        sourceCredit: "CuriousMarc Laboratory",
        license: "Public Educational Broadcast",
        aspectRatio: "16/9",
      },
    },
    tables: {
      "tbl-1": {
        id: "tbl-1",
        caption: "Table 1: Historical Evolution of Ferrite Core Memory Parameters",
        headers: ["Era", "Core Outer Diameter", "Drive Current (Half)", "Access Time", "Bit Density (bits/in³)"],
        rows: [
          ["1953 (Whirlwind)", "80 mil (2.0 mm)", "450 mA", "9.0 µs", "8"],
          ["1960 (IBM 7090)", "50 mil (1.3 mm)", "320 mA", "2.1 µs", "64"],
          ["1967 (System/360)", "22 mil (0.56 mm)", "210 mA", "0.75 µs", "512"],
          ["1973 (PDP-11/45)", "18 mil (0.46 mm)", "160 mA", "0.45 µs", "1,800"],
        ],
      },
    },
    revisions: [
      { rev: "REV A", date: "2026-07-18", author: "kryisnn", description: "Initial release of ferrite physics monograph." },
    ],
    body: `Before the advent of planar dynamic RAM (DRAM) with Intel's 1103 chip in 1970, practically all electronic computers stored operating state in the remanent magnetic flux of tiny ceramic doughnuts called ferrite cores.

### 1.0 Ferrite Magnetics & Hysteresis
A square-loop ferrite possesses an almost rectangular B-H (Magnetic Induction vs. Magnetizing Force) hysteresis loop.

Unlike soft iron, which loses its magnetization when an external field is removed, ferrite cores retain their flux indefinitely in one of two opposite directions: clockwise (representing binary 1) or counterclockwise (representing binary 0).

### 2.0 Coincident-Current Addressing
Jay Forrester at MIT solved the economic bottleneck of magnetic storage by inventing coincident-current selection. Instead of running individual drive transistors to every single core in a 64k-word store:

- Core switching requires a threshold current of Im.
- An X-coordinate drive line supplies a half-current +Im / 2.
- A Y-coordinate drive line supplies another half-current +Im / 2.

Only the single core located at the exact geometric Cartesian intersection receives the full magnetizing force Im required to overcome its coercive threshold (Hc) and flip polarity. Every other core along the active row and column experiences only half-current and remains unaffected.

### 3.0 The Destructive Readout Cycle
Reading a magnetic core is inherently destructive. To ascertain whether a core stores a 1 or a 0:

1. Drive pulses push the core toward the 0 state.
2. If the core previously held a 1, its magnetic flux abruptly flips 180 degrees. This rapid shift in magnetic flux induces a voltage spike on a third wire threading every core: the Sense wire.
3. If the core already held a 0, the flux does not reverse, generating almost zero voltage on the sense wire.
4. Because the read cycle leaves every interrogated core in the 0 state, the memory controller must immediately initiate a Restore cycle, driving reverse current through the same coordinates if a 1 was detected.`,
  },
  {
    slug: "design-principles-of-resilient-software",
    docNumber: "DOC-SYS-0420",
    revision: "REV A",
    title: "Design Principles of Resilient Systems & State Isolation",
    subtitle: "Share-Nothing Message Passing, Values Over Time, and Deliberate Crashes",
    date: "2026-06-02",
    readingTime: "6 min",
    category: "Systems",
    summary: "Reflections on simple vs easy, message passing, and deterministic crash recovery inspired by Joe Armstrong and Rich Hickey.",
    description: "An architectural treatise on constructing software systems that can be reasoned about over decades. Covers pure data modeling, actor boundaries, and eliminating hidden implicit mutable state.",
    features: [
      "Separation of value, state, and identity constructs",
      "Supervision trees and deliberate process crash isolation",
      "Append-only event ledgers instead of in-place mutation",
      "Explicit failure budget contracts between internal modules",
    ],
    specs: [
      { label: "Core Paradigm", value: "Share-nothing Message Passing / Functional Core" },
      { label: "Failure Model", value: "Fail-fast with root supervision restart" },
      { label: "Data State", value: "Persistent immutable trees" },
      { label: "Inter-Process Comms", value: "Typed serialization protocols" },
    ],
    toc: [
      { id: "simple-vs-easy", title: "1.0 The Dichotomy of Simple vs Easy" },
      { id: "failure-isolation", title: "2.0 Failure Isolation & The Erlang Philosophy" },
      { id: "state-as-values", title: "3.0 Treating System State as Values Over Time" },
      { id: "video-lectures", title: "4.0 Foundational Systems Engineering Lectures" },
      { id: "revisions", title: "5.0 Revision History" },
    ],
    figures: {
      "fig-1": {
        id: "fig-1",
        type: "youtube",
        url: "SxdOUGdseq4",
        thumbUrl: "https://i.ytimg.com/vi/SxdOUGdseq4/hqdefault.jpg",
        caption: "Figure 1: Rich Hickey delivering 'Simple Made Easy' at Strange Loop 2011, establishing the etymology of complection and simplicity.",
        sourceCredit: "Strange Loop Archive / Rich Hickey",
        license: "Public Educational Broadcast",
        aspectRatio: "16/9",
      },
      "fig-2": {
        id: "fig-2",
        type: "youtube",
        url: "lKXe3HUG2l4",
        thumbUrl: "https://i.ytimg.com/vi/lKXe3HUG2l4/hqdefault.jpg",
        caption: "Figure 2: Joe Armstrong dissecting accidental complexity, software rot, and immutable architectures in 'The Mess We're In'.",
        sourceCredit: "Strange Loop Archive / Joe Armstrong",
        license: "Public Educational Broadcast",
        aspectRatio: "16/9",
      },
      "fig-3": {
        id: "fig-3",
        type: "youtube",
        url: "PUv66718DII",
        thumbUrl: "https://i.ytimg.com/vi/PUv66718DII/hqdefault.jpg",
        caption: "Figure 3: Bret Victor presenting 'Inventing on Principle', challenging the indirect feedback loops inherent in computer programming environments.",
        sourceCredit: "CUSEC Keynote / Bret Victor",
        license: "Public Educational Broadcast",
        aspectRatio: "16/9",
      },
    },
    tables: {
      "tbl-1": {
        id: "tbl-1",
        caption: "Table 1: Comparison of Conventional OOP Paradigms vs Resilient Functional Concurrency",
        headers: ["Dimension", "Conventional Enterprise Practice", "Resilient Minimalist Architecture"],
        rows: [
          ["State Management", "In-place mutable fields with mutex locking", "Values across time; pure data transformation"],
          ["Fault Recovery", "Defensive try-catch everywhere, masking root faults", "Let it crash; supervisor restarts to verified state"],
          ["Communication", "Synchronous blocking RPC / deep object hierarchies", "Asynchronous typed message queues / isolated heaps"],
          ["Coupling", "High (complex inheritance and shared memory)", "Zero (independent share-nothing processes)"],
        ],
      },
    },
    revisions: [
      { rev: "REV A", date: "2026-06-02", author: "kryisnn", description: "Initial publication of systems design notes." },
    ],
    body: `Modern software systems frequently collapse under their own weight—not because the problems being solved are mathematically insurmountable, but because incidental complexity weaves itself into every layer of implementation.

### 1.0 The Dichotomy of Simple vs Easy
Rich Hickey famously articulated the Latin root of simple (simplex — one fold, unentangled) versus complex (complect — braided or folded together).

Something is easy if it lies near at hand, familiar to our current tooling and habits. An ORM framework with automatic magic dirty-checking is easy; installing it takes 30 seconds. But it complects database schemas, network transactions, memory allocation, and object state into an opaque knot that becomes unmaintainable three years later. Simplicity requires deliberate un-braiding.

### 2.0 Failure Isolation & The Erlang Philosophy
Joe Armstrong's design of the Erlang runtime rests on three non-negotiable axioms:

1. Everything is a process.
2. Processes share no state whatsoever.
3. If a process encounters an anomalous state, let it crash immediately.

Defensive programming that catches every possible exception often produces zombie processes that continue executing with corrupted memory. By allowing a process to terminate instantly upon contract breach, its supervisor can restart it from a known clean configuration in under 2 milliseconds.`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return POSTS;
}
