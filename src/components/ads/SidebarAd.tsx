'use client';

import { SafeAdFrame } from './SafeAdFrame';

export function SidebarAd() {
    return (
        <div className="flex justify-center my-4 w-full">
            <SafeAdFrame
                adKey="96b6352980ba7f10bb56bbfa5ed7a355"
                width={160}
                height={300}
            />
        </div>
    );
}
