



<<<<<<< HEAD
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { 
//   Pencil, 
//   Trash2, 
//   Clock, 
//   StickyNote, 
//   AlertCircle,
//   Plus
// } from 'lucide-react';

// // Beautiful light pastel color presets matching the aesthetic of classic physical memo pads
// const colors = [
//   {
//     bg: 'bg-amber-50',
//     border: 'border-amber-100/60',
//     titleColor: 'text-amber-950',
//     descColor: 'text-amber-900/80',
//     tapeBg: 'bg-amber-200/40',
//     badgeBg: 'bg-amber-400',
//     clockColor: 'text-amber-700/60',
//     buttonText: 'text-amber-800',
//     buttonBg: 'bg-amber-100/60 hover:bg-amber-200/80'
//   },
//   {
//     bg: 'bg-emerald-50',
//     border: 'border-emerald-100/60',
//     titleColor: 'text-emerald-950',
//     descColor: 'text-emerald-900/80',
//     tapeBg: 'bg-emerald-200/40',
//     badgeBg: 'bg-emerald-400',
//     clockColor: 'text-emerald-700/60',
//     buttonText: 'text-emerald-800',
//     buttonBg: 'bg-emerald-100/60 hover:bg-emerald-200/80'
//   },
//   {
//     bg: 'bg-sky-50',
//     border: 'border-sky-100/60',
//     titleColor: 'text-sky-950',
//     descColor: 'text-sky-900/80',
//     tapeBg: 'bg-sky-200/40',
//     badgeBg: 'bg-sky-400',
//     clockColor: 'text-sky-700/60',
//     buttonText: 'text-sky-800',
//     buttonBg: 'bg-sky-100/60 hover:bg-sky-200/80'
//   },
//   {
//     bg: 'bg-rose-50',
//     border: 'border-rose-100/60',
//     titleColor: 'text-rose-950',
//     descColor: 'text-rose-900/80',
//     tapeBg: 'bg-rose-200/40',
//     badgeBg: 'bg-rose-400',
//     clockColor: 'text-rose-700/60',
//     buttonText: 'text-rose-800',
//     buttonBg: 'bg-rose-100/60 hover:bg-rose-200/80'
//   },
//   {
//     bg: 'bg-violet-50',
//     border: 'border-violet-100/60',
//     titleColor: 'text-violet-950',
//     descColor: 'text-violet-900/80',
//     tapeBg: 'bg-violet-200/40',
//     badgeBg: 'bg-violet-400',
//     clockColor: 'text-violet-700/60',
//     buttonText: 'text-violet-800',
//     buttonBg: 'bg-violet-100/60 hover:bg-violet-200/80'
//   },
//   {
//     bg: 'bg-orange-50',
//     border: 'border-orange-100/60',
//     titleColor: 'text-orange-950',
//     descColor: 'text-orange-900/80',
//     tapeBg: 'bg-orange-200/40',
//     badgeBg: 'bg-orange-400',
//     clockColor: 'text-orange-700/60',
//     buttonText: 'text-orange-800',
//     buttonBg: 'bg-orange-100/60 hover:bg-orange-200/80'
//   },
//   {
//     bg: 'bg-teal-50',
//     border: 'border-teal-100/60',
//     titleColor: 'text-teal-950',
//     descColor: 'text-teal-900/80',
//     tapeBg: 'bg-teal-200/40',
//     badgeBg: 'bg-teal-400',
//     clockColor: 'text-teal-700/60',
//     buttonText: 'text-teal-800',
//     buttonBg: 'bg-teal-100/60 hover:bg-teal-200/80'
//   },
//   {
//     bg: 'bg-pink-50',
//     border: 'border-pink-100/60',
//     titleColor: 'text-pink-950',
//     descColor: 'text-pink-900/80',
//     tapeBg: 'bg-pink-200/40',
//     badgeBg: 'bg-pink-400',
//     clockColor: 'text-pink-700/60',
//     buttonText: 'text-pink-800',
//     buttonBg: 'bg-pink-100/60 hover:bg-pink-200/80'
//   }
// ];

// const Home = () => {
//   const [notes, setNotes] = useState([]);
//   const [error, setError] = useState("");
  
//   const fetchNotes = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("No Auth token found please Login");
//         return;
//       }
//       const { data } = await axios.get("/api/notes", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
   
//       setNotes(data);
//     } catch (err) {
//       setError("Failed to fetch notes");
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   },[]); // Matches the exact dependency-less React pattern provided by you

