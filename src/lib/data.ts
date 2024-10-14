import { User, Order, Activity, Notification } from "./types";

export const users: User[] = [
  {
    id:1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id:2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id:3,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
  },
  {
    id:4,
    name: "Michael Brown",
    email: "michael.brown@example.com",
  },
];


export const orders: Order[] = [
  {
    id: "order_001",
    user: users[0],
    createdAt: "2024-10-01T10:15:00Z",
  },
  {
    id: "order_002",
    user: users[1],
    createdAt: "2024-10-02T12:45:00Z",
  },
  {
    id: "order_003",
    user: users[2],
    createdAt: "2024-10-03T14:30:00Z",
  },
  {
    id: "order_004",
    user: users[3],
    createdAt: "2024-10-03T14:30:00Z",
  },
];


export const activities: Activity[] = [
  {
    id: "activity_001",
    description: "Logueado en el sistema",
    user: users[0],
    createdAt: "2024-10-01T08:00:00Z",
  },
  {
    id: "activity_002",
    description: "Actualizado su perfil",
    user: users[1],
    createdAt: "2024-10-02T09:30:00Z",
  },
  {
    id: "activity_003",
    description: "Creo una nueva orden",
    user: users[2],
    createdAt: "2024-10-03T11:45:00Z",
  },
  {
    id: "activity_004",
    description: "Cambio el estado de una orden",
    user: users[3],
    createdAt: "2024-10-04T15:00:00Z",
  },
];

// Notificaciones ficticias
export const notifications: Notification[] = [
  {
    id: "notification_001",
    description: "Su orden ha sido actualizada",
    user: users[0],
    createdAt: "2024-10-05T16:00:00Z",
  },
  {
    id: "notification_002",
    description: "Su perfil ha sido actualizado",
    user: users[1],
    createdAt: "2024-10-06T10:30:00Z",
  },
  {
    id: "notification_003",
    description: "Nuevo descuento en artículos seleccionados.",
    user: users[2],
    createdAt: "2024-10-07T09:15:00Z",
  },
  {
    id: "notification_004",
    description: "Nueva orden creada.",
    user: users[2],
    createdAt: "2024-10-07T09:15:00Z",
  },
];
