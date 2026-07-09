import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Clock, StickyNote, AlertCircle } from 'lucide-react';

const colors = [
  {
    bg: 'bg-amber-50/80',
    border: 'border-amber-200/60',
    titleColor: 'text-amber-950',
    descColor: 'text-amber-900/80',
    tapeBg: 'bg-amber-200/40',
    badgeBg: 'bg-amber-400',
    clockColor: 'text-amber-700/60',
    buttonText: 'text-amber-800',
    buttonBg: 'bg-amber-100/60 hover:bg-amber-200/80'
  },
  {
    bg: 'bg-emerald-50/80',
    border: 'border-emerald-200/60',
    titleColor: 'text-emerald-950',
    descColor: 'text-emerald-900/80',
    tapeBg: 'bg-emerald-200/40',
    badgeBg: 'bg-emerald-400',
    clockColor: 'text-emerald-700/60',
    buttonText: 'text-emerald-800',
    buttonBg: 'bg-emerald-100/60 hover:bg-emerald-200/80'
  },
  {
    bg: 'bg-sky-50/80',
    border: 'border-sky-200/60',
    titleColor: 'text-sky-950',
    descColor: 'text-sky-900/80',
    tapeBg: 'bg-sky-200/40',
    badgeBg: 'bg-sky-400',
    clockColor: 'text-sky-700/60',
    buttonText: 'text-sky-800',
    buttonBg: 'bg-sky-100/60 hover:bg-sky-200/80'
  },
  {
    bg: 'bg-rose-50/80',
    border: 'border-rose-200/60',
    titleColor: 'text-rose-950',
    descColor: 'text-rose-900/80',
    tapeBg: 'bg-rose-200/40',
    badgeBg: 'bg-rose-400',
    clockColor: 'text-rose-700/60',
    buttonText: 'text-rose-800',
    buttonBg: 'bg-rose-100/60 hover:bg-rose-200/80'
  },
  {
    bg: 'bg-violet-50/80',
    border: 'border-violet-200/60',
    titleColor: 'text-violet-950',
    descColor: 'text-violet-900/80',
    tapeBg: 'bg-violet-200/40',
    badgeBg: 'bg-violet-400',
    clockColor: 'text-violet-700/60',
    buttonText: 'text-violet-800',
    buttonBg: 'bg-violet-100/60 hover:bg-violet-200/80'
  },
  {
    bg: 'bg-orange-50/80',
    border: 'border-orange-200/60',
    titleColor: 'text-orange-950',
    descColor: 'text-orange-900/80',
    tapeBg: 'bg-orange-200/40',
    badgeBg: 'bg-orange-400',
    clockColor: 'text-orange-700/60',
    buttonText: 'text-orange-800',
    buttonBg: 'bg-orange-100/60 hover:bg-orange-200/80'
  },
  {
    bg: 'bg-teal-50/80',
    border: 'border-teal-200/60',
    titleColor: 'text-teal-950',
    descColor: 'text-teal-900/80',
    tapeBg: 'bg-teal-200/40',
    badgeBg: 'bg-teal-400',
    clockColor: 'text-teal-700/60',
    buttonText: 'text-teal-800',
    buttonBg: 'bg-teal-100/60 hover:bg-teal-200/80'
  },
  {
    bg: 'bg-pink-50/80',
    border: 'border-pink-200/60',
    titleColor: 'text-pink-950',
    descColor: 'text-pink-900/80',
    tapeBg: 'bg-pink-200/40',
    badgeBg: 'bg-pink-400',
    clockColor: 'text-pink-700/60',
    buttonText: 'text-pink-800',
    buttonBg: 'bg-pink-100/60 hover:bg-pink-200/80'
  }
];

