import React from 'react'
import { AnimatedCard } from '@/components'
const AnimatedPage = () => {
  return (
    <div>
        <AnimatedCard title="DIVERSITY QUESTIONS" href="/cards">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4 sm:text-2xl">Unity in Diversity: A Cultural Celebration Game</h1>
                <p className="text-xl mb-4 sm:text-lg">Countdown to Heritage Day Celebration</p>
                <div className="flex space-x-4 justify-center sm:space-x-2">
                    <span className="text-4xl sm:text-2xl">The event has started!</span>
                </div>
            </div>
        </AnimatedCard>
    </div>
  )
}

export default AnimatedPage