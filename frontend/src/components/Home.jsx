// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { 
//   Pencil, 
//   Trash2, 
//   Clock, 
//   StickyNote, 
//   AlertCircle,
//   Plus,
//   Pin,
//   X,
//   ListTodo,
//   ListOrdered
// } from 'lucide-react';

// // Beautiful light pastel color presets matching the aesthetic of classic physical memo pads
// const colors = [
//   {
//     bg: 'bg-amber-50/80',
//     border: 'border-amber-200/60',
//     titleColor: 'text-amber-950',
//     descColor: 'text-amber-900/80',
//     tapeBg: 'bg-amber-200/40',
//     badgeBg: 'bg-amber-400',
//     clockColor: 'text-amber-700/60',
//     buttonText: 'text-amber-800',
//     buttonBg: 'bg-amber-100/60 hover:bg-amber-200/80'
//   },
//   {
//     bg: 'bg-emerald-50/80',
//     border: 'border-emerald-200/60',
//     titleColor: 'text-emerald-950',
//     descColor: 'text-emerald-900/80',
//     tapeBg: 'bg-emerald-200/40',
//     badgeBg: 'bg-emerald-400',
//     clockColor: 'text-emerald-700/60',
//     buttonText: 'text-emerald-800',
//     buttonBg: 'bg-emerald-100/60 hover:bg-emerald-200/80'
//   },
//   {
//     bg: 'bg-sky-50/80',
//     border: 'border-sky-200/60',
//     titleColor: 'text-sky-950',
//     descColor: 'text-sky-900/80',
//     tapeBg: 'bg-sky-200/40',
//     badgeBg: 'bg-sky-400',
//     clockColor: 'text-sky-700/60',
//     buttonText: 'text-sky-800',
//     buttonBg: 'bg-sky-100/60 hover:bg-sky-200/80'
//   },
//   {
//     bg: 'bg-rose-50/80',
//     border: 'border-rose-200/60',
//     titleColor: 'text-rose-950',
//     descColor: 'text-rose-900/80',
//     tapeBg: 'bg-rose-200/40',
//     badgeBg: 'bg-rose-400',
//     clockColor: 'text-rose-700/60',
//     buttonText: 'text-rose-800',
//     buttonBg: 'bg-rose-100/60 hover:bg-rose-200/80'
//   },
//   {
//     bg: 'bg-violet-50/80',
//     border: 'border-violet-200/60',
//     titleColor: 'text-violet-950',
//     descColor: 'text-violet-900/80',
//     tapeBg: 'bg-violet-200/40',
//     badgeBg: 'bg-violet-400',
//     clockColor: 'text-violet-700/60',
//     buttonText: 'text-violet-800',
//     buttonBg: 'bg-violet-100/60 hover:bg-violet-200/80'
//   },
//   {
//     bg: 'bg-orange-50/80',
//     border: 'border-orange-200/60',
//     titleColor: 'text-orange-950',
//     descColor: 'text-orange-900/80',
//     tapeBg: 'bg-orange-200/40',
//     badgeBg: 'bg-orange-400',
//     clockColor: 'text-orange-700/60',
//     buttonText: 'text-orange-800',
//     buttonBg: 'bg-orange-100/60 hover:bg-orange-200/80'
//   },
//   {
//     bg: 'bg-teal-50/80',
//     border: 'border-teal-200/60',
//     titleColor: 'text-teal-950',
//     descColor: 'text-teal-900/80',
//     tapeBg: 'bg-teal-200/40',
//     badgeBg: 'bg-teal-400',
//     clockColor: 'text-teal-700/60',
//     buttonText: 'text-teal-800',
//     buttonBg: 'bg-teal-100/60 hover:bg-teal-200/80'
//   },
//   {
//     bg: 'bg-pink-50/80',
//     border: 'border-pink-200/60',
//     titleColor: 'text-pink-950',
//     descColor: 'text-pink-900/80',
//     tapeBg: 'bg-pink-200/40',
//     badgeBg: 'bg-pink-400',
//     clockColor: 'text-pink-700/60',
//     buttonText: 'text-pink-800',
//     buttonBg: 'bg-pink-100/60 hover:bg-pink-200/80'
//   }
// ];

// export default function App() {
//   const [notes, setNotes] = useState([]);
  
//   const [error, setError] = useState("");
  
//   // Auth Token read silently from localStorage
//   const token = localStorage.getItem("token") || "";

//   // Modals status
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   // Add form fields
//   const [addTitle, setAddTitle] = useState("");
//   const [addDescription, setAddDescription] = useState("");
//   const [addIsChecklist, setAddIsChecklist] = useState(false);
//   const [addIsNumbered, setAddIsNumbered] = useState(false);
//   const [addPriority, setAddPriority] = useState("medium");

//   // Edit form fields
//   const [editId, setEditId] = useState("");
//   const [editTitle, setEditTitle] = useState("");
//   const [editDescription, setEditDescription] = useState("");
//   const [editIsChecklist, setEditIsChecklist] = useState(false);
//   const [editIsNumbered, setEditIsNumbered] = useState(false);
//   const [editPriority, setEditPriority] = useState("medium");

//   // Note configurations (for checklist/numbering) persisted in localStorage
//   const [noteConfigs, setNoteConfigs] = useState(() => {
//     try {
//       const saved = localStorage.getItem("notes_configs_map");
//       return saved ? JSON.parse(saved) : {};
//     } catch {
//       return {};
//     }
//   });

//   // Priorities map persisted in localStorage
//   const [notePriorities, setNotePriorities] = useState(() => {
//     try {
//       const saved = localStorage.getItem("notes_priorities_map");
//       return saved ? JSON.parse(saved) : {};
//     } catch {
//       return {};
//     }
//   });

//   // Pinned note IDs persisted in localStorage
//   const [pinnedIds, setPinnedIds] = useState(() => {
//     try {
//       const saved = localStorage.getItem("pinned_notes");
//       return saved ? JSON.parse(saved) : [];
//     } catch {
//       return [];
//     }
//   });

//   // Priority filter state
//   const [priorityFilter, setPriorityFilter] = useState("all");

//   // Helper to resolve note priority (implicit fallback included)
//   const getNotePriority = (note) => {
//     const savedPriority = notePriorities[note._id];
//     if (savedPriority) return savedPriority;

//     const index = notes.findIndex((n) => n._id === note._id);
//     const colorIndex = index >= 0 ? (index % colors.length) : 0;
//     if ([1, 2, 6].includes(colorIndex)) {
//       return 'low';
//     } else if ([3, 7].includes(colorIndex)) {
//       return 'high';
//     } else {
//       return 'medium';
//     }
//   };

//   // Fetch initial notes
//   const fetchNotes = async () => {
//     try {
//       const activeToken = localStorage.getItem("token");
//       if (!activeToken) {
//         // Keep the dummy note active if no backend token exists
//         return;
//       }
//       setError("");
//       const { data } = await axios.get(`${import.meta.env.VITE_API_URL || ""}/api/notes`, {
//         headers: { Authorization: `Bearer ${activeToken}` }
//       });
//       if (data && data.length > 0) {
//         setNotes(data);
//       }
//     } catch {
//       console.warn("Failed to fetch notes, using dummy / local notes");
//     }
//   };

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     fetchNotes();
//   }, [token]);

//   // Handle Note deletion
//   const handleDelete = async (id) => {
//     try {
//       const activeToken = localStorage.getItem("token");
//       if (activeToken) {
//         await axios.delete(`${import.meta.env.VITE_API_URL || ""}/api/notes/${id}`, {
//           headers: { Authorization: `Bearer ${activeToken}` },
//         });
//       }
//     } catch {
//       console.warn("Failed to delete Note from backend, deleting locally");
//     }
//     setNotes((prev) => prev.filter((note) => note._id !== id));
//   };

//   // Handle Note Addition
//   const handleAddNote = async (e) => {
//     e.preventDefault();
//     if (!addTitle.trim() && !addDescription.trim()) {
//       setError("Note must have a title or description");
//       return;
//     }

//     const newId = "note-" + Date.now();
//     const newNote = {
//       _id: newId,
//       title: addTitle,
//       description: addDescription,
//       updatedAt: new Date().toISOString()
//     };

//     try {
//       const activeToken = localStorage.getItem("token");
//       if (activeToken) {
//         const { data } = await axios.post(`${import.meta.env.VITE_API_URL || ""}/api/notes`, {
//           title: addTitle,
//           description: addDescription
//         }, {
//           headers: { Authorization: `Bearer ${activeToken}` }
//         });
//         newNote._id = data._id;
//         newNote.updatedAt = data.updatedAt;
//       }
//     } catch {
//       console.warn("Failed to create Note on backend, saving locally");
//     }

//     // Save note configuration (checklist, numbering)
//     setNoteConfigs((prev) => {
//       const updated = {
//         ...prev,
//         [newNote._id]: {
//           isChecklist: addIsChecklist,
//           isNumbered: addIsNumbered,
//           checkedIndices: []
//         }
//       };
//       localStorage.setItem("notes_configs_map", JSON.stringify(updated));
//       return updated;
//     });

//     // Save priority
//     setNotePriorities((prev) => {
//       const updated = {
//         ...prev,
//         [newNote._id]: addPriority
//       };
//       localStorage.setItem("notes_priorities_map", JSON.stringify(updated));
//       return updated;
//     });

//     // Add new note to the list
//     setNotes((prev) => [newNote, ...prev]);
    
