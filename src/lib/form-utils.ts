import * as React from "react"
import { useContext } from "react"

interface FormFieldContextValue {
  name: string;
}

interface FormItemContextValue {
  id: string;
}

export const FormFieldContext = React.createContext<FormFieldContextValue | undefined>(undefined)
export const FormItemContext = React.createContext<FormItemContextValue | undefined>(undefined)

export function useFormField() {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  if (!itemContext) {
    throw new Error('useFormField should be used within <FormItem>')
  }

  const { id } = itemContext

  return {
    id,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldContext,
  }
}
