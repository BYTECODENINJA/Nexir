import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"


export default function Page() {
  return (
    <p>{add(2, 5)}</p>
  )
}