//     // Close modal and clear inputs
//     setIsAddModalOpen(false);
//     setAddTitle("");
//     setAddDescription("");
//     setAddIsChecklist(false);
//     setAddIsNumbered(false);
//     setAddPriority("medium");
//     setError("");
//   };

//   // Handle Note Updating (Edit)
//   const handleEditNote = async (e) => {
//     e.preventDefault();
//     if (!editTitle.trim() && !editDescription.trim()) {
//       setError("Note must have a title or description");
//       return;
//     }

//     const updatedNote = {
//       _id: editId,
//       title: editTitle,
//       description: editDescription,
//       updatedAt: new Date().toISOString()
//     };

//     try {
//       const activeToken = localStorage.getItem("token");
//       if (activeToken) {
//         const { data } = await axios.put(`${import.meta.env.VITE_API_URL || ""}/api/notes/${editId}`, {
//           title: editTitle,
//           description: editDescription
//         }, {
//           headers: { Authorization: `Bearer ${activeToken}` }
//         });
//         updatedNote.updatedAt = data.updatedAt;
//       }
//     } catch {
//       console.warn("Failed to edit Note on backend, updating locally");
//     }

//     // Update note configuration (checklist, numbering)
//     setNoteConfigs((prev) => {
//       const updated = {
//         ...prev,
//         [editId]: {
//           ...(prev[editId] || { checkedIndices: [] }),
//           isChecklist: editIsChecklist,
//           isNumbered: editIsNumbered
//         }
//       };
//       localStorage.setItem("notes_configs_map", JSON.stringify(updated));
//       return updated;
//     });

//     // Update priority
//     setNotePriorities((prev) => {
//       const updated = {
//         ...prev,
//         [editId]: editPriority
//       };
//       localStorage.setItem("notes_priorities_map", JSON.stringify(updated));
//       return updated;
//     });

//     // Update the modified note in the list
//     setNotes((prev) => prev.map((note) => note._id === editId ? { ...note, ...updatedNote } : note));
    
//     // Close modal and clear inputs
//     setIsEditModalOpen(false);
//     setEditId("");
//     setEditTitle("");
//     setEditDescription("");
//     setEditIsChecklist(false);
//     setEditIsNumbered(false);
//     setEditPriority("medium");
//     setError("");
//   };

//   // Toggle note Pin state
//   const togglePin = (id) => {
//     setPinnedIds((prev) => {
//       const next = prev.includes(id) 
//         ? prev.filter((pId) => pId !== id) 
//         : [...prev, id];
//       localStorage.setItem("pinned_notes", JSON.stringify(next));
//       return next;
//     });
//   };

//   // Split notes into pinned and other notes, applying priority filter
//   const filteredNotes = notes.filter((note) => {
//     if (priorityFilter === 'all') return true;
//     return getNotePriority(note) === priorityFilter;
//   });

//   const pinnedNotes = filteredNotes.filter((note) => pinnedIds.includes(note._id));
//   const regularNotes = filteredNotes.filter((note) => !pinnedIds.includes(note._id));

//   // Render a single Note Card
//   const renderNoteCard = (note, index) => {
//     const isPinned = pinnedIds.includes(note._id);

//     // Get priority and preset configuration
//     const priority = getNotePriority(note);
//     let colorPreset = colors[index % colors.length];

//     if (priority === 'high') {
//       colorPreset = colors[3]; // Rose
//     } else if (priority === 'low') {
//       colorPreset = colors[2]; // Sky
//     } else {
//       colorPreset = colors[0]; // Amber
//     }

//     // Define priority-specific badge classes and dots
//     const priorityInfo = {
//       high: {
//         label: 'High',
//         badgeClass: 'bg-rose-100/60 border-rose-200/60 text-rose-800',
//         dotClass: 'bg-rose-500'
//       },
//       medium: {
//         label: 'Medium',
//         badgeClass: 'bg-amber-100/60 border-amber-200/60 text-amber-800',
//         dotClass: 'bg-amber-500'
//       },
//       low: {
//         label: 'Low',
//         badgeClass: 'bg-sky-100/60 border-sky-200/60 text-sky-800',
//         dotClass: 'bg-sky-500'
//       }
//     }[priority];
    
//     // Read config for this note
//     const config = noteConfigs[note._id] || { isChecklist: false, isNumbered: false, checkedIndices: [] };
//     const showListMode = config.isChecklist || config.isNumbered;
//     const lines = note.description ? note.description.split('\n') : [];

//     return (
//       <div 
//         className={`${colorPreset.bg} ${colorPreset.border} text-stone-900 p-6 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1`} 
//         key={note._id}
//         id={`note-card-${note._id}`}
//       >
//         {/* Decorative tape detail to echo sticky notes design */}
//         <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3.5 ${colorPreset.tapeBg} -rotate-1 rounded-b shadow-[0_1px_3px_rgba(0,0,0,0.01)] group-hover:rotate-1 transition-all duration-300`} />
        
//         {/* Glowing light badge accent */}
//         <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full ${colorPreset.badgeBg} group-hover:scale-125 transition-all duration-300`} />

//         {/* Action Panel for Format Toggles and Pin */}
//         <div className="absolute top-3 right-8 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
//           {/* Toggle Checklist */}
//           <button
//             onClick={() => {
//               setNoteConfigs((prev) => {
//                 const current = prev[note._id] || { isChecklist: false, isNumbered: false, checkedIndices: [] };
//                 const updated = {
//                   ...prev,
//                   [note._id]: {
//                     ...current,
//                     isChecklist: !current.isChecklist,
//                   }
//                 };
//                 localStorage.setItem("notes_configs_map", JSON.stringify(updated));
//                 return updated;
//               });
//             }}
//             className="p-1.5 rounded-full hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer"
//             title={config.isChecklist ? "Disable Checkboxes" : "Enable Checkboxes"}
//             id={`toggle-checklist-button-${note._id}`}
//           >
//             <ListTodo className={`w-4 h-4 transition-transform duration-200 ${config.isChecklist ? "text-amber-600 font-bold scale-110" : "text-stone-400 hover:text-stone-600 hover:scale-110"}`} />
//           </button>

//           {/* Toggle Numbered Points */}
//           <button
//             onClick={() => {
//               setNoteConfigs((prev) => {
//                 const current = prev[note._id] || { isChecklist: false, isNumbered: false, checkedIndices: [] };
//                 const updated = {
//                   ...prev,
//                   [note._id]: {
//                     ...current,
//                     isNumbered: !current.isNumbered,
//                   }
//                 };
//                 localStorage.setItem("notes_configs_map", JSON.stringify(updated));
//                 return updated;
//               });
//             }}
//             className="p-1.5 rounded-full hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer"
//             title={config.isNumbered ? "Disable Numbering" : "Enable Numbering"}
//             id={`toggle-numbered-button-${note._id}`}
//           >
//             <ListOrdered className={`w-4 h-4 transition-transform duration-200 ${config.isNumbered ? "text-amber-600 font-bold scale-110" : "text-stone-400 hover:text-stone-600 hover:scale-110"}`} />
//           </button>

//           {/* Pin note button */}
//           <button 
//             onClick={() => togglePin(note._id)}
//             className="p-1.5 rounded-full hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer"
//             title={isPinned ? "Unpin Note" : "Pin Note"}
//             id={`pin-button-${note._id}`}
//           >
//             <Pin className={`w-4 h-4 transition-transform duration-200 ${isPinned ? "text-amber-600 fill-amber-500 rotate-45" : "text-stone-400 hover:text-stone-600 hover:scale-110"}`} />
//           </button>
//         </div>

//         <div className="pt-2">
//           {/* Priority Badge */}
//           <div className="mb-2">
//             <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase border ${priorityInfo.badgeClass}`}>
//               <span className={`w-1.5 h-1.5 rounded-full ${priorityInfo.dotClass}`} />
//               {priorityInfo.label} Priority
//             </span>
//           </div>

//           {/* Note Title */}
//           <h3 className={`text-lg font-bold text-stone-950 tracking-tight mb-3 group-hover:${colorPreset.titleColor} transition-colors duration-200 line-clamp-1 pr-6`}>
//             {note.title || <span className="italic text-stone-400 font-normal">Untitled Note</span>}
//           </h3>
          
//           {/* Note Description / List */}
//           {showListMode ? (
//             <div className="space-y-2 mb-6 max-h-48 overflow-y-auto pr-1">
//               {lines.map((line, idx) => {
//                 // Skip rendering trailing single empty line to keep visual layout tight
//                 if (line.trim() === "" && idx === lines.length - 1 && lines.length > 1) return null;
                
//                 const isChecked = config.checkedIndices?.includes(idx);
                
//                 return (
//                   <div key={idx} className="flex items-start gap-2.5 py-0.5">
//                     {config.isChecklist && (
//                       <input
//                         type="checkbox"
//                         checked={!!isChecked}
//                         onChange={() => {
//                           const currentChecked = config.checkedIndices || [];
//                           const nextChecked = currentChecked.includes(idx)
//                             ? currentChecked.filter((i) => i !== idx)
//                             : [...currentChecked, idx];
                          
//                           setNoteConfigs((prev) => {
//                             const updated = {
//                               ...prev,
//                               [note._id]: {
//                                 ...(prev[note._id] || { isChecklist: true, isNumbered: false, checkedIndices: [] }),
//                                 checkedIndices: nextChecked
//                               }
//                             };
//                             localStorage.setItem("notes_configs_map", JSON.stringify(updated));
//                             return updated;
//                           });
//                         }}
//                         className="mt-1 h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500 shrink-0"
//                       />
//                     )}
                    
