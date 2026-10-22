export interface CaseStudy {
  id: string;
  title: string;
  repo: string;
  domain: string;
  context: string;
  problem: string;
  architecture: string[];
  tradeoffs: { choice: string; why: string; rejectedAlternative: string }[];
  failureMode: string;
  tech: string[];
  githubUrl: string;
}

export interface TimelineEntry {
  period: string;
  headline: string;
  institution: string;
  role: string;
  location: string;
  description: string;
  keyOutputs: string[];
}

export interface PortfolioProfile {
  name: string;
  handle: string;
  role: string;
  summary: string;
  biography: string[];
  location: string;
  github: string;
  linkedin: string;
  email: string;
  timeline: TimelineEntry[];
  caseStudies: CaseStudy[];
  operationalStack: {
    category: string;
    decision: string;
    rationale: string;
  }[];
}

export const PORTFOLIO: PortfolioProfile = {
  name: "Davinda Khrisna Adyatma",
  handle: "kryisnn",
  role: "Systems & Software Engineer",
  summary: "Undergraduate software engineer at Telkom University. Focused on reproducible Linux environments (NixOS), diskless kernel testing (Xinu on QEMU/KVM), zero-dependency standard library services, and deliberate, minimalist web engineering.",
  location: "Purwokerto / Bandung, Indonesia",
  github: "https://github.com/davindakhrisna",
  linkedin: "https://www.linkedin.com/in/davinda-khrisna-adyatma-6534432b2/",
  email: "arpeggio.gns@gmail.com",
  biography: [
    "I started writing code and configuring network equipment at SMK Telkom Purwokerto, where I became immersed in practical computer networking, Linux systems administration, and student technical journalism. Early encounters with brittle server state and broken dependencies convinced me that ad-hoc server configuration is technical debt.",
    "Now an undergraduate at Telkom University, I design and run declarative infrastructure and systems experiments. My primary work centers around NixOS flakes (eliminating configuration drift across heterogeneous machines), virtualized bare-metal operating system development (running diskless Xinu kernels via PXE/TFTP), and building lean software that refuses bloated framework dependencies.",
    "I prioritize simplicity over ease: choosing the Python standard library over bulky web frameworks, declarative Nix builds over mutable Dockerfiles, and share-nothing, let-it-crash concurrency architectures over defensive try-catch spaghetti.",
  ],
  timeline: [
    {
      period: "2023 — Present",
      headline: "Telkom University // Undergraduate Studies & Systems Engineering",
      institution: "Telkom University",
      role: "Informatics / Systems Student & Competitor",
      location: "Bandung, Indonesia",
      description: "Focusing on operating systems theory, distributed systems, and real-time networking. Designed Flint NixOS to maintain reproducible development workspaces across personal and homelab servers. Co-developed AI-assisted platform prototypes for national competitions (LIDM ITDP division) and built diskless kernel virtual labs.",
      keyOutputs: [
        "Flint NixOS: Modular flake-based OS configuration managing kernel to Wayland desktop across multiple hosts.",
        "Xinu on NixOS: Diskless PXE/TFTP bootloader lab running bare-metal educational Unix kernels on QEMU/KVM.",
        "Minimal OPDS: Zero-dependency digital library server written exclusively in Python 3 standard library.",
      ],
    },
    {
      period: "2020 — 2023",
      headline: "SMK Telkom Purwokerto // Computer & Network Engineering",
      institution: "SMK Telkom Purwokerto",
      role: "Vocational Engineering Student",
      location: "Purwokerto, Indonesia",
      description: "Rigorous vocational grounding in TCP/IP networking, VLAN segmentation, Linux system administration (Debian/Ubuntu Server), and web development fundamentals. Active contributor to student publications and early web projects.",
      keyOutputs: [
        "Certified in Web Frontend & Modern CSS architectures (Gamelab Indonesia).",
        "Completed AWS & Linux Cloud Infrastructure fundamentals training.",
        "Built early web tools and automated deployment scripts for school and community projects.",
      ],
    },
  ],
  caseStudies: [
    {
      id: "flint-nixos",
      title: "Flint NixOS // Declarative Multi-Host Operating System",
      repo: "davindakhrisna/flint-nixos",
      domain: "Declarative Systems & Reproducible Environments",
      context: "Maintaining divergent dotfiles across development laptops, testing rigs, and headless home servers created continuous drift, conflicting toolchains, and hours wasted diagnosing missing system headers.",
      problem: "Traditional Linux distributions couple application runtime versions to the global host environment. Upgrading a compiler or graphic driver for one project routinely broke unrelated tooling.",
      architecture: [
        "Flake-Parts architecture with automatic module resolution via import-tree — eliminating fragile manual import lists.",
        "Three distinct deployment profiles (light, medium, heavy) defined per host; builds evaluate strictly and deterministically.",
        "Project-scoped developer environments through mkenv + direnv, keeping compilers, language SDKs, and formatters completely isolated from the global system path.",
      ],
      tradeoffs: [
        {
          choice: "Pure declarative NixOS over Ubuntu + Ansible/Docker",
          why: "NixOS guarantees byte-for-byte reproducibility and transactional rollback to previous bootloader generations on failure.",
          rejectedAlternative: "Ansible playbooks (which fail on subtle upstream package repository changes).",
        },
        {
          choice: "Wayland (Hyprland) with lightweight Waybar and Dunst",
          why: "Zero tear graphics, fractional scaling support, and sub-40MB memory footprint for the compositor.",
          rejectedAlternative: "Heavy desktop environments (GNOME/KDE) with non-declarative dconf state.",
        },
      ],
      failureMode: "Initially, monolithic configuration files made adding new hosts tedious. Solved by refactoring into modular imports where each host specifies only its hardware profile and profile tier.",
      tech: ["Nix", "NixOS", "Hyprland", "Lua", "Shell", "Waybar"],
      githubUrl: "https://github.com/davindakhrisna/flint-nixos",
    },
    {
      id: "xinu-nixos",
      title: "Xinu on NixOS // Diskless QEMU/KVM Virtual Lab",
      repo: "davindakhrisna/xinu-nixos",
      domain: "Kernel Architecture & Embedded Systems",
      context: "Educational operating system courses typically require legacy physical serial port hardware (RS-232) or monolithic Debian development virtual machines to compile and test the Xinu operating system.",
      problem: "Running a full graphical guest VM just to cross-compile a 60KB kernel image and monitor its serial output causes unnecessary virtualization overhead and disconnects students from modern host tooling.",
      architecture: [
        "Nix-shell provides pinned cross-compilers (GCC, binutils, yacc/lex) directly on the host.",
        "Libvirt orchestrates a virtual network supplying isolated PXE DHCP, TFTP image delivery, and serial console redirection.",
        "A single run-xinu.sh script compiles the kernel, stages the binary in the TFTP boot root, resets the virtual target, and connects to serial stdout via virsh.",
      ],
      tradeoffs: [
        {
          choice: "Diskless PXE network boot over virtual hard disk images",
          why: "Kernel re-flashing takes 200 milliseconds via TFTP versus rebuilding and mounting partition images.",
          rejectedAlternative: "Virtual disk images requiring loopback mounts and manual partition table manipulation.",
        },
      ],
      failureMode: "Target kernel crashed silently on early boot when DHCP lease times expired. Diagnosed via Wireshark on the virtual bridge and fixed by assigning static IP reservation in libvirt's XML network schema.",
      tech: ["C", "Assembly", "Nix", "QEMU/KVM", "Libvirt", "TFTP/DHCP"],
      githubUrl: "https://github.com/davindakhrisna/xinu-nixos",
    },
    {
      id: "minimal-opds",
      title: "Minimal OPDS // Zero-Dependency Standard Library Server",
      repo: "davindakhrisna/minimal-opds",
      domain: "Minimalist Software & Protocols",
      context: "Popular self-hosted e-book managers (Calibre-web, Kavita) require heavy Python virtualenvs, hundreds of third-party wheels, and hundreds of megabytes of RAM just to serve an OPDS catalog XML to e-readers.",
      problem: "For low-power home servers and embedded SBCs, running a heavy container with a bloated Node/Python dependency tree for a simple book acquisition feed is inefficient.",
      architecture: [
        "Written strictly in Python 3 standard library: sqlite3 for storage, http.server for request handling, zipfile for EPUB container parsing, and xml.etree for OPDS 1.2 XML generation.",
        "On-the-fly Dublin Core metadata extraction for EPUBs and procedural monochrome SVG book cover generation for PDFs.",
        "Full support for HTTP Range request headers, allowing Moon+ Reader and KOReader to seek and stream large documents without loading entire files into server memory.",
      ],
      tradeoffs: [
        {
          choice: "Python stdlib only with zero external pip packages",
          why: "Will run unmodified on any Python 3.8+ system 10 years from now without broken dependency trees or security CVE patches.",
          rejectedAlternative: "Flask/FastAPI + SQLAlchemy + Pillow (which would add 120MB+ of dependencies).",
        },
      ],
      failureMode: "EPUBs with non-standard packaging structures broke the metadata parser. Resolved by inspecting container.xml rootfile declarations rather than assuming standard paths.",
      tech: ["Python 3 (Stdlib)", "SQLite3", "OPDS 1.2 XML", "HTTP Range"],
      githubUrl: "https://github.com/davindakhrisna/minimal-opds",
    },
  ],
  operationalStack: [
    {
      category: "Operating System",
      decision: "NixOS (Flakes / Unstable Channel)",
      rationale: "Bit-level reproducibility, atomic system upgrades, and instant rollback. Configuration is code, committed to Git.",
    },
    {
      category: "Networking Fabric",
      decision: "Tailscale Mesh + 10GbE SFP+ Hardware",
      rationale: "Encrypted Wireguard overlay for seamless inter-machine access without port forwarding; 10GbE optical for low-latency cluster storage.",
    },
    {
      category: "Editor & Workflow",
      decision: "Neovim (Lua / Snacks / LSP) + Tmux",
      rationale: "Sub-15ms startup, terminal-native buffer manipulation, and deep syntax intelligence without graphical editor overhead.",
    },
    {
      category: "Web Philosophy",
      decision: "Next.js Static Generation (SSG) + Radix / Tailwind",
      rationale: "Prerendered HTML for instant loading and zero server-side attack surface. Clean semantic elements with zero layout shift.",
    },
  ],
};
