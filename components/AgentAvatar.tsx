'use client'

interface AgentAvatarProps {
    agent: {
        id: string
        name: string
        role: string
        color: string
        index: number
    }
    onClick: () => void
    isVisible: boolean
}

export default function AgentAvatar({ agent, onClick, isVisible }: AgentAvatarProps) {
    return (
        <div
            className={`relative cursor-pointer transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-20 blur-md'
                }`}
            style={{
                transitionDelay: `${agent.index * 100}ms`,
            }}
            onClick={onClick}
        >
            <div className="flex flex-col items-center gap-6 group relative">
                {/* Holographic interface outline - Passengers style */}
                <div className="relative inline-block agent-holographic" style={{ '--agent-color': agent.color, '--agent-id': agent.id } as React.CSSProperties}>
                    {/* Typography with subtle radial glow and animated lines */}
                    <div className="text-center space-y-2 relative z-10 px-8 py-4 agent-text agent-glow-container" style={{ '--agent-color': agent.color } as React.CSSProperties}>
                        {/* Left animated line */}
                        <div className="agent-line-left"></div>
                        {/* Right animated line */}
                        <div className="agent-line-right"></div>
                        {/* Rotating circular glow - cycles through all agents */}
                        <div className={`agent-scan-circle agent-scan-${agent.index}`} style={{ '--agent-color': agent.color } as React.CSSProperties}></div>
                        <div className={`text-base font-light tracking-wide agent-name-text agent-name-${agent.index}`} style={{ '--agent-color': agent.color } as React.CSSProperties}>
                            {agent.name}
                        </div>
                        <div className={`text-xs font-extralight tracking-wider uppercase agent-role-text agent-role-${agent.index}`} style={{ '--agent-color': agent.color } as React.CSSProperties}>
                            {agent.role}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

