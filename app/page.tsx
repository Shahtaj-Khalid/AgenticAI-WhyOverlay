'use client'

import { useState } from 'react'
import WhyBubble from '@/components/WhyBubble'
import AgentAvatar from '@/components/AgentAvatar'
import AgentPanel from '@/components/AgentPanel'

interface Agent {
    id: string
    name: string
    role: string
    color: string
    index: number
}

const mockAgents: Agent[] = [
    {
        id: 'research',
        name: 'Research',
        role: 'Discovery',
        color: '#7A6B8A', // Violet-gray - muted, desaturated
        index: 0,
    },
    {
        id: 'planner',
        name: 'Planner',
        role: 'Strategy',
        color: '#6B7A8A', // Blue-gray - muted, desaturated
        index: 1,
    },
    {
        id: 'compliance',
        name: 'Compliance',
        role: 'Guardrails',
        color: '#8A7A6B', // Warm amber-gray - muted, desaturated
        index: 2,
    },
    {
        id: 'executor',
        name: 'Executor',
        role: 'Action',
        color: '#6B8A7A', // Green-gray - muted, desaturated
        index: 3,
    },
]

export default function Home() {
    const [isWhyClicked, setIsWhyClicked] = useState(false)
    const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
    const [agentsVisible, setAgentsVisible] = useState(false)

    const handleWhyClick = () => {
        setIsWhyClicked(true)
        // Delay agent appearance for smooth animation
        setTimeout(() => {
            setAgentsVisible(true)
        }, 200)
    }

    const handleAgentClick = (agent: Agent) => {
        setSelectedAgent(agent)
    }

    const handleClosePanel = () => {
        setSelectedAgent(null)
    }

    const handleCloseAll = () => {
        setSelectedAgent(null)
        setAgentsVisible(false)
        setTimeout(() => {
            setIsWhyClicked(false)
        }, 600)
    }

    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Dark atmospheric background */}
            <div className="fixed inset-0 bg-[#0A0C0F]">
                {/* Dark radial gradient - deep and atmospheric */}
                <div className="absolute inset-0 opacity-80" style={{
                    background: 'radial-gradient(ellipse at center, #0D0F12 0%, #0A0C0F 50%, #050608 100%)'
                }}></div>

                {/* Vignette effect */}
                <div className="absolute inset-0" style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 100%)'
                }}></div>

                {/* Very subtle grain texture */}
                <div className="absolute inset-0 opacity-[0.02] bg-noise" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                }}></div>

                {/* Slow-moving ambient particles/dust */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white/3 blur-[1px] ambient-particle"
                            style={{
                                width: `${Math.random() * 2 + 1}px`,
                                height: `${Math.random() * 2 + 1}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 20}s`,
                                animationDuration: `${30 + Math.random() * 20}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Blurred and dimmed overlay when agents are shown */}
            <div
                className={`fixed inset-0 z-30 transition-all duration-700 ease-in-out ${isWhyClicked
                    ? 'backdrop-blur-xl bg-black/20 pointer-events-auto'
                    : 'backdrop-blur-0 bg-transparent pointer-events-none'
                    }`}
                onClick={selectedAgent ? handleClosePanel : handleCloseAll}
            />

            {/* Why Bubble - Always visible, stays in background when agents shown */}
            <WhyBubble onClick={handleWhyClick} isDimmed={isWhyClicked} />

            {/* Agent Avatars - Flow from top */}
            {isWhyClicked && (
                <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-20 px-8 gap-8">
                    {mockAgents.map((agent) => (
                        <AgentAvatar
                            key={agent.id}
                            agent={agent}
                            onClick={() => handleAgentClick(agent)}
                            isVisible={agentsVisible && !selectedAgent}
                        />
                    ))}
                </div>
            )}

            {/* Agent Panel */}
            {selectedAgent && (
                <AgentPanel
                    agent={selectedAgent}
                    onClose={handleClosePanel}
                    isVisible={!!selectedAgent}
                />
            )}
        </main>
    )
}

