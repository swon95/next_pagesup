import { useState, ChangeEvent, useCallback } from 'react';

export const useEditor = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('<p>Hello from CKEditor 5!</p>');

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleContentChange = useCallback((event: any, editor: any) => {
    setContent(editor.getData());
  }, []);

  const handleSubmit = useCallback(() => {
    console.log('Submitted', { title, content });
  }, [title, content]);

  return {
    title,
    content,
    handleTitleChange,
    handleContentChange,
    handleSubmit,
  };
};
