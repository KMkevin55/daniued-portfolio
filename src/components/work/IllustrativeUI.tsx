export function IllustrativeUI({
  type,
}: {
  type: "dashboard" | "email-builder" | "sme-store" | "timeline";
}) {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-neutral-900 rounded-2xl p-4 sm:p-6 text-white font-mono text-xs flex flex-col justify-between overflow-hidden shadow-inner border border-neutral-800">
      {/* Illustrative UI Tag */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        </div>
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest bg-neutral-800 px-2 py-0.5 rounded-md">
          Illustrative UI
        </span>
      </div>

      {/* Mock Content Based on UI Type */}
      <div className="my-auto py-4">
        {type === "dashboard" && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 bg-neutral-800/80 rounded-xl border border-neutral-700/50">
                <span className="text-[9px] text-neutral-400 block">Farmers</span>
                <span className="text-base font-bold text-white">1,420</span>
              </div>
              <div className="p-2.5 bg-neutral-800/80 rounded-xl border border-neutral-700/50">
                <span className="text-[9px] text-neutral-400 block">Harvest Alerts</span>
                <span className="text-base font-bold text-white">98% Sent</span>
              </div>
              <div className="p-2.5 bg-neutral-800/80 rounded-xl border border-neutral-700/50">
                <span className="text-[9px] text-neutral-400 block">Sync Status</span>
                <span className="text-base font-bold text-emerald-400">Live</span>
              </div>
            </div>

            <div className="p-3 bg-neutral-800/40 rounded-xl border border-neutral-700/50 space-y-2">
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span>District Geo-Tracking</span>
                <span>Batticaloa Zone 3</span>
              </div>
              <div className="w-full h-12 bg-neutral-800 rounded-lg flex items-center justify-around px-4">
                <span className="w-2 h-2 rounded-full bg-neutral-400 animate-ping" />
                <span className="text-[10px] text-neutral-400">Paddy Cultivation Node</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        )}

        {type === "email-builder" && (
          <div className="space-y-3">
            <div className="flex justify-between text-[11px] text-neutral-400 border-b border-neutral-800 pb-2">
              <span>Figma Spec &rarr; Gulp Compiler</span>
              <span className="text-emerald-400">Validation Passed</span>
            </div>
            <div className="space-y-1.5 font-mono text-[10px]">
              <div className="p-2 bg-neutral-800/70 rounded-lg flex items-center justify-between">
                <span>&lt;partial&gt; hero-banner.hbs</span>
                <span className="text-neutral-500">600px fluid</span>
              </div>
              <div className="p-2 bg-neutral-800/70 rounded-lg flex items-center justify-between">
                <span>&lt;partial&gt; cta-button.hbs</span>
                <span className="text-neutral-500">MSO fallback</span>
              </div>
              <div className="p-2 bg-neutral-800/70 rounded-lg flex items-center justify-between">
                <span>&lt;qa&gt; Outlook, Apple, Gmail</span>
                <span className="text-emerald-400">Zero render bugs</span>
              </div>
            </div>
          </div>
        )}

        {type === "sme-store" && (
          <div className="space-y-3">
            <div className="p-3 bg-neutral-800/70 rounded-xl border border-neutral-700/60">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-bold text-white">Halneo Storefront</span>
                <span className="text-[9px] bg-neutral-700 px-1.5 py-0.5 rounded text-neutral-300">SME Active</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="p-2 bg-neutral-900 rounded border border-neutral-800 text-[10px]">
                  <span className="text-neutral-500 block">Inquiries</span>
                  <span className="font-bold text-white">48 New</span>
                </div>
                <div className="p-2 bg-neutral-900 rounded border border-neutral-800 text-[10px]">
                  <span className="text-neutral-500 block">Catalog Views</span>
                  <span className="font-bold text-white">1,280</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "timeline" && (
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-white mb-2">
              Community Action Plan &middot; MJF East
            </div>
            <div className="space-y-2 text-[10px]">
              <div className="flex items-center gap-2 p-1.5 bg-neutral-800/60 rounded">
                <span className="text-emerald-400">&check;</span>
                <span className="text-neutral-300">Phase 1: Digital Presence Setup</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-neutral-800/60 rounded">
                <span className="text-emerald-400">&check;</span>
                <span className="text-neutral-300">Phase 2: Product Photography &amp; Catalog</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-neutral-800/30 rounded border border-dashed border-neutral-700">
                <span className="text-neutral-500">&rarr;</span>
                <span className="text-neutral-400">Phase 3: Digital Operations Mentoring</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[9px] text-neutral-500 pt-2 border-t border-neutral-800">
        <span>Framework: Next.js + CSS</span>
        <span>Simulated Architecture</span>
      </div>
    </div>
  );
}