//   const handleDelete = async (id)=>{
//     try{
//       const token =localStorage.getItem("token");
//       if(!token){
//         setError("No Auth Token will be found Please Log in ")
//         return;
//       }
//       await axios.delete(`/api/notes/${id}`,{
//         headers: {Authorization:`Bearer ${token}`},
//       })
//       setNotes(notes.filter((note)=>note._id !==id))
//     }catch(err){
//       setError("failed to delete Notes ")

//     }
//   }

//   return (
//     <div className='container mx-auto px-4 py-8 min-h-screen bg-stone-900 relative selection:bg-amber-200 selection:text-stone-900'>
//       {/* Premium subtle drafting-table grid background lines */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative z-10">
//         {/* Custom styled error notification element */}
//         {error && (
//           <div className="mb-8 flex items-start gap-3 bg-rose-500/10 border border-rose-500/20 text-rose-200 p-4 rounded-xl shadow-lg backdrop-blur-sm animate-fade-in" id="error-message">
//             <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
//             <div className="flex-1">
//               <p className="text-sm font-medium tracking-tight text-red-300">{error}</p>
//             </div>
//           </div>
//         )}
        

//         {/* Dynamic, clean grid container */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {notes.map((note, index) => {
//             // Assign a light, high-contrast, randomized pastel preset based on note index
//             const colorPreset = colors[index % colors.length];

//             return (
//               <div 
//                 className={`${colorPreset.bg} ${colorPreset.border} text-stone-900 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1.5`} 
//                 key={note._id}
//               >
//                 {/* Decorative tape detail to echo sticky notes design */}
//                 <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3.5 ${colorPreset.tapeBg} -rotate-1 rounded-b shadow-[0_2px_4px_rgba(0,0,0,0.02)] group-hover:rotate-1 transition-all duration-300`} />
                
//                 {/* Glowing light badge accent */}
//                 <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full ${colorPreset.badgeBg} group-hover:scale-125 transition-all duration-300`} />

//                 <div className="pt-2">
//                   {/* Note Title */}
//                   <h3 className={`text-lg font-bold text-stone-950 tracking-tight mb-3 group-hover:${colorPreset.titleColor} transition-colors duration-200 line-clamp-1`}>
//                     {note.title}
//                   </h3>
                  
//                   {/* Note Description */}
//                   <p className={`text-stone-800/90 text-sm leading-relaxed mb-6 font-normal line-clamp-5 whitespace-pre-wrap ${colorPreset.descColor}`}>
//                     {note.description}
//                   </p>
//                 </div>

//                 {/* Footer metadata and action buttons */}
//                 <div className="mt-auto">
//                   {/* Timestamp with clock detail */}
//                   <div className={`flex items-center gap-1.5 text-stone-500 font-mono text-[11px] font-semibold border-t ${colorPreset.border} pt-4 mb-4`}>
//                     <Clock className={`w-3.5 h-3.5 ${colorPreset.clockColor} shrink-0`} />
//                     <span>{new Date(note.updatedAt).toLocaleString()}</span>
//                   </div>

//                   {/* Action buttons matching exact user schema */}
//                   <div className="flex items-center gap-2">
//                     <button 
//                       className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold ${colorPreset.buttonText} ${colorPreset.buttonBg} rounded-lg transition-all duration-200 cursor-pointer shadow-sm active:scale-95`}
//                     >
//                       <Pencil className="w-3 h-3" />
//                       Edit
//                     </button>
//                     <button 
//                      onClick={() => handleDelete(note._id)}
//                       className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-100/60 hover:text-rose-700 rounded-lg transition-all duration-200 cursor-pointer ml-auto active:scale-95"
//                     >
//                       <Trash2 className="w-3 h-3" />
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// cdoooooo

=======
>>>>>>> bf02bd5 (Add start script)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Pencil, 
  Trash2, 
  Clock, 
  StickyNote, 
  AlertCircle,
  Plus,
  Pin,
  X,
  ListTodo,
  ListOrdered
} from 'lucide-react';

// Beautiful light pastel color presets matching the aesthetic of classic physical memo pads
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

