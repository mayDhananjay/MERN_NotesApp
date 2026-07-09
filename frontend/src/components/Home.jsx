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

import { useEffect, useState } from 'react';
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
  ListOrdered,
  Share2
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

// UTF-8 friendly and URL-safe Base64 encoding/decoding for share links
const encodeNote = (note) => {
  try {
    const data = {
      title: note.title || "",
      description: note.description || "",
      isChecklist: !!note.isChecklist,
      isNumbered: !!note.isNumbered,
      checkedIndices: note.checkedIndices || [],
      priority: note.priority || "medium",
      updatedAt: note.updatedAt || new Date().toISOString()
    };
    const jsonStr = JSON.stringify(data);
    const utf8Bytes = new TextEncoder().encode(jsonStr);
    let binary = "";
    const len = utf8Bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(utf8Bytes[i]);
    }
    return btoa(binary)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  } catch (err) {
    console.error("Failed to encode note:", err);
    return "";
  }
};

const decodeNote = (str) => {
  try {
    let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) {
      base64 += "=";
    }
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const jsonStr = new TextDecoder().decode(bytes);
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error("Failed to decode note:", err);
    return null;
  }
};

export default function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  
  // Auth Token read silently from localStorage (retained from original backend configuration)
  const token = localStorage.getItem("token") || "";

  // Share States
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharingUrl, setSharingUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // Check if we are viewing a shared note from query param
  const [sharedNote, setSharedNote] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const sharedParam = params.get("shared");
      if (sharedParam && sharedParam.startsWith("b64_")) {
        return decodeNote(sharedParam.slice(4));
      }
    } catch (e) {
      console.error("Failed parsing shared note:", e);
    }
    return null;
  });

  // Modals status
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  // Note configurations (for checklist/numbering) persisted in localStorage
  const [noteConfigs, setNoteConfigs] = useState(() => {
    try {
      const saved = localStorage.getItem("notes_configs_map");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Priorities map persisted in localStorage
  const [notePriorities, setNotePriorities] = useState(() => {
    try {
      const saved = localStorage.getItem("notes_priorities_map");
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

  // Priority filter state
  const [priorityFilter, setPriorityFilter] = useState("all");

  // Helper to resolve note priority (implicit fallback included)
  const getNotePriority = (note) => {
    const savedPriority = notePriorities[note._id];
    if (savedPriority) return savedPriority;

    const index = notes.findIndex((n) => n._id === note._id);
    const colorIndex = index >= 0 ? (index % colors.length) : 0;
    if ([1, 2, 6].includes(colorIndex)) {
      return 'low';
    } else if ([3, 7].includes(colorIndex)) {
      return 'high';
    } else {
      return 'medium';
    }
  };

  // Fetch initial notes from MongoDB (using original API call pattern)
  const fetchNotes = async () => {
    try {
      const activeToken = localStorage.getItem("token");
      if (!activeToken) {
        // Keep the dummy note active if no backend token exists
        return;
      }
      setError("");
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL || ""}/api/notes`, {
        headers: { Authorization: `Bearer ${activeToken}` }
      });
      if (data && data.length > 0) {
        setNotes(data);
      }
    } catch {
      console.warn("Failed to fetch notes, using dummy / local notes");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchNotes();
  }, [token]);

  // Handle Note deletion from MongoDB
  const handleDelete = async (id) => {
    try {
      const activeToken = localStorage.getItem("token");
      if (activeToken) {
        await axios.delete(`${import.meta.env.VITE_API_URL || ""}/api/notes/${id}`, {
          headers: { Authorization: `Bearer ${activeToken}` },
        });
      }
    } catch {
      console.warn("Failed to delete Note from backend, deleting locally");
    }
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };

  // Handle Note Addition to MongoDB
  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!addTitle.trim() && !addDescription.trim()) {
      setError("Note must have a title or description");
      return;
    }

    const newId = "note-" + Date.now();
    const newNote = {
      _id: newId,
      title: addTitle,
      description: addDescription,
      updatedAt: new Date().toISOString()
    };

    try {
      const activeToken = localStorage.getItem("token");
      if (activeToken) {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL || ""}/api/notes`, {
          title: addTitle,
          description: addDescription
        }, {
          headers: { Authorization: `Bearer ${activeToken}` }
        });
        newNote._id = data._id;
        newNote.updatedAt = data.updatedAt;
      }
    } catch {
      console.warn("Failed to create Note on backend, saving locally");
    }

    // Save note configuration (checklist, numbering)
    setNoteConfigs((prev) => {
      const updated = {
        ...prev,
        [newNote._id]: {
          isChecklist: addIsChecklist,
          isNumbered: addIsNumbered,
          checkedIndices: []
        }
      };
      localStorage.setItem("notes_configs_map", JSON.stringify(updated));
      return updated;
    });

    // Save priority
    setNotePriorities((prev) => {
      const updated = {
        ...prev,
        [newNote._id]: addPriority
      };
      localStorage.setItem("notes_priorities_map", JSON.stringify(updated));
      return updated;
    });

    // Add new note to the list
    setNotes((prev) => [newNote, ...prev]);
    
    // Close modal and clear inputs
    setIsAddModalOpen(false);
    setAddTitle("");
    setAddDescription("");
    setAddIsChecklist(false);
    setAddIsNumbered(false);
    setAddPriority("medium");
    setError("");
  };

  // Handle Note Updating (Edit) to MongoDB
  const handleEditNote = async (e) => {
    e.preventDefault();
    if (!editTitle.trim() && !editDescription.trim()) {
      setError("Note must have a title or description");
      return;
    }

    const updatedNote = {
      _id: editId,
      title: editTitle,
      description: editDescription,
      updatedAt: new Date().toISOString()
    };

    try {
      const activeToken = localStorage.getItem("token");
      if (activeToken) {
        const { data } = await axios.put(`${import.meta.env.VITE_API_URL || ""}/api/notes/${editId}`, {
          title: editTitle,
          description: editDescription
        }, {
          headers: { Authorization: `Bearer ${activeToken}` }
        });
        updatedNote.updatedAt = data.updatedAt;
      }
    } catch {
      console.warn("Failed to edit Note on backend, updating locally");
    }

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

    // Update priority
    setNotePriorities((prev) => {
      const updated = {
        ...prev,
        [editId]: editPriority
      };
      localStorage.setItem("notes_priorities_map", JSON.stringify(updated));
      return updated;
    });

    // Update the modified note in the list
    setNotes((prev) => prev.map((note) => note._id === editId ? { ...note, ...updatedNote } : note));
    
    // Close modal and clear inputs
    setIsEditModalOpen(false);
    setEditId("");
    setEditTitle("");
    setEditDescription("");
    setEditIsChecklist(false);
    setEditIsNumbered(false);
    setEditPriority("medium");
    setError("");
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

  // Share Note Link generator & clipboard copy action
  const openShareDialog = (note) => {
    const shareUrl = `${window.location.origin}/share/${note._id}`;
    setSharingUrl(shareUrl);
    setIsShareModalOpen(true);
    setCopied(false);

    // Auto-copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        })
        .catch((err) => console.error("Clipboard copy failed", err));
    } else {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        console.error("Fallback copy failed", err);
      }
    }
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(sharingUrl)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        })
        .catch(() => {
          try {
            const textArea = document.createElement("textarea");
            textArea.value = sharingUrl;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
          } catch (err) {
            console.error("Fallback copy failed", err);
          }
        });
    }
  };

  // Split notes into pinned and other notes, applying priority filter
  const filteredNotes = notes.filter((note) => {
    if (priorityFilter === 'all') return true;
    return getNotePriority(note) === priorityFilter;
  });

  const pinnedNotes = filteredNotes.filter((note) => pinnedIds.includes(note._id));
  const regularNotes = filteredNotes.filter((note) => !pinnedIds.includes(note._id));

  // Render dedicated Shared Read-Only view if loaded from query param
  if (sharedNote) {
    const priority = sharedNote.priority || "medium";
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

    const showListMode = sharedNote.isChecklist || sharedNote.isNumbered;
    const lines = sharedNote.description ? sharedNote.description.split('\n') : [];

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
                {sharedNote.title || <span className="italic text-stone-400 font-normal">Untitled Note</span>}
              </h3>
              
              {/* Note Description / List */}
              {showListMode ? (
                <div className="space-y-3 mb-6 max-h-72 overflow-y-auto pr-1">
                  {lines.map((line, idx) => {
                    if (line.trim() === "" && idx === lines.length - 1 && lines.length > 1) return null;
                    const isChecked = sharedNote.checkedIndices?.includes(idx);
                    
                    return (
                      <div key={idx} className="flex items-start gap-2.5 py-0.5">
                        {sharedNote.isChecklist && (
                          <input
                            type="checkbox"
                            checked={!!isChecked}
                            readOnly
                            className="mt-1 h-4 w-4 rounded-sm border-stone-300 text-amber-600 cursor-not-allowed accent-amber-500 shrink-0"
                          />
                        )}
                        
                        <span className={`text-stone-800/90 text-sm leading-relaxed font-normal ${isChecked ? 'line-through text-stone-400/70 italic' : colorPreset.descColor}`}>
                          {sharedNote.isNumbered && (
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
                  {sharedNote.description}
                </p>
              )}

              {/* Timestamp */}
              <div className={`flex items-center gap-1.5 text-stone-500 font-mono text-[11px] font-semibold border-t ${colorPreset.border} pt-4`}>
                <Clock className="w-3.5 h-3.5 text-stone-500/60 shrink-0" />
                <span>Last updated: {new Date(sharedNote.updatedAt).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => {
                window.history.replaceState({}, document.title, window.location.origin);
                setSharedNote(null);
              }}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 active:scale-95 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-md cursor-pointer text-sm"
            >
              <span>Back to My Board</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render a single Note Card
  const renderNoteCard = (note, index) => {
    const isPinned = pinnedIds.includes(note._id);

    // Get priority and preset configuration
    const priority = getNotePriority(note);
    let colorPreset = colors[index % colors.length];

    if (priority === 'high') {
      colorPreset = colors[3]; // Rose
    } else if (priority === 'low') {
      colorPreset = colors[2]; // Sky
    } else {
      colorPreset = colors[0]; // Amber
    }

    // Define priority-specific badge classes and dots
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
    }[priority];
    
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
          {/* Priority Badge */}
          <div className="mb-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase border ${priorityInfo.badgeClass}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${priorityInfo.dotClass}`} />
              {priorityInfo.label} Priority
            </span>
          </div>

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
                                ...(prev[note._id] || { isChecklist: true, isNumbered: false, checkedIndices: [] }),
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
                // Pre-fill the edit checkboxes and priority
                const noteConfig = noteConfigs[note._id] || { isChecklist: false, isNumbered: false };
                setEditIsChecklist(noteConfig.isChecklist);
                setEditIsNumbered(noteConfig.isNumbered);
                setEditPriority(notePriorities[note._id] || "medium");
                setIsEditModalOpen(true);
              }}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold ${colorPreset.buttonText} ${colorPreset.buttonBg} rounded-lg transition-all duration-200 cursor-pointer shadow-xs active:scale-95`}
              id={`edit-button-${note._id}`}
            >
              <Pencil className="w-3 h-3" />
              Edit
            </button>
            <button 
              onClick={() => openShareDialog(note)}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-all duration-200 cursor-pointer shadow-xs active:scale-95`}
              id={`share-button-${note._id}`}
            >
              <Share2 className="w-3 h-3 text-stone-500" />
              Share
            </button>
            <button 
              onClick={() => handleDelete(note._id)}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-100/60 hover:text-rose-700 rounded-lg transition-all duration-200 cursor-pointer ml-auto active:scale-95"
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

        {/* Filter Features Based on Priority */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-4 bg-white/60 border border-stone-200/80 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.02)] backdrop-blur-xs" id="priority-filter-bar">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Filter by Priority:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setPriorityFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer ${
                priorityFilter === 'all'
                  ? 'bg-stone-900 border-stone-900 text-white shadow-sm'
                  : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-600'
              }`}
              id="filter-priority-all"
            >
              All ({notes.length})
            </button>
            <button
              onClick={() => setPriorityFilter('high')}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                priorityFilter === 'high'
                  ? 'bg-rose-500 border-rose-500 text-white shadow-sm'
                  : 'bg-rose-50/50 hover:bg-rose-50 border-rose-100 text-rose-800'
              }`}
              id="filter-priority-high"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${priorityFilter === 'high' ? 'bg-white' : 'bg-rose-500'}`} />
              High ({notes.filter((note) => getNotePriority(note) === 'high').length})
            </button>
            <button
              onClick={() => setPriorityFilter('medium')}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                priorityFilter === 'medium'
                  ? 'bg-amber-500 border-amber-500 text-stone-950 shadow-sm'
                  : 'bg-amber-50/50 hover:bg-amber-50 border-amber-100 text-amber-800'
              }`}
              id="filter-priority-medium"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${priorityFilter === 'medium' ? 'bg-stone-950' : 'bg-amber-500'}`} />
              Medium ({notes.filter((note) => getNotePriority(note) === 'medium').length})
            </button>
            <button
              onClick={() => setPriorityFilter('low')}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                priorityFilter === 'low'
                  ? 'bg-sky-500 border-sky-500 text-white shadow-sm'
                  : 'bg-sky-50/50 hover:bg-sky-50 border-sky-100 text-sky-800'
              }`}
              id="filter-priority-low"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${priorityFilter === 'low' ? 'bg-white' : 'bg-sky-400'}`} />
              Low ({notes.filter((note) => getNotePriority(note) === 'low').length})
            </button>
          </div>
        </div>

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" id="add-note-modal">
          <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
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
                  setAddPriority("medium");
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

              {/* Priority Selector based on beautiful colors */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Priority level</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAddPriority("low")}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      addPriority === "low"
                        ? "bg-sky-50 border-sky-300 text-sky-800 shadow-xs animate-pulse"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
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
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
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
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    High
                  </button>
                </div>
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
                    setAddPriority("medium");
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" id="edit-note-modal">
          <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
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

              {/* Priority Selector based on beautiful colors */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Priority level</label>
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
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
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
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
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
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    High
                  </button>
                </div>
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

      {/* --- SHARE MODAL --- */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs" id="share-note-modal">
          <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/10 text-amber-600 rounded-lg">
                  <Share2 className="w-4 h-4 stroke-[3.5]" />
                </div>
                <h2 className="text-lg font-black text-stone-900">Share Note</h2>
              </div>
              <button 
                onClick={() => setIsShareModalOpen(false)}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-lg hover:bg-stone-100 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-stone-600 leading-relaxed">
                This link allows anyone with the URL to view a read-only copy of this note without logging in!
              </p>

              <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <input
                  type="text"
                  readOnly
                  value={sharingUrl}
                  className="flex-1 bg-transparent text-stone-800 text-xs focus:outline-none select-all font-mono truncate"
                  onClick={(e) => e.target.select()}
                />
                <button
                  onClick={handleCopyLink}
                  className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-4 py-2 rounded-lg text-xs transition-colors cursor-pointer shrink-0"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              {copied && (
                <div className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  ✓ Link copied to clipboard!
                </div>
              )}

              <div className="flex items-center justify-end pt-2">
                <button 
                  type="button"
                  onClick={() => setIsShareModalOpen(false)}
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

