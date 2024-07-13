export type DocumentType = Partial<{
  fileNmae: string;
  size: number;
  type: string;
  src: Partial<{
    original: string;
    compressed: string;
    thumbnail: string;
  }>;
}>;
