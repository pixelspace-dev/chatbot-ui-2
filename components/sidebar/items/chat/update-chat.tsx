import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChatbotUIContext } from "@/context/context"
import { updateChat } from "@/db/chats"
import { Tables } from "@/supabase/types"
import { faPen } from "@fortawesome/pro-regular-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { FC, useContext, useRef, useState } from "react"

interface UpdateChatProps {
  chat: Tables<"chats">
  setShowChatDialog: (value: boolean) => void
}

export const UpdateChat: FC<UpdateChatProps> = ({
  chat,
  setShowChatDialog: isSetShowDialog
}) => {
  const { setChats } = useContext(ChatbotUIContext)

  const buttonRef = useRef<HTMLButtonElement>(null)

  const [showChatDialog, setShowChatDialog] = useState(false)
  const [name, setName] = useState(chat.name)

  const handleUpdateChat = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const updatedChat = await updateChat(chat.id, {
      name
    })
    setChats(prevState =>
      prevState.map(c => (c.id === chat.id ? updatedChat : c))
    )

    isSetShowDialog(false)
    setShowChatDialog(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      buttonRef.current?.click()
    }
  }

  return (
    <Dialog open={showChatDialog} onOpenChange={setShowChatDialog}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="hover:bg-pixelspace-gray-55 dark:hover:bg-pixelspace-gray-70 block w-full cursor-pointer px-4 py-2 text-left text-sm font-medium dark:hover:text-white"
        >
          <FontAwesomeIcon icon={faPen} className="mr-2" />
          <span>Rename</span>
        </button>
      </DialogTrigger>

      <DialogContent className="h-[223px] w-[640px]" onKeyDown={handleKeyDown}>
        <DialogHeader>
          <DialogTitle>Edit thread</DialogTitle>
        </DialogHeader>

        <div className="space-y-1">
          <Label>Name</Label>

          <Input value={name} onChange={e => setName(e.target.value)} />
        </div>

        <DialogFooter>
          <Button
            className="mr-4"
            size="cancelPrompt"
            variant="cancelPrompt"
            onClick={() => {
              setShowChatDialog(false)
              isSetShowDialog(false)
            }}
          >
            Cancel
          </Button>

          <Button
            size="savePrompt"
            variant="savePrompt"
            ref={buttonRef}
            onClick={handleUpdateChat}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
