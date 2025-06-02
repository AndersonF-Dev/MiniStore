export type TabContentType = 
  | { type: 'text'; content: string }
  | { type: 'list'; content: string[] }
  | { type: 'reviews'; content: { name: string; text: string; rating: number }[] };

export interface TabType {
  title: string;
  content: TabContentType;
}