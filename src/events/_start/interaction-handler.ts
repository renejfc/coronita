import { readdirSync } from "node:fs"
import { join } from "node:path"
import { pathToFileURL } from "node:url"

type Handler = (...args: unknown[]) => Promise<void>

type HandlerModule = {
  customID: string
  default: Handler
}

const BaseDir = join(process.cwd(), ".robo", "build")
const ButtonsDir = join(BaseDir, "buttons")
const ModalsDir = join(BaseDir, "modals")

export const ButtonHandlers = new Map<string, Handler>()
export const ModalHandlers = new Map<string, Handler>()

// Load interaction handlers in advance for future use
export default async () => {
  await Promise.all([
    ...readdirSync(ButtonsDir).map((fileName) => loadHandler(join(ButtonsDir, fileName), ButtonHandlers, isHandler)),
    ...readdirSync(ModalsDir).map((fileName) => loadHandler(join(ModalsDir, fileName), ModalHandlers, isHandler)),
  ])
}

const isHandler = (module: unknown): module is HandlerModule => {
  return (
    typeof module === "object" &&
    module !== null &&
    "customID" in module &&
    typeof module.customID === "string" &&
    "default" in module &&
    typeof module.default === "function"
  )
}

const loadHandler = async (
  path: string,
  handlers: Map<string, Handler>,
  validate: (module: unknown) => module is HandlerModule,
) => {
  const filePath = join(path)
  const fileURL = pathToFileURL(filePath).href
  const handler = await import(fileURL)

  if (!validate(handler)) {
    throw new Error(`Invalid handler module: ${filePath}`)
  }

  handlers.set(handler.customID, handler.default)
}
