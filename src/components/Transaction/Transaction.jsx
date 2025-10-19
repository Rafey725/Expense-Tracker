export default function Transaction() {
    return (
        <main className="bg-[#0b0b0b] w-full h-full rounded-lg overflow-y-auto flex flex-col">
            <div className="px-2.5 sm:px-6 py-4 border-b border-white/30">
                {/* Heading */}
                <h1 className="text-xl sm:text-3xl font-bold font-[sans-serif]">Transaction</h1>
            </div>

            <div className="h-full bg-[#a8a8a80a] px-2.5 sm:px-6 py-3 sm:py-6  flex flex-col gap-4">
                This is Transaction component
            </div>
        </main>
    )
}