export default function SharePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSharedNote = async () => {
      try {
        setLoading(true);
        setError("");
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL || ""}/api/notes/share/${id}`);
        setNote(data);
      } catch (err) {
        console.error("Failed to fetch shared note:", err);
        setError(err.response?.data?.error || "Note not found or does not exist.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSharedNote();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen bg-stone-50/70 text-stone-900 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-sm text-stone-500 font-medium">Loading shared note...</p>
        </div>
      </div>
    );
  }

  if (error || !note) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen bg-stone-50/70 text-stone-900 flex flex-col items-center justify-center">
        <div className="w-full max-w-md text-center">
          <div className="mb-4 inline-flex items-center justify-center p-3 bg-rose-50 border border-rose-100 rounded-full text-rose-500">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-stone-900 mb-2">Error Loading Note</h2>
          <p className="text-sm text-stone-600 mb-6">{error || "This note does not exist or has been deleted."}</p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-2.5 rounded-xl transition-all cursor-pointer text-sm"
          >
            Go to My Board
          </button>
        </div>
      </div>
    );
  }

  const priority = note.priority || "medium";
  let colorPreset = colors[0];
  if (priority === 'high') {
    colorPreset = colors[3]; // Rose
  } else if (priority === 'low') {
    colorPreset = colors[2]; // Sky
  } else {
    colorPreset = colors[0]; // Amber
  }

  const priorityInfo = {
    high: {
      label: 'High',
      badgeClass: 'bg-rose-100/60 border-rose-200/60 text-rose-800',
      dotClass: 'bg-rose-500'
    },
    medium: {
      label: 'Medium',
      badgeClass: 'bg-amber-100/60 border-amber-200/60 text-amber-800',
      dotClass: 'bg-amber-500'
    },
    low: {
      label: 'Low',
      badgeClass: 'bg-sky-100/60 border-sky-200/60 text-sky-800',
      dotClass: 'bg-sky-500'
    }
  }[priority] || {
    label: 'Medium',
    badgeClass: 'bg-amber-100/60 border-amber-200/60 text-amber-800',
    dotClass: 'bg-amber-500'
  };

  const showListMode = note.isChecklist || note.isNumbered;
  const lines = note.description ? note.description.split('\n') : [];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-stone-50/70 text-stone-900 relative flex flex-col items-center justify-center selection:bg-amber-200 selection:text-stone-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="w-full max-w-lg relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-600 mb-4">
            <StickyNote className="w-4.5 h-4.5" />
            <span className="text-xs font-bold uppercase tracking-wider">Shared Personal Note</span>
          </div>
          <h1 className="text-2xl font-black text-stone-900 tracking-tight">Personal Notes</h1>
        </div>

        <div className={`${colorPreset.bg} ${colorPreset.border} text-stone-900 p-8 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.06)] border relative overflow-hidden`}>
          {/* Decorative tape detail */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4.5 ${colorPreset.tapeBg} -rotate-1 rounded-b shadow-[0_1px_3px_rgba(0,0,0,0.01)]`} />
          
          <div className="pt-4">
            {/* Priority Badge */}
            <div className="mb-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase border ${priorityInfo.badgeClass}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${priorityInfo.dotClass}`} />
                {priorityInfo.label} Priority
              </span>
            </div>

            {/* Note Title */}
            <h3 className="text-xl font-bold text-stone-950 tracking-tight mb-4">
              {note.title || <span className="italic text-stone-400 font-normal">Untitled Note</span>}
            </h3>
            
            {/* Note Description / List */}
            {showListMode ? (
              <div className="space-y-3 mb-6 max-h-72 overflow-y-auto pr-1">
                {lines.map((line, idx) => {
                  if (line.trim() === "" && idx === lines.length - 1 && lines.length > 1) return null;
                  const isChecked = note.checkedIndices?.includes(idx);
                  
                  return (
                    <div key={idx} className="flex items-start gap-2.5 py-0.5">
                      {note.isChecklist && (
                        <input
                          type="checkbox"
                          checked={!!isChecked}
                          readOnly
                          className="mt-1 h-4 w-4 rounded-sm border-stone-300 text-amber-600 cursor-not-allowed accent-amber-500 shrink-0"
                        />
                      )}
                      
                      <span className={`text-stone-800/90 text-sm leading-relaxed font-normal ${isChecked ? 'line-through text-stone-400/70 italic' : colorPreset.descColor}`}>
                        {note.isNumbered && (
                          <span className="font-bold mr-1.5 text-stone-500/80 font-mono text-xs">{idx + 1}.</span>
                        )}
                        {line || <span className="text-stone-400/40 italic">(empty item)</span>}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className={`text-stone-800/90 text-sm leading-relaxed mb-6 font-normal whitespace-pre-wrap ${colorPreset.descColor}`}>
                {note.description}
              </p>
            )}

            {/* Timestamp */}
            <div className={`flex items-center gap-1.5 text-stone-500 font-mono text-[11px] font-semibold border-t ${colorPreset.border} pt-4`}>
              <Clock className="w-3.5 h-3.5 text-stone-500/60 shrink-0" />
              <span>Last updated: {new Date(note.updatedAt).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 active:scale-95 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-md cursor-pointer text-sm"
          >
            <span>Back to My Board</span>
          </button>
        </div>
      </div>
    </div>
  );
}