//                     <span className={`text-stone-800/90 text-sm leading-relaxed font-normal ${isChecked ? 'line-through text-stone-400/70 italic' : colorPreset.descColor}`}>
//                       {config.isNumbered && (
//                         <span className="font-bold mr-1.5 text-stone-500/80 font-mono text-xs">{idx + 1}.</span>
//                       )}
//                       {line || <span className="text-stone-400/40 italic">(empty item)</span>}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <p className={`text-stone-800/90 text-sm leading-relaxed mb-6 font-normal line-clamp-5 whitespace-pre-wrap ${colorPreset.descColor}`}>
//               {note.description}
//             </p>
//           )}
//         </div>

//         {/* Footer metadata and action buttons */}
//         <div className="mt-auto">
//           {/* Timestamp with clock detail */}
//           <div className={`flex items-center gap-1.5 text-stone-500 font-mono text-[11px] font-semibold border-t ${colorPreset.border} pt-4 mb-4`}>
//             <Clock className={`w-3.5 h-3.5 ${colorPreset.clockColor} shrink-0`} />
//             <span>{new Date(note.updatedAt).toLocaleString()}</span>
//           </div>

//           {/* Action buttons matching exact user schema */}
//           <div className="flex items-center gap-2">
//             <button 
//               onClick={() => {
//                 setEditId(note._id);
//                 setEditTitle(note.title);
//                 setEditDescription(note.description);
//                 // Pre-fill the edit checkboxes and priority
//                 const noteConfig = noteConfigs[note._id] || { isChecklist: false, isNumbered: false };
//                 setEditIsChecklist(noteConfig.isChecklist);
//                 setEditIsNumbered(noteConfig.isNumbered);
//                 setEditPriority(notePriorities[note._id] || "medium");
//                 setIsEditModalOpen(true);
//               }}
//               className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold ${colorPreset.buttonText} ${colorPreset.buttonBg} rounded-lg transition-all duration-200 cursor-pointer shadow-xs active:scale-95`}
//               id={`edit-button-${note._id}`}
//             >
//               <Pencil className="w-3 h-3" />
//               Edit
//             </button>
//             <button 
//               onClick={() => handleDelete(note._id)}
//               className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-100/60 hover:text-rose-700 rounded-lg transition-all duration-200 cursor-pointer ml-auto active:scale-95"
//               id={`delete-button-${note._id}`}
//             >
//               <Trash2 className="w-3 h-3" />
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className='container mx-auto px-4 py-8 min-h-screen bg-stone-50/70 text-stone-900 relative selection:bg-amber-200 selection:text-stone-900' id="main-container">
//       {/* Premium subtle drafting-table grid background lines for Light Board */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative z-10 max-w-6xl mx-auto">
        
//         {/* Elegant top navigation/header section in Warm Light Theme */}
//         <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200" id="app-header">
//           <div className="flex items-center gap-3">
//             <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600">
//               <StickyNote className="w-6 h-6" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-black text-stone-900 tracking-tight">Personal Notes</h1>
//               <p className="text-xs text-stone-500 font-medium">Digital sticky notes board</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
//             {/* Add Notes Button */}
//             <button 
//               onClick={() => setIsAddModalOpen(true)}
//               className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-stone-950 font-bold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md shadow-amber-500/10"
//               id="header-add-note-button"
//             >
//               <Plus className="w-4 h-4 stroke-[3]" />
//               <span>Add Note</span>
//             </button>
//           </div>
//         </header>

//         {/* Filter Features Based on Priority */}
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-4 bg-white/60 border border-stone-200/80 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.02)] backdrop-blur-xs" id="priority-filter-bar">
//           <div className="flex items-center gap-2">
//             <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Filter by Priority:</span>
//           </div>
//           <div className="flex flex-wrap items-center gap-2">
//             <button
//               onClick={() => setPriorityFilter('all')}
//               className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer ${
//                 priorityFilter === 'all'
//                   ? 'bg-stone-900 border-stone-900 text-white shadow-sm'
//                   : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-600'
//               }`}
//               id="filter-priority-all"
//             >
//               All ({notes.length})
//             </button>
//             <button
//               onClick={() => setPriorityFilter('high')}
//               className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
//                 priorityFilter === 'high'
//                   ? 'bg-rose-500 border-rose-500 text-white shadow-sm'
//                   : 'bg-rose-50/50 hover:bg-rose-50 border-rose-100 text-rose-800'
//               }`}
//               id="filter-priority-high"
//             >
//               <span className={`w-1.5 h-1.5 rounded-full ${priorityFilter === 'high' ? 'bg-white' : 'bg-rose-500'}`} />
//               High ({notes.filter((note) => getNotePriority(note) === 'high').length})
//             </button>
//             <button
//               onClick={() => setPriorityFilter('medium')}
//               className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
//                 priorityFilter === 'medium'
//                   ? 'bg-amber-500 border-amber-500 text-stone-950 shadow-sm'
//                   : 'bg-amber-50/50 hover:bg-amber-50 border-amber-100 text-amber-800'
//               }`}
//               id="filter-priority-medium"
//             >
//               <span className={`w-1.5 h-1.5 rounded-full ${priorityFilter === 'medium' ? 'bg-stone-950' : 'bg-amber-500'}`} />
//               Medium ({notes.filter((note) => getNotePriority(note) === 'medium').length})
//             </button>
//             <button
//               onClick={() => setPriorityFilter('low')}
//               className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
//                 priorityFilter === 'low'
//                   ? 'bg-sky-500 border-sky-500 text-white shadow-sm'
//                   : 'bg-sky-50/50 hover:bg-sky-50 border-sky-100 text-sky-800'
//               }`}
//               id="filter-priority-low"
//             >
//               <span className={`w-1.5 h-1.5 rounded-full ${priorityFilter === 'low' ? 'bg-white' : 'bg-sky-400'}`} />
//               Low ({notes.filter((note) => getNotePriority(note) === 'low').length})
//             </button>
//           </div>
//         </div>

//         {/* Custom styled error notification element */}
//         {error && (
//           <div className="mb-8 flex items-start gap-3 bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-xl shadow-xs" id="error-message">
//             <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
//             <div className="flex-1">
//               <p className="text-sm font-medium tracking-tight text-rose-900">{error}</p>
//             </div>
//           </div>
//         )}

//         {/* --- Pinned Notes Section --- */}
//         {pinnedNotes.length > 0 && (
//           <section className="mb-10" id="pinned-notes-section">
//             <div className="flex items-center gap-2 mb-6">
//               <Pin className="w-4 h-4 text-amber-500 fill-amber-500 rotate-45" />
//               <h2 className="text-sm font-bold tracking-widest text-amber-700 uppercase">Pinned Notes</h2>
//               <span className="text-xs bg-stone-200/80 text-stone-600 px-2.5 py-0.5 rounded-full font-bold ml-1">{pinnedNotes.length}</span>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {pinnedNotes.map((note, index) => renderNoteCard(note, index))}
//             </div>
//           </section>
//         )}

//         {/* --- All Notes Section --- */}
//         <section id="all-notes-section">
//           <div className="flex items-center gap-2 mb-6">
//             <StickyNote className="w-4 h-4 text-stone-500" />
//             <h2 className="text-sm font-bold tracking-widest text-stone-600 uppercase">All Notes</h2>
//             <span className="text-xs bg-stone-200/80 text-stone-600 px-2.5 py-0.5 rounded-full font-bold ml-1">{regularNotes.length}</span>
//           </div>

//           {notes.length === 0 ? (
//             <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-stone-200 rounded-2xl bg-white" id="empty-state">
//               <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 mb-4 border border-stone-100">
//                 <StickyNote className="w-8 h-8" />
//               </div>
//               <h3 className="text-lg font-bold text-stone-800 mb-2">No notes found</h3>
//               <p className="text-stone-500 text-sm max-w-sm mb-6 leading-relaxed">
//                 Create your first sticky note to capture your thoughts, lists, or quick reminders.
//               </p>
//               <button 
//                 onClick={() => setIsAddModalOpen(true)}
//                 className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-stone-950 font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-amber-500/10"
//               >
//                 <Plus className="w-4 h-4 stroke-[3]" />
//                 <span>Create a Note</span>
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {regularNotes.map((note, index) => renderNoteCard(note, index + pinnedNotes.length))}
//             </div>
//           )}
//         </section>

//       </div>

//       {/* --- ADD NOTE MODAL --- */}
//       {isAddModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" id="add-note-modal">
//           <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
//             <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
//               <div className="flex items-center gap-2">
//                 <div className="p-1.5 bg-amber-500/10 text-amber-600 rounded-lg">
//                   <Plus className="w-4 h-4 stroke-[3.5]" />
//                 </div>
//                 <h2 className="text-lg font-black text-stone-900">Add New Note</h2>
//               </div>
//               <button 
//                 onClick={() => {
//                   setIsAddModalOpen(false);
//                   setAddIsChecklist(false);
//                   setAddIsNumbered(false);
//                   setAddPriority("medium");
//                 }}
//                 className="text-stone-400 hover:text-stone-700 p-1 rounded-lg hover:bg-stone-100 cursor-pointer transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <form onSubmit={handleAddNote} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="note-title">Title</label>
//                 <input 
//                   id="note-title"
//                   type="text" 
//                   value={addTitle}
//                   onChange={(e) => setAddTitle(e.target.value)}
//                   placeholder="Enter notes title..."
//                   className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="note-desc">Description</label>
//                 <textarea 
//                   id="note-desc"
//                   rows={4}
//                   value={addDescription}
//                   onChange={(e) => setAddDescription(e.target.value)}
//                   placeholder="Write your note description here... (Use new lines for points/items)"
//                   className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
//                   required
//                 />
//               </div>

