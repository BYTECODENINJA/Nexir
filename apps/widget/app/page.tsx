import { Input} from "@workspace/ui/components/input"
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <Input />
    <h1>Hello @ widget</h1>
    </div>
  )
}