export default function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  
  // Auth Token read silently from localStorage
  const token = localStorage.getItem("token") || "";

  // Modals status
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Add form fields
  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addIsChecklist, setAddIsChecklist] = useState(false);
  const [addIsNumbered, setAddIsNumbered] = useState(false);

  // Edit form fields
  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editIsChecklist, setEditIsChecklist] = useState(false);
  const [editIsNumbered, setEditIsNumbered] = useState(false);

  // Note configurations (for checklist/numbering) persisted in localStorage
  const [noteConfigs, setNoteConfigs] = useState(() => {
    try {
      const saved = localStorage.getItem("notes_configs_map");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Pinned note IDs persisted in localStorage
  const [pinnedIds, setPinnedIds] = useState(() => {
    try {
      const saved = localStorage.getItem("pinned_notes");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Fetch initial notes
  const fetchNotes = async () => {
    try {
      const activeToken = localStorage.getItem("token");
      if (!activeToken) {
        setError("No Auth token found. Please log in first.");
        return;
      }
      setError("");
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL || ""}/api/notes`, {
        headers: { Authorization: `Bearer ${activeToken}` }
      });
      setNotes(data || []);
    } catch (err) {
      setError("Failed to fetch notes");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [token]);

  // Handle Note deletion
  const handleDelete = async (id) => {
    try {
      const activeToken = localStorage.getItem("token");
      if (!activeToken) {
        setError("No Auth Token found. Please log in first.");
        return;
      }
      await axios.delete(`${import.meta.env.VITE_API_URL || ""}/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${activeToken}` },
      });
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      setError("Failed to delete Note");
    }
  };

  // Handle Note Addition
  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!addTitle.trim() && !addDescription.trim()) {
      setError("Note must have a title or description");
      return;
    }

    try {
      const activeToken = localStorage.getItem("token");
      if (!activeToken) {
        setError("No Auth Token found. Please log in first.");
        return;
      }

      const { data } = await axios.post(`${import.meta.env.VITE_API_URL || ""}/api/notes`, {
        title: addTitle,
        description: addDescription
      }, {
        headers: { Authorization: `Bearer ${activeToken}` }
      });

      // Save note configuration (checklist, numbering)
      setNoteConfigs((prev) => {
        const updated = {
          ...prev,
          [data._id]: {
            isChecklist: addIsChecklist,
            isNumbered: addIsNumbered,
            checkedIndices: []
          }
        };
        localStorage.setItem("notes_configs_map", JSON.stringify(updated));
        return updated;
      });

      // Add new note to the list
      setNotes((prev) => [data, ...prev]);
      
      // Close modal and clear inputs
      setIsAddModalOpen(false);
      setAddTitle("");
      setAddDescription("");
      setAddIsChecklist(false);
      setAddIsNumbered(false);
      setError("");
    } catch (err) {
      setError("Failed to create Note");
    }
  };

  // Handle Note Updating (Edit)
  const handleEditNote = async (e) => {
    e.preventDefault();
    if (!editTitle.trim() && !editDescription.trim()) {
      setError("Note must have a title or description");
      return;
    }

    try {
      const activeToken = localStorage.getItem("token");
      if (!activeToken) {
        setError("No Auth Token found. Please log in first.");
        return;
      }

      const { data } = await axios.put(`${import.meta.env.VITE_API_URL || ""}/api/notes/${editId}`, {
        title: editTitle,
        description: editDescription
      }, {
        headers: { Authorization: `Bearer ${activeToken}` }
      });

      // Update note configuration (checklist, numbering)
      setNoteConfigs((prev) => {
        const updated = {
          ...prev,
          [editId]: {
            ...(prev[editId] || { checkedIndices: [] }),
            isChecklist: editIsChecklist,
            isNumbered: editIsNumbered
          }
        };
        localStorage.setItem("notes_configs_map", JSON.stringify(updated));
        return updated;
      });

      // Update the modified note in the list
      setNotes((prev) => prev.map((note) => note._id === editId ? data : note));
      
      // Close modal and clear inputs
      setIsEditModalOpen(false);
      setEditId("");
      setEditTitle("");
      setEditDescription("");
      setEditIsChecklist(false);
      setEditIsNumbered(false);
      setError("");
    } catch (err) {
      setError("Failed to edit Note");
    }
  };

  // Toggle note Pin state
  const togglePin = (id) => {
    setPinnedIds((prev) => {
      const next = prev.includes(id) 
        ? prev.filter((pId) => pId !== id) 
        : [...prev, id];
      localStorage.setItem("pinned_notes", JSON.stringify(next));
      return next;
    });
  };

  // Split notes into pinned and other notes
  const pinnedNotes = notes.filter((note) => pinnedIds.includes(note._id));
  const regularNotes = notes.filter((note) => !pinnedIds.includes(note._id));

  // Render a single Note Card
  const renderNoteCard = (note, index) => {
    const isPinned = pinnedIds.includes(note._id);
    const colorPreset = colors[index % colors.length];
    
    // Read config for this note
    const config = noteConfigs[note._id] || { isChecklist: false, isNumbered: false, checkedIndices: [] };
    const showListMode = config.isChecklist || config.isNumbered;
    const lines = note.description ? note.description.split('\n') : [];

    return (
      <div 
        className={`${colorPreset.bg} ${colorPreset.border} text-stone-900 p-6 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1`} 
        key={note._id}
        id={`note-card-${note._id}`}
      >
        {/* Decorative tape detail to echo sticky notes design */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3.5 ${colorPreset.tapeBg} -rotate-1 rounded-b shadow-[0_1px_3px_rgba(0,0,0,0.01)] group-hover:rotate-1 transition-all duration-300`} />
        
        {/* Glowing light badge accent */}
        <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full ${colorPreset.badgeBg} group-hover:scale-125 transition-all duration-300`} />

        {/* Action Panel for Format Toggles and Pin */}
        <div className="absolute top-3 right-8 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
          {/* Toggle Checklist */}
          <button
            onClick={() => {
              setNoteConfigs((prev) => {
                const current = prev[note._id] || { isChecklist: false, isNumbered: false, checkedIndices: [] };
                const updated = {
                  ...prev,
                  [note._id]: {
                    ...current,
                    isChecklist: !current.isChecklist,
                  }
                };
                localStorage.setItem("notes_configs_map", JSON.stringify(updated));
                return updated;
              });
            }}
            className="p-1.5 rounded-full hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer"
            title={config.isChecklist ? "Disable Checkboxes" : "Enable Checkboxes"}
            id={`toggle-checklist-button-${note._id}`}
          >
            <ListTodo className={`w-4 h-4 transition-transform duration-200 ${config.isChecklist ? "text-amber-600 font-bold scale-110" : "text-stone-400 hover:text-stone-600 hover:scale-110"}`} />
          </button>

          {/* Toggle Numbered Points */}
          <button
            onClick={() => {
              setNoteConfigs((prev) => {
                const current = prev[note._id] || { isChecklist: false, isNumbered: false, checkedIndices: [] };
                const updated = {
                  ...prev,
                  [note._id]: {
                    ...current,
                    isNumbered: !current.isNumbered,
                  }
                };
                localStorage.setItem("notes_configs_map", JSON.stringify(updated));
                return updated;
              });
            }}
            className="p-1.5 rounded-full hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer"
            title={config.isNumbered ? "Disable Numbering" : "Enable Numbering"}
            id={`toggle-numbered-button-${note._id}`}
          >
            <ListOrdered className={`w-4 h-4 transition-transform duration-200 ${config.isNumbered ? "text-amber-600 font-bold scale-110" : "text-stone-400 hover:text-stone-600 hover:scale-110"}`} />
          </button>

          {/* Pin note button */}
          <button 
            onClick={() => togglePin(note._id)}
            className="p-1.5 rounded-full hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer"
            title={isPinned ? "Unpin Note" : "Pin Note"}
            id={`pin-button-${note._id}`}
          >
            <Pin className={`w-4 h-4 transition-transform duration-200 ${isPinned ? "text-amber-600 fill-amber-500 rotate-45" : "text-stone-400 hover:text-stone-600 hover:scale-110"}`} />
          </button>
        </div>

        <div className="pt-2">
          {/* Note Title */}
          <h3 className={`text-lg font-bold text-stone-950 tracking-tight mb-3 group-hover:${colorPreset.titleColor} transition-colors duration-200 line-clamp-1 pr-6`}>
            {note.title || <span className="italic text-stone-400 font-normal">Untitled Note</span>}
          </h3>
          
          {/* Note Description / List */}
          {showListMode ? (
            <div className="space-y-2 mb-6 max-h-48 overflow-y-auto pr-1">
              {lines.map((line, idx) => {
                // Skip rendering trailing single empty line to keep visual layout tight
                if (line.trim() === "" && idx === lines.length - 1 && lines.length > 1) return null;
                
                const isChecked = config.checkedIndices?.includes(idx);
                
                return (
                  <div key={idx} className="flex items-start gap-2.5 py-0.5">
                    {config.isChecklist && (
                      <input
                        type="checkbox"
                        checked={!!isChecked}
                        onChange={() => {
                          const currentChecked = config.checkedIndices || [];
                          const nextChecked = currentChecked.includes(idx)
                            ? currentChecked.filter((i) => i !== idx)
                            : [...currentChecked, idx];
                          
                          setNoteConfigs((prev) => {
                            const updated = {
                              ...prev,
                              [note._id]: {
                                ...(prev[note._id] || { isChecklist: true, isNumbered: false }),
                                checkedIndices: nextChecked
                              }
                            };
                            localStorage.setItem("notes_configs_map", JSON.stringify(updated));
                            return updated;
                          });
                        }}
                        className="mt-1 h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500 shrink-0"
                      />
                    )}
                    
                    <span className={`text-stone-800/90 text-sm leading-relaxed font-normal ${isChecked ? 'line-through text-stone-400/70 italic' : colorPreset.descColor}`}>
                      {config.isNumbered && (
                        <span className="font-bold mr-1.5 text-stone-500/80 font-mono text-xs">{idx + 1}.</span>
                      )}
                      {line || <span className="text-stone-400/40 italic">(empty item)</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className={`text-stone-800/90 text-sm leading-relaxed mb-6 font-normal line-clamp-5 whitespace-pre-wrap ${colorPreset.descColor}`}>
              {note.description}
            </p>
          )}
        </div>

        {/* Footer metadata and action buttons */}
        <div className="mt-auto">
          {/* Timestamp with clock detail */}
          <div className={`flex items-center gap-1.5 text-stone-500 font-mono text-[11px] font-semibold border-t ${colorPreset.border} pt-4 mb-4`}>
            <Clock className={`w-3.5 h-3.5 ${colorPreset.clockColor} shrink-0`} />
            <span>{new Date(note.updatedAt).toLocaleString()}</span>
          </div>

          {/* Action buttons matching exact user schema */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => {
                setEditId(note._id);
                setEditTitle(note.title);
                setEditDescription(note.description);
                // Pre-fill the edit checkboxes from noteConfig
                const noteConfig = noteConfigs[note._id] || { isChecklist: false, isNumbered: false };
                setEditIsChecklist(noteConfig.isChecklist);
                setEditIsNumbered(noteConfig.isNumbered);
                setIsEditModalOpen(true);
              }}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold ${colorPreset.buttonText} ${colorPreset.buttonBg} rounded-lg transition-all duration-200 cursor-pointer shadow-xs active:scale-95`}
              id={`edit-button-${note._id}`}
            >
              <Pencil className="w-3 h-3" />
              Edit
            </button>
            <button 
              onClick={() => handleDelete(note._id)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-100/60 hover:text-rose-700 rounded-lg transition-all duration-200 cursor-pointer ml-auto active:scale-95"
              id={`delete-button-${note._id}`}
            >
              <Trash2 className="w-3 h-3" />
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='container mx-auto px-4 py-8 min-h-screen bg-stone-50/70 text-stone-900 relative selection:bg-amber-200 selection:text-stone-900' id="main-container">
      {/* Premium subtle drafting-table grid background lines for Light Board */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Elegant top navigation/header section in Warm Light Theme */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200" id="app-header">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600">
              <StickyNote className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-stone-900 tracking-tight">Personal Notes</h1>
              <p className="text-xs text-stone-500 font-medium">Digital sticky notes board</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {/* Add Notes Button */}
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-stone-950 font-bold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md shadow-amber-500/10"
              id="header-add-note-button"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add Note</span>
            </button>
          </div>
        </header>

        {/* Custom styled error notification element */}
        {error && (
          <div className="mb-8 flex items-start gap-3 bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-xl shadow-xs" id="error-message">
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium tracking-tight text-rose-900">{error}</p>
            </div>
          </div>
        )}

        {/* --- Pinned Notes Section --- */}
        {pinnedNotes.length > 0 && (
          <section className="mb-10" id="pinned-notes-section">
            <div className="flex items-center gap-2 mb-6">
              <Pin className="w-4 h-4 text-amber-500 fill-amber-500 rotate-45" />
              <h2 className="text-sm font-bold tracking-widest text-amber-700 uppercase">Pinned Notes</h2>
              <span className="text-xs bg-stone-200/80 text-stone-600 px-2.5 py-0.5 rounded-full font-bold ml-1">{pinnedNotes.length}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pinnedNotes.map((note, index) => renderNoteCard(note, index))}
            </div>
          </section>
        )}

        {/* --- All Notes Section --- */}
        <section id="all-notes-section">
          <div className="flex items-center gap-2 mb-6">
            <StickyNote className="w-4 h-4 text-stone-500" />
            <h2 className="text-sm font-bold tracking-widest text-stone-600 uppercase">All Notes</h2>
            <span className="text-xs bg-stone-200/80 text-stone-600 px-2.5 py-0.5 rounded-full font-bold ml-1">{regularNotes.length}</span>
          </div>

          {notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-stone-200 rounded-2xl bg-white" id="empty-state">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 mb-4 border border-stone-100">
                <StickyNote className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">No notes found</h3>
              <p className="text-stone-500 text-sm max-w-sm mb-6 leading-relaxed">
                Create your first sticky note to capture your thoughts, lists, or quick reminders.
              </p>
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-stone-950 font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-amber-500/10"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Create a Note</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNotes.map((note, index) => renderNoteCard(note, index + pinnedNotes.length))}
            </div>
          )}
        </section>

      </div>

      {/* --- ADD NOTE MODAL --- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in" id="add-note-modal">
          <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-scale-up">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/10 text-amber-600 rounded-lg">
                  <Plus className="w-4 h-4 stroke-[3.5]" />
                </div>
                <h2 className="text-lg font-black text-stone-900">Add New Note</h2>
              </div>
              <button 
                onClick={() => {
                  setIsAddModalOpen(false);
                  setAddIsChecklist(false);
                  setAddIsNumbered(false);
                }}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-lg hover:bg-stone-100 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddNote} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="note-title">Title</label>
                <input 
                  id="note-title"
                  type="text" 
                  value={addTitle}
                  onChange={(e) => setAddTitle(e.target.value)}
                  placeholder="Enter notes title..."
                  className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="note-desc">Description</label>
                <textarea 
                  id="note-desc"
                  rows={4}
                  value={addDescription}
                  onChange={(e) => setAddDescription(e.target.value)}
                  placeholder="Write your note description here... (Use new lines for points/items)"
                  className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                  required
                />
              </div>

              {/* Note Formatting Options */}
              <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-stone-100 my-4">
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={addIsChecklist}
                    onChange={(e) => setAddIsChecklist(e.target.checked)}
                    className="h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
                  />
                  <div>
                    <p className="text-sm font-bold text-stone-800">Add Checkboxes</p>
                    <p className="text-[11px] text-stone-500">Each line gets a checkbox</p>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={addIsNumbered}
                    onChange={(e) => setAddIsNumbered(e.target.checked)}
                    className="h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
                  />
                  <div>
                    <p className="text-sm font-bold text-stone-800">Numbered Points</p>
                    <p className="text-[11px] text-stone-500">Each line starts with 1, 2, 3...</p>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
                <button 
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setAddIsChecklist(false);
                    setAddIsNumbered(false);
                  }}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200/80 text-stone-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-md shadow-amber-500/10"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- EDIT NOTE MODAL --- */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in" id="edit-note-modal">
          <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-scale-up">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/10 text-amber-600 rounded-lg">
                  <Pencil className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-black text-stone-900">Edit Note</h2>
              </div>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-lg hover:bg-stone-100 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleEditNote} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="edit-title">Title</label>
                <input 
                  id="edit-title"
                  type="text" 
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Enter notes title..."
                  className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="edit-desc">Description</label>
                <textarea 
                  id="edit-desc"
                  rows={4}
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Write your note description here... (Use new lines for points/items)"
                  className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                  required
                />
              </div>

              {/* Note Formatting Options */}
              <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-stone-100 my-4">
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={editIsChecklist}
                    onChange={(e) => setEditIsChecklist(e.target.checked)}
                    className="h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
                  />
                  <div>
                    <p className="text-sm font-bold text-stone-800">Add Checkboxes</p>
                    <p className="text-[11px] text-stone-500">Each line gets a checkbox</p>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={editIsNumbered}
                    onChange={(e) => setEditIsNumbered(e.target.checked)}
                    className="h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
                  />
                  <div>
                    <p className="text-sm font-bold text-stone-800">Numbered Points</p>
                    <p className="text-[11px] text-stone-500">Each line starts with 1, 2, 3...</p>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
                <button 
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200/80 text-stone-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-md shadow-amber-500/10"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

