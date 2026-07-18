'use client';

import { SafeAdFrame } from './SafeAdFrame';

export function HighPerformanceAd() {
    return (
        <div className="flex justify-center items-center bg-[hsl(var(--background-subtle))] min-h-[600px] min-w-[160px]">
            <SafeAdFrame
                adKey="96b6352980ba7f10bb56bbfa5ed7a355"
                width={160}
                height={300}
            />
        </div>
    );
}
