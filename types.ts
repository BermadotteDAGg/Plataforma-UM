export enum UserRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  enrollmentCode: string;
  major?: string; // Carrera (Student) or Departamento (Teacher)
  semester?: number;
  scholarship?: string; // Beca
  employeeId?: string; // Número de empleado
  position?: string; // Puesto (Teacher)
  photoUrl?: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: 'General' | 'Urgent' | 'Academic' | 'Welcome';
  imageUrl?: string;
  likes: number;
  comments: Comment[];
  isLiked?: boolean;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'Pending' | 'Submitted' | 'Graded' | 'Late';
  course: string;
  grade?: string;
  feedback?: string;
}

export interface ForumPost {
  id: string;
  author: string;
  title: string;
  content: string;
  replies: number;
  date: string;
  tags: string[];
  courseId?: string; // Si pertenece a una materia
  category?: 'General' | 'Subject' | 'Objetos Perdidos' | 'Comunidad Psicología';
}

export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  type?: 'text' | 'file' | 'image' | 'audio_call_start';
  fileName?: string;
}

export interface Chat {
  id: string;
  name: string;
  participants: string[];
  lastMessage: string;
  avatar?: string;
  isGroup?: boolean;
  role?: string; // To identify if it's coordination, teacher, etc.
}

export interface ScheduleItem {
  id: string;
  day: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado';
  startTime: string;
  endTime: string;
  subject: string;
  room: string;
  professor?: string;
  semester?: string; // Para docentes
}

export interface Payment {
  id: string;
  concept: string;
  amount: number;
  date: string;
  status: 'Pagado' | 'Pendiente';
  reference: string;
}

export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  category: string;
}

export interface PaperworkStatus {
  id: string;
  name: string;
  status: 'Entregado' | 'Pendiente' | 'Completo';
  description?: string;
}

export interface ServiceRequest {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface TeacherClass {
  id: string;
  name: string;
  semester: string;
  room: string;
  schedule: string;
  studentsCount: number;
  averageGrade: number;
  pendingTasks: number; // New field for indicators
}

export interface Grade {
  id: string;
  subject: string;
  partial1: number;
  partial2?: number;
  partial3?: number;
  final?: number;
  average?: number;
}

export interface ProfessionalCourse {
    id: string;
    title: string;
    description: string;
    duration: string;
    imageUrl: string;
}

export interface TeacherPlanning {
    id: string;
    classId: string;
    partial: 1 | 2 | 3;
    status: 'Uploaded' | 'Pending';
    dueDate: string;
    fileUrl?: string;
}

export interface TeacherDocument {
    id: string;
    name: string;
    type: 'Legal' | 'Payroll' | 'Paperwork';
    date?: string;
    status?: 'Paid' | 'Missing' | 'OK';
}

export enum Tab {
  DASHBOARD = 'DASHBOARD',
  STUDENT_CLASSES = 'STUDENT_CLASSES', // Renamed from HOMEWORK
  TEACHER_CLASSES = 'TEACHER_CLASSES',
  FORUM = 'FORUM',
  MESSAGES = 'MESSAGES',
  SCHEDULE = 'SCHEDULE',
  PAYMENTS = 'PAYMENTS',
  AI_TUTOR = 'AI_TUTOR', // Used for Teacher Assistant too
  PROFILE = 'PROFILE',
  LIBRARY = 'LIBRARY',
  PROFESSIONAL_SUCCESS = 'PROFESSIONAL_SUCCESS', // New
  TEACHER_ADMIN = 'TEACHER_ADMIN', // New
}