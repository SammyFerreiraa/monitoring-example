import { LabelInputProps } from '@/types'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const LabelInput = ({ label, type }: LabelInputProps) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input type={type} />
    </div>
  )
}

export default LabelInput
