export const todayISO = new Date().toISOString().slice(0, 10); 
// z.B. "2025-08-08"
export const today = new Date().toDateString()
export const doneTasksToDelete = 4
export const generateUUID = () => Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
export const COLORS = [
    [255, 158, 74],
    [255, 107, 107],
    [199, 77, 206],
    [56, 189, 248],   
    [16, 185, 129],
    ];
