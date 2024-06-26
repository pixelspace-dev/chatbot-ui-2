"use client"

import { ChatHelp } from "@/components/chat/chat-help"
import { useChatHandler } from "@/components/chat/chat-hooks/use-chat-handler"
import { ChatInput } from "@/components/chat/chat-input"
import { ChatSettings } from "@/components/chat/chat-settings"
import { ChatUI } from "@/components/chat/chat-ui"
import { QuickSettings } from "@/components/chat/quick-settings"
import { ChatBrand } from "@/components/ui/chat-brand"
import { ChatbotUIContext } from "@/context/context"
import useHotkey from "@/lib/hooks/use-hotkey"
import { useTheme } from "next-themes"
import { useContext } from "react"

export default function ChatPage() {
  useHotkey("o", () => handleNewChat())
  useHotkey("l", () => {
    handleFocusChatInput()
  })

  const { chatMessages } = useContext(ChatbotUIContext)

  const { handleNewChat, handleFocusChatInput } = useChatHandler()

  const { theme } = useTheme()

  return (
    <>
      {chatMessages.length === 0 ? (
        <div className="flex h-[calc(100dvh)] w-full flex-col">
          <div className="flex flex-row items-center justify-between">
            <div>
              <QuickSettings />
            </div>

            <div>
              <ChatSettings />
            </div>
          </div>

          <div
            className="flex w-full items-center justify-center"
            style={{ alignSelf: "auto", flex: "auto" }}
          >
            <ChatBrand theme={theme === "dark" ? "dark" : "light"} />
          </div>

          <div
            className="grow flex-col items-center justify-center"
            style={{ flex: "none" }}
          />

          <div className="mt-auto flex w-full flex-row items-center justify-center">
            <div className="relative w-full px-11 pb-8 pt-5 md:w-[500px] lg:w-[660px] xl:w-[800px]">
              <ChatInput />
            </div>
          </div>

          <div className="bottom absolute bottom-2 right-2 z-0 md:block lg:bottom-4 lg:right-4">
            <ChatHelp />
          </div>
        </div>
      ) : (
        <ChatUI />
      )}
    </>
  )
}
