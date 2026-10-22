export interface ProjectItem {
  id: string;
  name: string;
  repo: string;
  tagline: string;
  category: "Systems & NixOS" | "Kernel & Low-Level" | "Full-Stack Web" | "Minimal Tools";
  summary: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  highlightSnippet?: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface WorkExperience {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface ProfileData {
  name: string;
  handle: string;
  role: string;
  headline: string;
  location: string;
  bio: string;
  status: string;
  github: string;
  linkedin: string;
  email: string;
  skills: {
    category: string;
    items: string[];
  }[];
  projects: ProjectItem[];
  experience: WorkExperience[];
}

export const PROFILE: ProfileData = {
  name: "Davinda Khrisna Adyatma",
  handle: "kryisnn",
  role: "Systems & Full-Stack Engineer",
  headline: "Declarative infrastructure, Unix kernels, reproducible systems, and minimalist software engineering.",
  location: "Indonesia",
  status: "OPEN TO HIGH-IMPACT SYSTEMS & PLATFORM ROLES",
  github: "https://github.com/davindakhrisna",
  linkedin: "https://www.linkedin.com/in/davinda-khrisna-adyatma-6534432b2/",
  email: "arpeggio.gns@gmail.com",
  bio: "Software and systems engineer specialized in declarative operating systems (NixOS), embedded & experimental Unix kernels (Xinu), and performance-focused full-stack web architectures. Strong advocate of the zero-dependency principle, reproducible developer environments, and robust, self-healing platforms.",
  skills: [
    {
      category: "Infrastructure & Operating Systems",
      items: ["Nix / NixOS Flakes", "Linux Kernel & QEMU/KVM", "Libvirt / Virtualization", "Docker & Rootless Containers", "Tailscale Mesh Networking", "ZFS / Ceph Distributed Storage"],
    },
    {
      category: "Languages & Core Runtimes",
      items: ["C / POSIX C99", "Rust", "Nix Expression Language", "TypeScript / JavaScript", "Python 3 Standard Library", "Shell / Bash Scripting", "Go"],
    },
    {
      category: "Frontend & Web Architecture",
      items: ["Next.js (App Router / SSG)", "React 19", "Tailwind CSS v4", "shadcn/ui & Radix Primitives", "REST / OPDS / Typed RPCs", "Responsive & Accessible UI (WCAG AA)"],
    },
    {
      category: "Tooling & Developer Experience",
      items: ["Neovim / Lua / LSP", "Direnv & Scoped Toolchains", "Git Automation / CI Workflows", "GDB & Serial Console Debugging", "Make / Build Systems"],
    },
  ],
  projects: [
    {
      id: "flint-nixos",
      name: "Flint NixOS",
      repo: "davindakhrisna/flint-nixos",
      tagline: "Opinionated, single-flake declarative operating system for development and homelab hosts.",
      category: "Systems & NixOS",
      summary: "A modular, auto-importing NixOS configuration built on flake-parts. Unifies kernel tuning, Hyprland Wayland compositors, and scoped development toolchains across heterogeneous Intel/AMD x86_64 machines.",
      tech: ["Nix", "NixOS", "Hyprland", "Lua", "Shell"],
      metrics: [
        { label: "Architecture", value: "Flake-parts modular" },
        { label: "Profiles", value: "Light / Medium / Heavy" },
        { label: "Deployment", value: "Single-command nh switch" },
      ],
      highlightSnippet: "Automatic module discovery via import-tree; project-scoped compilers via mkenv without polluting global system paths.",
      githubUrl: "https://github.com/davindakhrisna/flint-nixos",
    },
    {
      id: "xinu-nixos",
      name: "Xinu on NixOS",
      repo: "davindakhrisna/xinu-nixos",
      tagline: "Bare-metal educational Unix kernel experimentation via diskless PXE/TFTP on NixOS.",
      category: "Kernel & Low-Level",
      summary: "A headless virtualized lab environment for compiling and debugging the Xinu operating system on NixOS. Replaces legacy serial cables with QEMU/KVM backends, virtual bridges, and PXE bootloaders.",
      tech: ["C", "Assembly", "Nix", "QEMU/KVM", "Libvirt", "TFTP/DHCP"],
      metrics: [
        { label: "Target Architecture", value: "x86 Virtualized / Serial" },
        { label: "Boot Method", value: "Diskless PXE TFTP" },
        { label: "Host Requirement", value: "Zero Debian VM overhead" },
      ],
      highlightSnippet: "Direct serial console integration with automated network creation and instantaneous kernel re-flash cycles.",
      githubUrl: "https://github.com/davindakhrisna/xinu-nixos",
    },
    {
      id: "minimal-opds",
      name: "Minimal OPDS",
      repo: "davindakhrisna/minimal-opds",
      tagline: "Self-hosted, zero-dependency OPDS 1.2 digital library server in pure standard library Python.",
      category: "Minimal Tools",
      summary: "An ultra-lean book catalog and streaming server. Extracts EPUB Dublin Core metadata, generates vector SVG covers for PDFs on the fly, and streams range-request chunks to mobile e-readers with zero pip packages.",
      tech: ["Python 3", "SQLite3", "OPDS 1.2 XML", "HTTP Range"],
      metrics: [
        { label: "Dependencies", value: "0 External Libraries" },
        { label: "Memory Footprint", value: "< 14 MB RSS" },
        { label: "Compatibility", value: "Moon+ Reader, KOReader" },
      ],
      highlightSnippet: "Full OPDS acquisition feed and web management interface written without external frameworks or bulky dependencies.",
      githubUrl: "https://github.com/davindakhrisna/minimal-opds",
    },
    {
      id: "senja-ai",
      name: "Senja AI",
      repo: "davindakhrisna/senja-ai",
      tagline: "Modern conversational AI interface with streaming responses and local context management.",
      category: "Full-Stack Web",
      summary: "Full-stack application engineered with modern TypeScript, responsive interfaces, and real-time streaming LLM adapters with structured error boundaries.",
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
      metrics: [
        { label: "Rendering", value: "Server-Sent Events / Stream" },
        { label: "Design", value: "Minimalist Ergonomic UI" },
      ],
      githubUrl: "https://github.com/davindakhrisna/senja-ai",
    },
    {
      id: "piket-opsi",
      name: "Piket Opsi",
      repo: "davindakhrisna/piket-opsi",
      tagline: "Operational duty schedule coordinator and shift notification system.",
      category: "Full-Stack Web",
      summary: "Collaborative shift management and rotation planner featuring automated assignment algorithms, calendar exports, and responsive duty rosters.",
      tech: ["TypeScript", "React", "Tailwind CSS", "Nix"],
      metrics: [
        { label: "Core Feature", value: "Algorithmic Rotation" },
        { label: "State", value: "Reactive Local & Cloud Sync" },
      ],
      githubUrl: "https://github.com/davindakhrisna/piket-opsi",
    },
    {
      id: "hobby",
      name: "Technical Monograph & Blog",
      repo: "davindakhrisna/hobby",
      tagline: "Component datasheet-inspired technical blog documenting low-level hardware & homelab infrastructure.",
      category: "Full-Stack Web",
      summary: "A technical publication system where posts are formatted as electronic component datasheets with verified public media, lazy-loaded interactive video streams, and parts selection tables.",
      tech: ["Next.js 16", "Tailwind v4", "shadcn/ui", "Radix Primitives"],
      metrics: [
        { label: "Aesthetic", value: "Graphite / Cool Paper" },
        { label: "Serving", value: "Tailscale Serve TLS" },
      ],
      githubUrl: "https://github.com/davindakhrisna/hobby",
      liveUrl: "https://homelab.auxois-searobin.ts.net:8455",
    },
  ],
  experience: [
    {
      role: "Systems & Infrastructure Engineer",
      organization: "Independent / Homelab Engineering",
      period: "2023 — Present",
      location: "Indonesia",
      summary: "Designing, building, and maintaining self-hosted infrastructure, declarative operating system configurations, and developer productivity tooling.",
      achievements: [
        "Architected multi-node low-power homelab with 10GbE SFP+ interconnects and Ceph distributed storage.",
        "Created Flint NixOS: a unified declarative configuration deployed across production laptops and headless servers.",
        "Engineered zero-dependency services and diskless PXE kernel experimentation environments.",
      ],
      skills: ["NixOS", "Linux", "Networking", "Hardware", "Performance Tuning"],
    },
  ],
};
