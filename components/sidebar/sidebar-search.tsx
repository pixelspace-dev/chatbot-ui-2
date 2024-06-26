import { ContentType } from "@/types"
import { FC, useState } from "react"

import { Input } from "../ui/input"

interface SidebarSearchProps {
  contentType: ContentType
  searchTerm: string
  setSearchTerm: Function
}

const getContentTypeText = (contentType: string): string => {
  if (contentType === "chats") {
    return "threads"
  } else if (contentType === "collections") {
    return "file collections"
  } else if (contentType === "tools") {
    return "actions"
  } else {
    return contentType
  }
}

export const SidebarSearch: FC<SidebarSearchProps> = ({
  contentType,
  searchTerm,
  setSearchTerm
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div
      className={`bg-pixelspace-gray-70 focus:border-pixelspace-gray-40 flex h-[42px] w-full items-center rounded-md border px-2 py-3  ${!isFocused || searchTerm.length > 0 ? "border-pixelspace-gray-50" : "border-pixelspace-gray-40"}`}
    >
      <div>
        <i
          className="fa-regular fa-magnifying-glass text-pixelspace-gray-20"
          style={{ width: 16, height: 16 }}
        ></i>
      </div>
      <Input
        style={{ border: "none", outline: "none" }}
        placeholder={`Find ${getContentTypeText(contentType)}`}
        className={`bg-pixelspace-gray-70  text-sm ${searchTerm.length > 0 ? "text-pixelspace-gray-3" : "text-pixelspace-gray-20 "} h-[40px] border-none font-normal`}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}
