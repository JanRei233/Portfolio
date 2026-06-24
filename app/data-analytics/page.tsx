import Link from 'next/link';

export default function DataAnalyticsHub() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans p-8 md:p-24 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl">
        <div className="inline-block p-4 rounded-full bg-cyan-900/20 text-cyan-400 mb-8 border border-cyan-500/20">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Data Analytics Hub</h1>
        <p className="text-slate-400 mb-12 text-lg">
          This secure terminal is reserved for future statistical models, data visualizations, and deep learning datasets. 
          <br/><br/>
          <span className="font-mono text-cyan-500 text-sm">Status: Awaiting data ingestion...</span>
        </p>
        
        <Link href="/" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700 hover:border-cyan-500">
          Return to Root Directory
        </Link>
      </div>
    </main>
  );
}