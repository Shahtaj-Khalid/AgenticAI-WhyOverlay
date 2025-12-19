'use client'

interface AgentPanelProps {
    agent: {
        id: string
        name: string
        role: string
        color: string
    }
    onClose: () => void
    isVisible: boolean
}

export default function AgentPanel({ agent, onClose, isVisible }: AgentPanelProps) {
    // Agent-specific content
    const agentContent: Record<string, Array<{ title: string; content: string }>> = {
        research: [
            {
                title: 'What I Understood',
                content: 'I identified that this task required background information and relevant data to support a quarterly business report.',
            },
            {
                title: 'What I Remembered',
                content: 'I referenced commonly used financial metrics and reporting standards typically expected in quarterly summaries.',
            },
            {
                title: 'What I Did',
                content: 'I gathered revenue-related data points, industry benchmarks, and example report structures to inform the analysis.',
            },
            {
                title: 'How You Can Intervene',
                content: 'You can ask me to include external benchmarks, focus on a specific market, or expand research depth.',
            },
        ],
        planner: [
            {
                title: 'What I Understood',
                content: 'I understood that the goal was to produce a clear, stakeholder-ready quarterly revenue report.',
            },
            {
                title: 'What I Remembered',
                content: 'I recalled that clarity and concise structure are preferred over raw data dumps in executive reports.',
            },
            {
                title: 'What I Did',
                content: 'I organized the report into sections, prioritized key metrics, and defined how insights should be presented.',
            },
            {
                title: 'How You Can Intervene',
                content: 'You can change priorities, adjust the report structure, or request a different level of detail.',
            },
        ],
        compliance: [
            {
                title: 'What I Understood',
                content: 'I recognized that the report must follow internal reporting standards and data usage constraints.',
            },
            {
                title: 'What I Remembered',
                content: 'I considered common compliance requirements for financial summaries and data handling.',
            },
            {
                title: 'What I Did',
                content: 'I checked that only approved data sources were used and that the output stayed within policy boundaries.',
            },
            {
                title: 'How You Can Intervene',
                content: 'You can ask me to relax or tighten constraints, or explain why certain data was excluded.',
            },
        ],
        executor: [
            {
                title: 'What I Understood',
                content: 'I understood that the final step was to generate a usable, formatted report.',
            },
            {
                title: 'What I Remembered',
                content: 'I accounted for typical output formats used in previous reports.',
            },
            {
                title: 'What I Did',
                content: 'I generated the final report with charts and summaries based on the planned structure.',
            },
            {
                title: 'How You Can Intervene',
                content: 'You can request revisions, alternate formats, or regenerate the output with changes.',
            },
        ],
    }

    const sections = agentContent[agent.id] || agentContent.research

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-700 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
            style={{ maxHeight: '75vh' }}
        >
            <div className="max-w-5xl mx-auto px-8 py-10">
                {/* Glassmorphism panel */}
                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-4">
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500"
                                style={{
                                    backgroundColor: `${agent.color}20`,
                                    border: `1px solid ${agent.color}40`,
                                    boxShadow: `0 0 20px ${agent.color}15`,
                                }}
                            >
                                <div
                                    className="w-6 h-6 rounded-full"
                                    style={{
                                        backgroundColor: `${agent.color}40`,
                                    }}
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-light text-white/90 tracking-wide mb-1">
                                    {agent.name}
                                </h2>
                                <p className="text-sm font-extralight text-white/40 tracking-wider uppercase">
                                    {agent.role}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white/40 hover:text-white/70 transition-all duration-300 p-3 hover:bg-white/5 rounded-full"
                            aria-label="Close panel"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Content Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-y-auto" style={{ maxHeight: 'calc(75vh - 200px)' }}>
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="bg-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 ease-in-out"
                            >
                                <h3 className="text-xs font-light text-white/50 mb-4 uppercase tracking-widest">
                                    {section.title}
                                </h3>
                                <p className="text-sm font-light text-white/70 leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

