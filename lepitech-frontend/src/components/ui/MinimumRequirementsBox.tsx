type MinimumRequirementsBoxProps = {
  visible: boolean
  minimized: boolean
  onMinimize: () => void
  onExpand: () => void
}

export function MinimumRequirementsBox({
  visible,
  minimized,
  onMinimize,
  onExpand,
}: MinimumRequirementsBoxProps) {
  if (!visible) return null

  return (
    <>
      {!minimized && (
        <div className="fixed right-6 top-24 z-50 w-[360px] rounded-2xl border border-zinc-800 bg-zinc-900/95 p-5 shadow-2xl backdrop-blur">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">
                Analyse
              </p>
              <h3 className="text-lg font-semibold text-white">
                Mindestanforderungen
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Mindestanforderungen für die ausgewählten Softwares
              </p>
            </div>

            <button
              onClick={onMinimize}
              className="ml-3 rounded-md border border-zinc-700 px-2 py-1 text-sm text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            >
              —
            </button>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
              <span className="text-sm text-zinc-400">GPU:</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
              <span className="text-sm text-zinc-400">RAM:</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
              <span className="text-sm text-zinc-400">CPU:</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
              <span className="text-sm text-zinc-400">Speicher:</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
              <span className="text-sm text-zinc-400">Betriebssystem:</span>
            </div>
          </div>
        </div>
      )}

      {minimized && (
        <button
          onClick={onExpand}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-emerald-500/30 bg-emerald-500 px-5 py-3 font-medium text-black shadow-xl transition hover:scale-[1.02]"
        >
          Anforderungen anzeigen
        </button>
      )}
    </>
  )
}