//               {/* Priority Selector based on beautiful colors */}
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Priority level</label>
//                 <div className="grid grid-cols-3 gap-2">
//                   <button
//                     type="button"
//                     onClick={() => setAddPriority("low")}
//                     className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
//                       addPriority === "low"
//                         ? "bg-sky-50 border-sky-300 text-sky-800 shadow-xs animate-pulse"
//                         : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
//                     }`}
//                   >
//                     <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
//                     Low
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setAddPriority("medium")}
//                     className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
//                       addPriority === "medium"
//                         ? "bg-amber-50 border-amber-300 text-amber-800 shadow-xs"
//                         : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
//                     }`}
//                   >
//                     <span className="w-2 h-2 rounded-full bg-amber-400" />
//                     Medium
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setAddPriority("high")}
//                     className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
//                       addPriority === "high"
//                         ? "bg-rose-50 border-rose-300 text-rose-800 shadow-xs"
//                         : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
//                     }`}
//                   >
//                     <span className="w-2 h-2 rounded-full bg-rose-400" />
//                     High
//                   </button>
//                 </div>
//               </div>

//               {/* Note Formatting Options */}
//               <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-stone-100 my-4">
//                 <label className="flex items-center gap-2.5 cursor-pointer select-none">
//                   <input 
//                     type="checkbox"
//                     checked={addIsChecklist}
//                     onChange={(e) => setAddIsChecklist(e.target.checked)}
//                     className="h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
//                   />
//                   <div>
//                     <p className="text-sm font-bold text-stone-800">Add Checkboxes</p>
//                     <p className="text-[11px] text-stone-500">Each line gets a checkbox</p>
//                   </div>
//                 </label>

//                 <label className="flex items-center gap-2.5 cursor-pointer select-none">
//                   <input 
//                     type="checkbox"
//                     checked={addIsNumbered}
//                     onChange={(e) => setAddIsNumbered(e.target.checked)}
//                     className="h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
//                   />
//                   <div>
//                     <p className="text-sm font-bold text-stone-800">Numbered Points</p>
//                     <p className="text-[11px] text-stone-500">Each line starts with 1, 2, 3...</p>
//                   </div>
//                 </label>
//               </div>

//               <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
//                 <button 
//                   type="button"
//                   onClick={() => {
//                     setIsAddModalOpen(false);
//                     setAddIsChecklist(false);
//                     setAddIsNumbered(false);
//                     setAddPriority("medium");
//                   }}
//                   className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200/80 text-stone-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit"
//                   className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-md shadow-amber-500/10"
//                 >
//                   Add Note
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* --- EDIT NOTE MODAL --- */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" id="edit-note-modal">
//           <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
//             <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
//               <div className="flex items-center gap-2">
//                 <div className="p-1.5 bg-amber-500/10 text-amber-600 rounded-lg">
//                   <Pencil className="w-4 h-4" />
//                 </div>
//                 <h2 className="text-lg font-black text-stone-900">Edit Note</h2>
//               </div>
//               <button 
//                 onClick={() => setIsEditModalOpen(false)}
//                 className="text-stone-400 hover:text-stone-700 p-1 rounded-lg hover:bg-stone-100 cursor-pointer transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <form onSubmit={handleEditNote} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="edit-title">Title</label>
//                 <input 
//                   id="edit-title"
//                   type="text" 
//                   value={editTitle}
//                   onChange={(e) => setEditTitle(e.target.value)}
//                   placeholder="Enter notes title..."
//                   className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="edit-desc">Description</label>
//                 <textarea 
//                   id="edit-desc"
//                   rows={4}
//                   value={editDescription}
//                   onChange={(e) => setEditDescription(e.target.value)}
//                   placeholder="Write your note description here... (Use new lines for points/items)"
//                   className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
//                   required
//                 />
//               </div>

//               {/* Priority Selector based on beautiful colors */}
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Priority level</label>
//                 <div className="grid grid-cols-3 gap-2">
//                   <button
//                     type="button"
//                     onClick={() => setEditPriority("low")}
//                     className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
//                       editPriority === "low"
//                         ? "bg-sky-50 border-sky-300 text-sky-800 shadow-xs"
//                         : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
//                     }`}
//                   >
//                     <span className="w-2 h-2 rounded-full bg-sky-400" />
//                     Low
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setEditPriority("medium")}
//                     className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
//                       editPriority === "medium"
//                         ? "bg-amber-50 border-amber-300 text-amber-800 shadow-xs"
//                         : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
//                     }`}
//                   >
//                     <span className="w-2 h-2 rounded-full bg-amber-400" />
//                     Medium
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setEditPriority("high")}
//                     className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
//                       editPriority === "high"
//                         ? "bg-rose-50 border-rose-300 text-rose-800 shadow-xs"
//                         : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
//                     }`}
//                   >
//                     <span className="w-2 h-2 rounded-full bg-rose-400" />
//                     High
//                   </button>
//                 </div>
//               </div>

//               {/* Note Formatting Options */}
//               <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-stone-100 my-4">
//                 <label className="flex items-center gap-2.5 cursor-pointer select-none">
//                   <input 
//                     type="checkbox"
//                     checked={editIsChecklist}
//                     onChange={(e) => setEditIsChecklist(e.target.checked)}
//                     className="h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
//                   />
//                   <div>
//                     <p className="text-sm font-bold text-stone-800">Add Checkboxes</p>
//                     <p className="text-[11px] text-stone-500">Each line gets a checkbox</p>
//                   </div>
//                 </label>

//                 <label className="flex items-center gap-2.5 cursor-pointer select-none">
//                   <input 
//                     type="checkbox"
//                     checked={editIsNumbered}
//                     onChange={(e) => setEditIsNumbered(e.target.checked)}
//                     className="h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
//                   />
//                   <div>
//                     <p className="text-sm font-bold text-stone-800">Numbered Points</p>
//                     <p className="text-[11px] text-stone-500">Each line starts with 1, 2, 3...</p>
//                   </div>
//                 </label>
//               </div>

//               <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
//                 <button 
//                   type="button"
//                   onClick={() => setIsEditModalOpen(false)}
//                   className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200/80 text-stone-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit"
//                   className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-md shadow-amber-500/10"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }



import { useEffect, useState } from "react";
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
  ListOrdered,
  Share2,
  Copy,
  Check,
  LogOut,
  User,
  Lock,
  Sparkles,
  Globe,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

// Beautiful premium light pastel color presets matching the aesthetic of classic physical memo pads
const colors = [
  {
    bg: "bg-amber-50/90",
    border: "border-amber-200/80",
    titleColor: "text-amber-950",
    descColor: "text-amber-900/85",
    tapeBg: "bg-amber-200/40",
    badgeBg: "bg-amber-400",
    clockColor: "text-amber-700/60",
    buttonText: "text-amber-800",
    buttonBg: "bg-amber-100/60 hover:bg-amber-200/80",
  },
  {
    bg: "bg-emerald-50/90",
    border: "border-emerald-200/80",
    titleColor: "text-emerald-950",
    descColor: "text-emerald-900/85",
    tapeBg: "bg-emerald-200/40",
    badgeBg: "bg-emerald-400",
    clockColor: "text-emerald-700/60",
    buttonText: "text-emerald-800",
    buttonBg: "bg-emerald-100/60 hover:bg-emerald-200/80",
  },
  {
    bg: "bg-sky-50/90",
    border: "border-sky-200/80",
    titleColor: "text-sky-950",
    descColor: "text-sky-900/85",
    tapeBg: "bg-sky-200/40",
    badgeBg: "bg-sky-400",
    clockColor: "text-sky-700/60",
    buttonText: "text-sky-800",
    buttonBg: "bg-sky-100/60 hover:bg-sky-200/80",
  },
  {
    bg: "bg-rose-50/90",
    border: "border-rose-200/80",
    titleColor: "text-rose-950",
    descColor: "text-rose-900/85",
    tapeBg: "bg-rose-200/40",
    badgeBg: "bg-rose-400",
    clockColor: "text-rose-700/60",
    buttonText: "text-rose-800",
    buttonBg: "bg-rose-100/60 hover:bg-rose-200/80",
  },
  {
    bg: "bg-violet-50/90",
    border: "border-violet-200/80",
    titleColor: "text-violet-950",
    descColor: "text-violet-900/85",
    tapeBg: "bg-violet-200/40",
    badgeBg: "bg-violet-400",
    clockColor: "text-violet-700/60",
    buttonText: "text-violet-800",
    buttonBg: "bg-violet-100/60 hover:bg-violet-200/80",
  },
  {
    bg: "bg-orange-50/90",
    border: "border-orange-200/80",
    titleColor: "text-orange-950",
    descColor: "text-orange-900/85",
    tapeBg: "bg-orange-200/40",
    badgeBg: "bg-orange-400",
    clockColor: "text-orange-700/60",
    buttonText: "text-orange-800",
    buttonBg: "bg-orange-100/60 hover:bg-orange-200/80",
  },
  {
    bg: "bg-teal-50/90",
    border: "border-teal-200/80",
    titleColor: "text-teal-950",
    descColor: "text-teal-900/85",
    tapeBg: "bg-teal-200/40",
    badgeBg: "bg-teal-400",
    clockColor: "text-teal-700/60",
    buttonText: "text-teal-800",
    buttonBg: "bg-teal-100/60 hover:bg-teal-200/80",
  },
  {
    bg: "bg-pink-50/90",
    border: "border-pink-200/80",
    titleColor: "text-pink-950",
    descColor: "text-pink-900/85",
    tapeBg: "bg-pink-200/40",
    badgeBg: "bg-pink-400",
    clockColor: "text-pink-700/60",
    buttonText: "text-pink-800",
    buttonBg: "bg-pink-100/60 hover:bg-pink-200/80",
  },
];

