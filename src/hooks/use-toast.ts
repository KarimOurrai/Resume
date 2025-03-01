export function useToast() {
  return { toasts: [] }; // added "toasts" property
}

export const toast = (message: string) => {
  // dummy implementation
};
