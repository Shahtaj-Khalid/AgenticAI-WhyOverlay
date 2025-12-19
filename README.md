# AgenticAI - WhyOverlay

A minimal, elegant UI demo for an AI agent UX concept that provides transparency into agent decisions.

## About This Repo

This project/demo focuses on the UX layer of AI agent systems.

Agent behaviors in this demo are intentionally mocked to highlight interaction design, explainability, and user control — not system capability or backend intelligence.

## Concept

WHY Overlay is designed to plug into any agentic AI application as an independent explainability layer.

Instead of embedding complex agent logic, dashboards, or verbose reasoning directly into the main product UI, WHY Overlay carries the responsibility of:

- revealing agent reasoning on demand
- clarifying which agents influenced a decision
- showing what was understood, remembered, and executed
- providing clear points for user intervention

This allows product teams to keep their core UI clean and focused, while still offering transparency, trust, and control when users ask "Why?"

## Features

- **Draggable "Why?" Bubble**: A soft, non-intrusive bubble that can be moved anywhere on screen
- **Agent Avatars**: 3-4 minimal geometric agent representations that appear from screen edges
- **Agent Detail Panel**: Clean panel showing four key sections:
  - What I Understood
  - What I Remembered
  - What I Did
  - How You Can Intervene
- **Smooth Animations**: Subtle fade and slide transitions throughout
- **Enterprise-Friendly Design**: Minimalist, calm, and professional aesthetic

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── WhyBubble.tsx    # Draggable "Why?" bubble
│   ├── AgentAvatar.tsx  # Agent avatar component
│   └── AgentPanel.tsx   # Agent detail panel
└── package.json
```

## Usage

1. Click the "Why?" bubble to reveal agent avatars
2. Click any agent to see their detailed explanation
3. Click the X button or click outside to close the panel
4. Drag the "Why?" bubble to reposition it anywhere on screen

