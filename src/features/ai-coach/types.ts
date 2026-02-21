export type MessageRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  createdAt: string;
}
