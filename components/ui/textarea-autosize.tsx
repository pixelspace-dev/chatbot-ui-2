import { cn } from "@/lib/utils"
import { FC } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"

interface TextareaAutosizeProps {
  value: string
  onValueChange: (value: string) => void

  textareaRef?: React.RefObject<HTMLTextAreaElement>
  className?: string

  placeholder?: string
  minRows?: number
  maxRows?: number
  maxLength?: number
  onKeyDown?: (event: React.KeyboardEvent) => void
  onPaste?: (event: React.ClipboardEvent) => void
  onCompositionStart?: (event: React.CompositionEvent) => void
  onCompositionEnd?: (event: React.CompositionEvent) => void
  isDisabled?: boolean
}

export const TextareaAutosize: FC<TextareaAutosizeProps> = ({
  value,
  onValueChange,
  textareaRef,
  className,
  placeholder = "",
  minRows = 1,
  maxRows = 6,
  maxLength,
  onKeyDown = () => {},
  onPaste = () => {},
  onCompositionStart = () => {},
  onCompositionEnd = () => {},
  isDisabled
}) => {
  const v = value == "" ? 1 : minRows > maxRows ? minRows : maxRows
  return (
    <ReactTextareaAutosize
      ref={textareaRef}
      className={cn(
        "bg-pixelspace-gray-60 placeholder:text-muted-foreground flex w-full resize-none rounded-sm  text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      minRows={minRows}
      maxRows={v}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={event => onValueChange(event.target.value)}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
      disabled={isDisabled}
    />
  )
}
