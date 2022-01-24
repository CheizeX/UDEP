import { Chat } from '../../../../../../models/chat/chat';

export interface ITagTransferProps {
  name: string;
  color: string;
}
export interface IAgentToTransferProps {
  color?: string;
  name?: string;
  message?: number;
  change?: number;
  time?: number;
  minuts?: string;
  tag?: TagTransferType;
  chatsToday: Chat[];
}
export type TagTransferType = ITagTransferProps[];
