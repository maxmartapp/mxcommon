import { Subjects } from "./subjects";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  // data required by various services is to be emitted
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