export default function App() {
  // Navigation Routing States
  const [pathname, setPathname] = useState(window.location.pathname);
  const isSharedRoute = pathname.startsWith("/shared/");
  const sharedNoteId = isSharedRoute ? pathname.split("/shared/")[1] : null;

  // Active shared note data
  const [sharedNote, setSharedNote] = useState(null);
  const [loadingShared, setLoadingShared] = useState(isSharedRoute);
  const [sharedError, setSharedError] = useState("");

  // App Main States
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Auth States
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("notes_app_token")
  );
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const [authUsername, setAuthUsername] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Modals status
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Share Modal status
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharingNote, setSharingNote] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Add form fields
  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addIsChecklist, setAddIsChecklist] = useState(false);
  const [addIsNumbered, setAddIsNumbered] = useState(false);
  const [addPriority, setAddPriority] = useState("medium");

  // Edit form fields
  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editIsChecklist, setEditIsChecklist] = useState(false);
  const [editIsNumbered, setEditIsNumbered] = useState(false);
  const [editPriority, setEditPriority] = useState("medium");

  // Priority filter state
  const [priorityFilter, setPriorityFilter] = useState("all");

  // Handle URL change detection (e.g. back buttons or shared link redirect)
  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Fetch read-only shared note
  useEffect(() => {
    if (isSharedRoute && sharedNoteId) {
      setLoadingShared(true);
      setSharedError("");
      fetch(`/api/notes/shared/${sharedNoteId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Shared note not found or link has expired.");
          }
          return res.json();
        })
        .then((data) => {
          setSharedNote(data);
          setLoadingShared(false);
        })
        .catch((err) => {
          setSharedError(err.message || "Failed to load shared note.");
          setLoadingShared(false);
        });
    }
  }, [pathname, isSharedRoute, sharedNoteId]);

  // Validate session on start
  useEffect(() => {
    if (authToken) {
      fetch("/api/auth/me", {
        headers: { Authorization: `Bearer ${authToken}` },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Invalid session");
        })
        .then((userData) => {
          setUser(userData);
          fetchCloudNotes(authToken);
        })
        .catch(() => {
          // Clear invalid token, use local notes
          setAuthToken(null);
          localStorage.removeItem("notes_app_token");
          loadLocalNotes();
        });
    } else {
      loadLocalNotes();
    }
  }, [authToken]);

  // Fallback to offline local notes when logged out
  const loadLocalNotes = () => {
    try {
      const saved = localStorage.getItem("local_notes");
      if (saved) {
        const parsed = JSON.parse(saved);
        const filtered = Array.isArray(parsed) ? parsed.filter((n) => !n._id.startsWith("demo-")) : [];
        setNotes(filtered);
        localStorage.setItem("local_notes", JSON.stringify(filtered));
      } else {
        const defaultNotes = [];
        setNotes(defaultNotes);
        localStorage.setItem("local_notes", JSON.stringify(defaultNotes));
      }
    } catch {
      setNotes([]);
    }
  };

  // Fetch notes from Express backend
  const fetchCloudNotes = (token) => {
    fetch("/api/notes", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cloud notes.");
        return res.json();
      })
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => {
        setError(err.message || "Could not synchronize notes with cloud.");
      });
  };

  // Sync state & local storage
  const saveNotesList = (updatedNotes) => {
    setNotes(updatedNotes);
    if (!authToken) {
      localStorage.setItem("local_notes", JSON.stringify(updatedNotes));
    }
  };

  // Trigger Auth operations
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError("");
    setAuthLoading(true);

    const url = authMode === "signup" ? "/api/auth/signup" : "/api/auth/login";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: authUsername, password: authPassword }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      // Success
      localStorage.setItem("notes_app_token", data.token);
      setAuthToken(data.token);
      setUser(data.user);
      setIsAuthModalOpen(false);
      setAuthUsername("");
      setAuthPassword("");

      // Optional migration of local notes to cloud upon signup!
      if (authMode === "signup" && notes.length > 0) {
        // Upload each local note to the new account
        const localNotesToMigrate = notes.filter((n) => !n._id.startsWith("demo-"));
        for (const note of localNotesToMigrate) {
          await fetch("/api/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.token}`,
            },
            body: JSON.stringify({
              title: note.title,
              description: note.description,
              isChecklist: note.isChecklist,
              isNumbered: note.isNumbered,
              checkedIndices: note.checkedIndices,
              priority: note.priority,
              isPinned: note.isPinned,
            }),
          });
        }
      }

      fetchCloudNotes(data.token);
      setSuccessMsg(
        authMode === "signup"
          ? "Account created successfully! Your notes are now securely saved in the cloud."
          : "Logged in successfully!"
      );
      setTimeout(() => setSuccessMsg(""), 5000);
    } catch (err) {
      setAuthError(err.message || "An error occurred.");
    } finally {
      setAuthLoading(false);
    }
  };

  // Log Out operation
  const handleLogout = async () => {
    if (authToken) {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${authToken}` },
      }).catch(() => {});
    }
    localStorage.removeItem("notes_app_token");
    setAuthToken(null);
    setUser(null);
    loadLocalNotes();
  };

  // Handle Note Deletion
  const handleDelete = async (id) => {
    if (authToken) {
      try {
        const res = await fetch(`/api/notes/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${authToken}` },
        });
        if (!res.ok) throw new Error("Could not delete note on backend");
      } catch (err) {
        console.warn("Delete backend failed, deleting locally:", err);
      }
    }
    const updated = notes.filter((n) => n._id !== id);
    saveNotesList(updated);
  };

  // Handle Note Addition
  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!addTitle.trim() && !addDescription.trim()) {
      setError("Please add at least a title or some description contents.");
      return;
    }

    const localId = "note-" + Date.now();
    const newNote = {
      _id: localId,
      title: addTitle.trim(),
      description: addDescription.trim(),
      isChecklist: addIsChecklist,
      isNumbered: addIsNumbered,
      checkedIndices: [],
      priority: addPriority,
      isPinned: false,
      updatedAt: new Date().toISOString(),
    };

    if (authToken) {
      try {
        const res = await fetch("/api/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(newNote),
        });
        if (res.ok) {
          const savedNote = await res.json();
          saveNotesList([savedNote, ...notes]);
        } else {
          throw new Error();
        }
      } catch {
        console.warn("Backend creation failed, saving note locally");
        saveNotesList([newNote, ...notes]);
      }
    } else {
      saveNotesList([newNote, ...notes]);
    }

    setIsAddModalOpen(false);
    setAddTitle("");
    setAddDescription("");
    setAddIsChecklist(false);
    setAddIsNumbered(false);
    setAddPriority("medium");
    setError("");
  };

  // Handle Note Editing (Save)
  const handleEditNote = async (e) => {
    e.preventDefault();
    if (!editTitle.trim() && !editDescription.trim()) {
      setError("Please add at least a title or some description contents.");
      return;
    }

    const targetNote = notes.find((n) => n._id === editId);
    const updatedNote = {
      ...targetNote,
      _id: editId,
      title: editTitle.trim(),
      description: editDescription.trim(),
      isChecklist: editIsChecklist,
      isNumbered: editIsNumbered,
      priority: editPriority,
      updatedAt: new Date().toISOString(),
    };

    if (authToken) {
      try {
        const res = await fetch(`/api/notes/${editId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(updatedNote),
        });
        if (res.ok) {
          const savedNote = await res.json();
          saveNotesList(notes.map((n) => (n._id === editId ? savedNote : n)));
        } else {
          throw new Error();
        }
      } catch {
        console.warn("Backend update failed, saving locally");
        saveNotesList(notes.map((n) => (n._id === editId ? updatedNote : n)));
      }
    } else {
      saveNotesList(notes.map((n) => (n._id === editId ? updatedNote : n)));
    }

    setIsEditModalOpen(false);
    setEditId("");
    setEditTitle("");
    setEditDescription("");
    setEditIsChecklist(false);
    setEditIsNumbered(false);
    setEditPriority("medium");
    setError("");
  };

  // Toggle Pinned status
  const togglePin = async (id) => {
    const targetNote = notes.find((n) => n._id === id);
    if (!targetNote) return;

    const nextPinState = !targetNote.isPinned;
    const updatedNotes = notes.map((n) =>
      n._id === id ? { ...n, isPinned: nextPinState } : n
    );

    saveNotesList(updatedNotes);

    if (authToken) {
      try {
        await fetch(`/api/notes/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ isPinned: nextPinState }),
        });
      } catch {
        console.warn("Failed to synchronize pin state to server");
      }
    }
  };

  // Toggle Checklist point on the main dashboard
  const handleToggleCheckline = async (noteId, lineIndex) => {
    const targetNote = notes.find((n) => n._id === noteId);
    if (!targetNote) return;

    const currentChecked = targetNote.checkedIndices || [];
    const nextChecked = currentChecked.includes(lineIndex)
      ? currentChecked.filter((i) => i !== lineIndex)
      : [...currentChecked, lineIndex];

    const updatedNotes = notes.map((n) =>
      n._id === noteId ? { ...n, checkedIndices: nextChecked } : n
    );

    saveNotesList(updatedNotes);

    if (authToken) {
      try {
        await fetch(`/api/notes/${noteId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ checkedIndices: nextChecked }),
        });
      } catch {
        console.warn("Failed to update checklist checkstate to server");
      }
    }
  };

  // Filter and prioritize lists
  const filteredNotes = notes.filter((n) => {
    const priority = n.priority || "medium";
    if (priorityFilter === "all") return true;
    return priority === priorityFilter;
  });

  const pinnedNotes = filteredNotes.filter((n) => n.isPinned);
  const regularNotes = filteredNotes.filter((n) => !n.isPinned);

  // Render format colors
  const resolvePreset = (priority, index) => {
    const p = priority || "medium";
    if (p === "high") return colors[3]; // Rose Red
    if (p === "low") return colors[2]; // Sky Blue
    return colors[index % colors.length]; // Diverse fallback
  };

  const getPriorityBadgeClass = (priority) => {
    const p = priority || "medium";
    if (p === "high") {
      return {
        label: "High",
        badge: "bg-rose-100/70 border-rose-200/80 text-rose-800",
        dot: "bg-rose-500",
      };
    }
    if (p === "low") {
      return {
        label: "Low",
        badge: "bg-sky-100/70 border-sky-200/80 text-sky-800",
        dot: "bg-sky-500",
      };
    }
    return {
      label: "Medium",
      badge: "bg-amber-100/70 border-amber-200/80 text-amber-800",
      dot: "bg-amber-500",
    };
  };

  // Trigger Share modal setup
  const openShareDialog = async (note) => {
    if (!authToken) {
      // Allow sharing offline note by publishing anonymously to the backend
      try {
        const res = await fetch("/api/notes/shared", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: note.title,
            description: note.description,
            isChecklist: note.isChecklist,
            isNumbered: note.isNumbered,
            checkedIndices: note.checkedIndices,
            priority: note.priority,
          }),
        });
        if (res.ok) {
          const anonymousSharedNote = await res.json();
          setSharingNote(anonymousSharedNote);
          setIsShareModalOpen(true);
          setCopiedLink(false);
          setSuccessMsg("Anonymous share link created successfully!");
          setTimeout(() => setSuccessMsg(""), 4000);
        } else {
          throw new Error("Could not share note anonymously.");
        }
      } catch (err) {
        setError(err.message || "Failed to create public share link.");
      }
      return;
    }
    setSharingNote(note);
    setIsShareModalOpen(true);
    setCopiedLink(false);
  };

  // Copy share link helper
  const handleCopyShareLink = () => {
    if (!sharingNote) return;
    const shareUrl = `${window.location.origin}/shared/${sharingNote._id}`;
    
    const copyUsingFallback = (text) => {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        return successful;
      } catch (err) {
        console.error("Fallback copy failed", err);
        return false;
      }
    };

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 3500);
        })
        .catch(() => {
          const ok = copyUsingFallback(shareUrl);
          if (ok) {
            setCopiedLink(true);
            setTimeout(() => setCopiedLink(false), 3500);
          }
        });
    } else {
      const ok = copyUsingFallback(shareUrl);
      if (ok) {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 3500);
      }
    }
  };

  // Redirection back to dashboard from Shared View
  const navigateToHome = () => {
    window.history.pushState({}, "", "/");
    setPathname("/");
  };

  // --------------------------------------------------
  // RENDER: SHARED READ-ONLY VIEW
  // --------------------------------------------------
  if (isSharedRoute) {
    const lines = sharedNote?.description ? sharedNote.description.split("\n") : [];
    const colorPreset = sharedNote ? resolvePreset(sharedNote.priority, 0) : colors[0];
    const badgeStyle = getPriorityBadgeClass(sharedNote?.priority);

    return (
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans relative selection:bg-amber-200 selection:text-stone-900">
        {/* Drafting-table styled background grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Dynamic header notification prompting signup */}
        <div className="sticky top-0 z-40 bg-stone-900 text-stone-100 shadow-md">
          <div className="max-w-5xl mx-auto px-4 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
              <p className="text-sm font-medium tracking-tight">
                You are viewing a shared <span className="text-amber-300 font-bold">read-only</span> note. Want to build your own memo board?
              </p>
            </div>
            <button
              onClick={() => {
                navigateToHome();
                setAuthMode("signup");
                setIsAuthModalOpen(true);
              }}
              className="px-4.5 py-1.5 bg-amber-400 hover:bg-amber-500 active:scale-95 text-stone-950 text-xs font-black rounded-lg transition-all duration-200 cursor-pointer shadow-sm shadow-amber-400/20"
            >
              Sign Up for Free Notes
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center relative z-10">
          <button
            onClick={navigateToHome}
            className="mb-8 flex items-center gap-1.5 text-stone-500 hover:text-stone-800 font-semibold text-xs border border-stone-200 bg-white hover:bg-stone-50 px-4 py-2 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            ← Back to Personal Notes
          </button>

          {loadingShared ? (
            <div className="flex flex-col items-center py-20 text-stone-400 gap-3">
              <div className="w-10 h-10 border-3 border-amber-400 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm font-medium font-mono animate-pulse">Retrieving shared note content...</p>
            </div>
          ) : sharedError || !sharedNote ? (
            <div className="max-w-md w-full bg-white border border-stone-200 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mx-auto mb-4 border border-rose-100">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-black text-stone-900 mb-2">Unavailable Shared Note</h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                {sharedError || "The note you are looking for does not exist or may have been deleted by the owner."}
              </p>
              <button
                onClick={navigateToHome}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Go to Notes App
              </button>
            </div>
          ) : (
            <div className="max-w-lg w-full">
              {/* Note card container */}
              <div className={`relative ${colorPreset.bg} ${colorPreset.border} border rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300`}>
                {/* Visual authentic physical memo tape */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4.5 ${colorPreset.tapeBg} -rotate-1 rounded-b shadow-xs`} />

                <div className="pt-2">
                  {/* Read-Only Status & Priority Indicator */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border ${badgeStyle.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${badgeStyle.dot}`} />
                      {badgeStyle.label} Priority
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold bg-stone-100/70 text-stone-600 px-3 py-1 rounded-full tracking-widest uppercase">
                      🔒 Read-Only
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl font-black text-stone-950 tracking-tight leading-snug mb-5">
                    {sharedNote.title || <span className="italic text-stone-400 font-normal">Untitled Shared Note</span>}
                  </h1>

                  {/* Body Content / List formatting */}
                  {sharedNote.isChecklist || sharedNote.isNumbered ? (
                    <div className="space-y-3 mb-6 pr-1">
                      {lines.map((line, idx) => {
                        if (line.trim() === "" && idx === lines.length - 1 && lines.length > 1) return null;
                        const isChecked = sharedNote.checkedIndices?.includes(idx);
                        return (
                          <div key={idx} className="flex items-start gap-3 py-0.5">
                            {sharedNote.isChecklist && (
                              <input
                                type="checkbox"
                                checked={!!isChecked}
                                readOnly
                                disabled
                                className="mt-1 h-4.5 w-4.5 rounded border-stone-300 text-stone-500 cursor-not-allowed accent-stone-500 shrink-0"
                              />
                            )}

                            <span className={`text-stone-800 text-base leading-relaxed ${isChecked ? "line-through text-stone-400/70 italic" : colorPreset.descColor}`}>
                              {sharedNote.isNumbered && (
                                <span className="font-extrabold mr-2 text-stone-500/70 font-mono text-sm">{idx + 1}.</span>
                              )}
                              {line || <span className="text-stone-300 italic">(empty item)</span>}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className={`text-stone-800 text-base leading-relaxed mb-8 whitespace-pre-wrap ${colorPreset.descColor}`}>
                      {sharedNote.description}
                    </p>
                  )}

                  {/* Footer Clock Timestamp */}
                  <div className={`flex items-center gap-2 text-stone-500 font-mono text-xs font-semibold border-t ${colorPreset.border} pt-5 mt-4`}>
                    <Clock className={`w-4 h-4 ${colorPreset.clockColor} shrink-0`} />
                    <span>Last updated: {new Date(sharedNote.updatedAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Pitch container underneath the read-only shared note */}
              <div className="mt-8 bg-white border border-stone-200 rounded-2xl p-6 shadow-sm text-center">
                <h3 className="text-sm font-bold text-stone-800 mb-1">Created via Personal Notes</h3>
                <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                  Join millions of mindful thinkers capturing lists, tasks, drawings, and logs cleanly in their web browser.
                </p>
                <button
                  onClick={() => {
                    navigateToHome();
                    setAuthMode("signup");
                    setIsAuthModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs tracking-tight transition-all cursor-pointer shadow-xs"
                >
                  Create Your Own Notes Board
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // RENDER: MAIN APPLICATION BOARD
  // --------------------------------------------------
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans relative selection:bg-amber-200 selection:text-stone-900" id="main-container">
      {/* Drafting-table layout grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Sync / Success temporary banners */}
      {successMsg && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl shadow-lg animate-bounce" id="success-message">
          <Sparkles className="w-5 h-5 text-emerald-500 shrink-0" />
          <p className="text-sm font-bold tracking-tight">{successMsg}</p>
        </div>
      )}

      {/* Offline Alert Banner if logged out */}
      {!user && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 text-stone-900 relative z-30 shadow-xs">
          <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Globe className="w-4.5 h-4.5 text-amber-600 shrink-0" />
              <p className="text-xs font-bold text-stone-800">
                Running in Local Mode (Offline). Register or login to sync your notes to the cloud and share them with custom links!
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setIsAuthModalOpen(true);
                  setAuthError("");
                }}
                className="text-xs font-bold text-stone-600 hover:text-stone-900 px-2.5 py-1.5 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setAuthMode("signup");
                  setIsAuthModalOpen(true);
                  setAuthError("");
                }}
                className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-stone-950 text-xs font-black px-3.5 py-1.5 rounded-lg transition-all cursor-pointer shadow-xs"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header navigation section */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200" id="app-header">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-600">
              <StickyNote className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-stone-900 tracking-tight font-display">Personal Notes</h1>
              <p className="text-xs text-stone-500 font-medium">Digital sticky notes board</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {/* User status & Auth trigger buttons */}
            {user ? (
              <div className="flex items-center gap-3 bg-white border border-stone-200 p-1.5 pl-3.5 rounded-xl shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-stone-700">@{user.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all cursor-pointer"
                  title="Log Out Account"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : null}

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

        {/* Filter Priority Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-4 bg-white border border-stone-200/80 rounded-2xl shadow-xs" id="priority-filter-bar">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Filter by Priority:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setPriorityFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer ${
                priorityFilter === "all"
                  ? "bg-stone-900 border-stone-900 text-white shadow-sm"
                  : "bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-600"
              }`}
              id="filter-priority-all"
            >
              All ({notes.length})
            </button>
            <button
              onClick={() => setPriorityFilter("high")}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                priorityFilter === "high"
                  ? "bg-rose-500 border-rose-500 text-white shadow-sm"
                  : "bg-rose-50/50 hover:bg-rose-50 border-rose-100 text-rose-800"
              }`}
              id="filter-priority-high"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${priorityFilter === "high" ? "bg-white" : "bg-rose-500"}`} />
              High ({notes.filter((n) => n.priority === "high").length})
            </button>
            <button
              onClick={() => setPriorityFilter("medium")}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                priorityFilter === "medium"
                  ? "bg-amber-500 border-amber-500 text-stone-950 shadow-sm"
                  : "bg-amber-50/50 hover:bg-amber-50 border-amber-100 text-amber-800"
              }`}
              id="filter-priority-medium"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${priorityFilter === "medium" ? "bg-stone-950" : "bg-amber-500"}`} />
              Medium ({notes.filter((n) => n.priority === "medium").length})
            </button>
            <button
              onClick={() => setPriorityFilter("low")}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                priorityFilter === "low"
                  ? "bg-sky-500 border-sky-500 text-white shadow-sm"
                  : "bg-sky-50/50 hover:bg-sky-50 border-sky-100 text-sky-800"
              }`}
              id="filter-priority-low"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${priorityFilter === "low" ? "bg-white" : "bg-sky-400"}`} />
              Low ({notes.filter((n) => n.priority === "low").length})
            </button>
          </div>
        </div>

        {/* Global Error message */}
        {error && (
          <div className="mb-8 flex items-start gap-3 bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-xl shadow-xs animate-pulse" id="error-message">
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium tracking-tight text-rose-900">{error}</p>
            </div>
            <button onClick={() => setError("")} className="text-rose-400 hover:text-rose-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* PINNED NOTES SECTION */}
        {pinnedNotes.length > 0 && (
          <section className="mb-10" id="pinned-notes-section">
            <div className="flex items-center gap-2 mb-6">
              <Pin className="w-4 h-4 text-amber-500 fill-amber-500 rotate-45" />
              <h2 className="text-sm font-bold tracking-widest text-amber-700 uppercase font-display">Pinned Notes</h2>
              <span className="text-xs bg-stone-200/80 text-stone-600 px-2.5 py-0.5 rounded-full font-bold ml-1">
                {pinnedNotes.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pinnedNotes.map((note, index) => renderNoteCard(note, index))}
            </div>
          </section>
        )}

        {/* ALL NOTES SECTION */}
        <section id="all-notes-section">
          <div className="flex items-center gap-2 mb-6">
            <StickyNote className="w-4 h-4 text-stone-500" />
            <h2 className="text-sm font-bold tracking-widest text-stone-600 uppercase font-display">All Notes</h2>
            <span className="text-xs bg-stone-200/80 text-stone-600 px-2.5 py-0.5 rounded-full font-bold ml-1">
              {regularNotes.length}
            </span>
          </div>

          {notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-stone-200 rounded-2xl bg-white" id="empty-state">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 mb-4 border border-stone-100">
                <StickyNote className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">No notes found</h3>
              <p className="text-stone-500 text-sm max-w-sm mb-6 leading-relaxed">
                Create your first sticky note card to capture lists, checkboxes, or general daily plans.
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" id="add-note-modal">
          <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/10 text-amber-600 rounded-lg">
                  <Plus className="w-4 h-4 stroke-[3.5]" />
                </div>
                <h2 className="text-lg font-black text-stone-900 font-display">Add New Note</h2>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
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
                  className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="note-desc">Description</label>
                <textarea
                  id="note-desc"
                  rows={4}
                  value={addDescription}
                  onChange={(e) => setAddDescription(e.target.value)}
                  placeholder="Write note description here... (Use new lines for checklists / points)"
                  className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none text-sm"
                />
              </div>

              {/* Priority Selector with Live Color Indicator */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Priority Level</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAddPriority("low")}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      addPriority === "low"
                        ? "bg-sky-50 border-sky-300 text-sky-800 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    Low
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddPriority("medium")}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      addPriority === "medium"
                        ? "bg-amber-50 border-amber-300 text-amber-800 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Medium
                  </button>
                  <button
                    type="button"
                    onClick={() => setAddPriority("high")}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      addPriority === "high"
                        ? "bg-rose-50 border-rose-300 text-rose-800 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    High
                  </button>
                </div>
              </div>

              {/* Note Formatting Options */}
              <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-stone-100 my-4">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={addIsChecklist}
                    onChange={(e) => {
                      setAddIsChecklist(e.target.checked);
                      if (e.target.checked) setAddIsNumbered(false);
                    }}
                    className="mt-1 h-4.5 w-4.5 rounded border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
                  />
                  <div>
                    <p className="text-xs font-bold text-stone-850">Checklist Mode</p>
                    <p className="text-[10px] text-stone-500">Every line gets a checkbox</p>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={addIsNumbered}
                    onChange={(e) => {
                      setAddIsNumbered(e.target.checked);
                      if (e.target.checked) setAddIsChecklist(false);
                    }}
                    className="mt-1 h-4.5 w-4.5 rounded border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
                  />
                  <div>
                    <p className="text-xs font-bold text-stone-850">Numbered List</p>
                    <p className="text-[10px] text-stone-500">Lines prefix with 1, 2, 3...</p>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4.5 py-2.5 bg-stone-100 hover:bg-stone-200/85 text-stone-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer animate-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5.5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-md shadow-amber-500/10"
                >
                  Create Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- EDIT NOTE MODAL --- */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" id="edit-note-modal">
          <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/10 text-amber-600 rounded-lg">
                  <Pencil className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-black text-stone-900 font-display">Edit Note</h2>
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
                  className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2" htmlFor="edit-desc">Description</label>
                <textarea
                  id="edit-desc"
                  rows={4}
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Write note description here... (Use new lines for checklists / points)"
                  className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none text-sm"
                />
              </div>

              {/* Priority Selector with live visual indicators */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Priority Level</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setEditPriority("low")}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      editPriority === "low"
                        ? "bg-sky-50 border-sky-300 text-sky-800 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    Low
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditPriority("medium")}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      editPriority === "medium"
                        ? "bg-amber-50 border-amber-300 text-amber-800 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Medium
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditPriority("high")}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      editPriority === "high"
                        ? "bg-rose-50 border-rose-300 text-rose-800 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    High
                  </button>
                </div>
              </div>

              {/* Note Formatting Options */}
              <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-stone-100 my-4">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={editIsChecklist}
                    onChange={(e) => {
                      setEditIsChecklist(e.target.checked);
                      if (e.target.checked) setEditIsNumbered(false);
                    }}
                    className="mt-1 h-4.5 w-4.5 rounded border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
                  />
                  <div>
                    <p className="text-xs font-bold text-stone-850">Checklist Mode</p>
                    <p className="text-[10px] text-stone-500">Every line gets a checkbox</p>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={editIsNumbered}
                    onChange={(e) => {
                      setEditIsNumbered(e.target.checked);
                      if (e.target.checked) setEditIsChecklist(false);
                    }}
                    className="mt-1 h-4.5 w-4.5 rounded border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500"
                  />
                  <div>
                    <p className="text-xs font-bold text-stone-850">Numbered List</p>
                    <p className="text-[10px] text-stone-500">Lines prefix with 1, 2, 3...</p>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4.5 py-2.5 bg-stone-100 hover:bg-stone-200/85 text-stone-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5.5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-md shadow-amber-500/10"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- SHARE LINK GENERATOR MODAL --- */}
      {isShareModalOpen && sharingNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs" id="share-note-modal">
          <div className="bg-white border border-stone-200 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-6 relative">
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1 rounded-lg hover:bg-stone-100 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Share2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-black text-stone-900 font-display">Share Single Note</h2>
              <p className="text-xs text-stone-500 mt-1">
                Anyone with this custom link can view this specific note in a beautiful read-only layout. No sign in required!
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-stone-50 border border-stone-100 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <div className="truncate text-left">
                  <p className="text-[10px] uppercase font-extrabold tracking-widest text-stone-400">Selected Note</p>
                  <p className="text-sm font-bold text-stone-800 truncate">{sharingNote.title || "Untitled"}</p>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-extrabold tracking-widest text-stone-500 mb-2">Public Share Link</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={`${window.location.origin}/shared/${sharingNote._id}`}
                    className="flex-1 bg-stone-50/70 border border-stone-200 text-stone-800 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none select-all font-mono"
                  />
                  <button
                    onClick={handleCopyShareLink}
                    className="flex items-center gap-1 bg-stone-900 hover:bg-stone-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors cursor-pointer shrink-0"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-400 animate-bounce" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedLink ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-100 flex justify-end">
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Close Share Options
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- AUTHENTICATION MODAL (LOG IN / SIGN UP) --- */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs" id="auth-modal">
          <div className="bg-white border border-stone-200 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl p-6 relative">
            <button
              onClick={() => {
                setIsAuthModalOpen(false);
                setAuthError("");
              }}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-100 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6 pt-2">
              <div className="w-11 h-11 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-amber-500/20">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black text-stone-900 font-display">
                {authMode === "signup" ? "Create Free Account" : "Welcome Back"}
              </h2>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                {authMode === "signup"
                  ? "Unlock permanent cloud storage, and share individual notes with custom links instantly!"
                  : "Sign in to synchronize your notes board and view shared links."}
              </p>
            </div>

            {authError && (
              <div className="mb-4 flex items-start gap-2.5 bg-rose-50 border border-rose-100 text-rose-800 p-3 rounded-xl text-xs font-semibold">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-tight">{authError}</span>
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-extrabold tracking-widest text-stone-500 mb-2" htmlFor="auth-username">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                  <input
                    id="auth-username"
                    type="text"
                    required
                    value={authUsername}
                    onChange={(e) => setAuthUsername(e.target.value)}
                    placeholder="Enter username (min. 3 chars)"
                    className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-extrabold tracking-widest text-stone-500 mb-2" htmlFor="auth-password">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                  <input
                    id="auth-password"
                    type="password"
                    required
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    placeholder="Enter password (min. 6 chars)"
                    className="w-full bg-stone-50/50 border border-stone-200 text-stone-900 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-stone-950 font-extrabold py-2.5 rounded-xl text-xs transition-colors cursor-pointer shadow-md shadow-amber-500/10 flex items-center justify-center gap-2"
              >
                {authLoading ? (
                  <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span>{authMode === "signup" ? "Get Started" : "Sign In"}</span>
                )}
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-stone-100 text-center">
              <p className="text-xs text-stone-500">
                {authMode === "signup" ? "Already have an account?" : "Need a brand new account?"}{" "}
                <button
                  onClick={() => {
                    setAuthMode(authMode === "signup" ? "login" : "signup");
                    setAuthError("");
                  }}
                  className="font-bold text-amber-600 hover:text-amber-700 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  {authMode === "signup" ? "Sign In instead" : "Sign Up now"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Helper template to render any sticky note card inside App
  function renderNoteCard(note, index) {
    const isPinned = !!note.isPinned;
    const priority = note.priority || "medium";
    const colorPreset = resolvePreset(priority, index);
    const badgeStyle = getPriorityBadgeClass(priority);
    const lines = note.description ? note.description.split("\n") : [];

    return (
      <div
        key={note._id}
        className={`${colorPreset.bg} ${colorPreset.border} text-stone-900 p-6 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1`}
        id={`note-card-${note._id}`}
      >
        {/* Authentic physical paper decorative tape */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3.5 ${colorPreset.tapeBg} -rotate-1 rounded-b shadow-[0_1px_2px_rgba(0,0,0,0.01)] group-hover:rotate-1 transition-all duration-300`} />

        {/* Glowing visual indicator on top-right corner */}
        <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full ${colorPreset.badgeBg} group-hover:scale-125 transition-all duration-300`} />

        {/* Format triggers and pin panel */}
        <div className="absolute top-3.5 right-8 flex items-center gap-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-200">
          {/* Share Button (custom requested feature!) */}
          <button
            onClick={() => openShareDialog(note)}
            className="p-1.5 rounded-lg hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer text-stone-500 hover:text-amber-600"
            title="Share Individual Note"
            id={`share-button-${note._id}`}
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          {/* Toggle Checklist */}
          <button
            onClick={async () => {
              const nextChecklistState = !note.isChecklist;
              const updatedNotes = notes.map((n) =>
                n._id === note._id ? { ...n, isChecklist: nextChecklistState, isNumbered: false } : n
              );
              saveNotesList(updatedNotes);
              if (authToken) {
                await fetch(`/api/notes/${note._id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                  },
                  body: JSON.stringify({ isChecklist: nextChecklistState, isNumbered: false }),
                }).catch(() => {});
              }
            }}
            className="p-1.5 rounded-lg hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer text-stone-500"
            title="Toggle Checklist Format"
          >
            <ListTodo className={`w-3.5 h-3.5 ${note.isChecklist ? "text-amber-600 font-bold" : "text-stone-400"}`} />
          </button>

          {/* Toggle Numbered Point */}
          <button
            onClick={async () => {
              const nextNumberedState = !note.isNumbered;
              const updatedNotes = notes.map((n) =>
                n._id === note._id ? { ...n, isNumbered: nextNumberedState, isChecklist: false } : n
              );
              saveNotesList(updatedNotes);
              if (authToken) {
                await fetch(`/api/notes/${note._id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                  },
                  body: JSON.stringify({ isNumbered: nextNumberedState, isChecklist: false }),
                }).catch(() => {});
              }
            }}
            className="p-1.5 rounded-lg hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer text-stone-500"
            title="Toggle Numbered List Format"
          >
            <ListOrdered className={`w-3.5 h-3.5 ${note.isNumbered ? "text-amber-600 font-bold" : "text-stone-400"}`} />
          </button>

          {/* Toggle Pin Status */}
          <button
            onClick={() => togglePin(note._id)}
            className="p-1.5 rounded-lg hover:bg-stone-200/50 active:scale-90 transition-all cursor-pointer text-stone-500"
            title={isPinned ? "Unpin note" : "Pin note"}
            id={`pin-button-${note._id}`}
          >
            <Pin className={`w-3.5 h-3.5 ${isPinned ? "text-amber-600 fill-amber-500 rotate-45" : "text-stone-400"}`} />
          </button>
        </div>

        <div className="pt-2">
          {/* Priority Tag indicator */}
          <div className="mb-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider uppercase border ${badgeStyle.badge}`}>
              <span className={`w-1.2 h-1.2 rounded-full ${badgeStyle.dot}`} />
              {badgeStyle.label} Priority
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-base font-extrabold text-stone-950 tracking-tight mb-2.5 group-hover:${colorPreset.titleColor} transition-colors line-clamp-1 pr-14`}>
            {note.title || <span className="italic text-stone-400 font-normal">Untitled Note</span>}
          </h3>

          {/* Body Content Description & Formatting layout */}
          {note.isChecklist || note.isNumbered ? (
            <div className="space-y-2 mb-6 max-h-48 overflow-y-auto pr-1">
              {lines.map((line, idx) => {
                if (line.trim() === "" && idx === lines.length - 1 && lines.length > 1) return null;
                const isChecked = note.checkedIndices?.includes(idx);
                return (
                  <div key={idx} className="flex items-start gap-2 py-0.5">
                    {note.isChecklist && (
                      <input
                        type="checkbox"
                        checked={!!isChecked}
                        onChange={() => handleToggleCheckline(note._id, idx)}
                        className="mt-1 h-4 w-4 rounded-sm border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-500 shrink-0"
                      />
                    )}
                    <span className={`text-xs leading-relaxed text-stone-800 ${isChecked ? "line-through text-stone-400/70 italic" : colorPreset.descColor}`}>
                      {note.isNumbered && (
                        <span className="font-extrabold mr-1 text-stone-500/70 font-mono text-[11px]">{idx + 1}.</span>
                      )}
                      {line || <span className="text-stone-350 italic">(empty item)</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className={`text-xs leading-relaxed mb-6 whitespace-pre-wrap line-clamp-6 ${colorPreset.descColor}`}>
              {note.description}
            </p>
          )}
        </div>

        {/* Footer timestamp and actions */}
        <div className="mt-auto">
          {/* Timestamp details */}
          <div className={`flex items-center gap-1.5 text-stone-500 font-mono text-[10px] font-semibold border-t ${colorPreset.border} pt-3.5 mb-3.5`}>
            <Clock className={`w-3.5 h-3.5 ${colorPreset.clockColor} shrink-0`} />
            <span>{new Date(note.updatedAt).toLocaleString()}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setEditId(note._id);
                setEditTitle(note.title);
                setEditDescription(note.description);
                setEditIsChecklist(!!note.isChecklist);
                setEditIsNumbered(!!note.isNumbered);
                setEditPriority(note.priority || "medium");
                setIsEditModalOpen(true);
              }}
              className={`flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold ${colorPreset.buttonText} ${colorPreset.buttonBg} rounded-lg transition-all duration-150 cursor-pointer shadow-xs active:scale-95`}
              id={`edit-button-${note._id}`}
            >
              <Pencil className="w-3 h-3" />
              Edit
            </button>
            <button
              onClick={() => handleDelete(note._id)}
              className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold text-rose-600 hover:bg-rose-100/50 hover:text-rose-700 rounded-lg transition-all duration-150 cursor-pointer ml-auto active:scale-95"
              id={`delete-button-${note._id}`}
            >
              <Trash2 className="w-3 h-3" />
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

