'use client'

import { useState, useRef, useEffect } from 'react'

interface WhyBubbleProps {
    onClick: () => void
    isDimmed?: boolean
}

export default function WhyBubble({ onClick, isDimmed = false }: WhyBubbleProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [hasDragged, setHasDragged] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const [floatOffset, setFloatOffset] = useState({ x: 0, y: 0 })
    const bubbleRef = useRef<HTMLDivElement>(null)
    const animationFrameRef = useRef<number>()

    useEffect(() => {
        // Center the bubble initially
        setPosition({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        })

        // Gentle floating animation
        let time = 0
        const animate = () => {
            time += 0.01
            setFloatOffset({
                x: Math.sin(time) * 3,
                y: Math.cos(time * 0.7) * 3,
            })
            animationFrameRef.current = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [])

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault()
        setDragStart({ x: e.clientX, y: e.clientY })
        setHasDragged(false)
        setIsDragging(true)
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                const deltaX = Math.abs(e.clientX - dragStart.x)
                const deltaY = Math.abs(e.clientY - dragStart.y)

                // If moved more than 5px, consider it a drag
                if (deltaX > 5 || deltaY > 5) {
                    setHasDragged(true)
                }

                // Direct position update for smooth dragging
                setPosition({
                    x: e.clientX,
                    y: e.clientY,
                })
            }
        }

        const handleMouseUp = (e: MouseEvent) => {
            if (isDragging) {
                // Only trigger onClick if it wasn't a drag
                if (!hasDragged) {
                    onClick()
                }
                setIsDragging(false)
                setHasDragged(false)
            }
        }

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseup', handleMouseUp)

            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('mouseup', handleMouseUp)
            }
        }
    }, [isDragging, dragStart, hasDragged, onClick])

    return (
        <div
            ref={bubbleRef}
            className={`fixed cursor-move select-none z-40 transition-all duration-700 ease-in-out why-bubble-container ${isDragging ? 'scale-105' : 'scale-100'
                } ${isDimmed ? 'opacity-40 blur-sm' : 'opacity-100 blur-0'}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(calc(-50% + ${isDragging ? 0 : floatOffset.x}px), calc(-50% + ${isDragging ? 0 : floatOffset.y}px))`,
                transition: isDragging ? 'none' : 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseDown={handleMouseDown}
        >
            {/* Main bubble with enhanced glassmorphism */}
            <div className="why-bubble-main">
                {/* Inner light glow */}
                <div className="why-bubble-inner-glow"></div>

                <span className="text-white/95 text-lg font-light tracking-wide relative z-10">Why?</span>

                {/* Subtle interaction hint - always visible with breathing animation */}
                <div className={`why-bubble-hint ${isDimmed ? 'why-bubble-hint-dimmed' : ''}`}>
                    <span className="text-white/25 text-xs font-extralight tracking-widest uppercase">Reveal reasoning</span>
                </div>
            </div>
        </div>
    )
}

