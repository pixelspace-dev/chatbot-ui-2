import { ContentType } from "@/types"
import {
  IconAdjustmentsHorizontal,
  IconBolt,
  IconBooks,
  IconFile,
  IconMessage,
  IconPencil,
  IconRobotFace,
  IconSparkles
} from "@tabler/icons-react"
import { FC } from "react"
import { TabsList } from "../ui/tabs"
import { WithTooltip } from "../ui/with-tooltip"
import { ProfileSettings } from "../utility/profile-settings"
import { SidebarSwitchItem } from "./sidebar-switch-item"
import Image from "next/image"
import pixelspaceLogo from "@/public/favicon.ico"

export const SIDEBAR_ICON_SIZE = 12

interface SidebarSwitcherProps {
  onContentTypeChange: (contentType: ContentType) => void
  contentType: ContentType
}

export const SidebarSwitcher: FC<SidebarSwitcherProps> = ({
  onContentTypeChange,
  contentType
}) => {
  return (
    <div className="border-pixelspace-gray-60 bg-pixelspace-gray-90 flex flex-col justify-between border-r px-5 pb-6 pt-8">
      <div
        className="mb-8 flex flex-col items-center justify-center"
        style={{ width: 18 }}
      >
        <Image
          unoptimized
          src={pixelspaceLogo.src}
          alt={"pixelspace_logo"}
          width={18}
          height={18}
          className="rounded-full"
        />
      </div>
      <TabsList className="bg-pixelspace-gray-90 mb-auto flex h-auto flex-col space-y-4">
        <hr className="border-pixelspace-gray-60 w-4 border" />
        <SidebarSwitchItem
          icon={
            <i
              className={`fa-kit fa-thread-simple ${contentType === "chats" ? " text-pixelspace-pink" : "text-pixelspace-gray-3 text-base"}`}
              style={{ width: 16, height: 16 }}
            ></i>
          }
          contentType="chats"
          onContentTypeChange={onContentTypeChange}
        />

        <SidebarSwitchItem
          icon={
            <i
              className={`fa-regular fa-sparkles ${contentType === "prompts" ? " text-pixelspace-pink" : "text-pixelspace-gray-3 text-base"}`}
              style={{ width: 16, height: 16 }}
            ></i>
          }
          contentType="prompts"
          onContentTypeChange={onContentTypeChange}
        />

        <hr
          className="border-pixelspace-gray-60 w-4 border"
          style={{ marginTop: 32 }}
        />

        <SidebarSwitchItem
          icon={
            <i
              className={`fa-regular fa-file ${contentType === "files" ? " text-pixelspace-pink" : "text-pixelspace-gray-3 text-base"}`}
              style={{ width: 16, height: 16 }}
            ></i>
          }
          contentType="files"
          onContentTypeChange={onContentTypeChange}
        />

        {/* <SidebarSwitchItem
          icon={<IconAdjustmentsHorizontal size={SIDEBAR_ICON_SIZE} />}
          contentType="presets"
          onContentTypeChange={onContentTypeChange}
        /> */}

        <SidebarSwitchItem
          icon={
            <i
              className={`fa-regular fa-layer-group ${contentType === "collections" ? " text-pixelspace-pink" : "text-pixelspace-gray-3 text-base"}`}
              style={{ width: 16, height: 16 }}
            ></i>
          }
          contentType="collections"
          onContentTypeChange={onContentTypeChange}
        />

        <hr
          className="border-pixelspace-gray-60 w-4 border"
          style={{ marginTop: 32 }}
        />

        <SidebarSwitchItem
          icon={
            <i
              className={`fa-regular fa-robot ${contentType === "assistants" ? " text-pixelspace-pink" : "text-pixelspace-gray-3 text-base"}`}
              style={{ width: 16, height: 16 }}
            ></i>
          }
          contentType="assistants"
          onContentTypeChange={onContentTypeChange}
        />

        <SidebarSwitchItem
          icon={
            <i
              className={`fa-regular fa-bolt ${contentType === "tools" ? " text-pixelspace-pink" : "text-pixelspace-gray-3 text-base"}`}
              style={{ width: 16, height: 16 }}
            ></i>
          }
          contentType="tools"
          onContentTypeChange={onContentTypeChange}
        />

        <SidebarSwitchItem
          icon={
            <i
              className={`fa-regular fa-microchip-ai ${contentType === "models" ? " text-pixelspace-pink" : "text-pixelspace-gray-3 text-base"}`}
              style={{ width: 16, height: 16 }}
            ></i>
          }
          contentType="models"
          onContentTypeChange={onContentTypeChange}
        />
      </TabsList>

      <div className="flex flex-col items-center space-y-4">
        {/* TODO */}
        {/* <WithTooltip display={<div>Import</div>} trigger={<Import />} /> */}

        {/* TODO */}
        {/* <Alerts /> */}

        <WithTooltip
          display={<div>Profile Settings</div>}
          trigger={<ProfileSettings />}
        />
      </div>
    </div>
  )
}
