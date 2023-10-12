import { LabelInputProps } from '@/types'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const LabelInput = ({ label, type, onChange, htmlFor }: LabelInputProps) => {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={htmlFor}
        autoComplete="off"
        name={htmlFor}
        type={type}
        onChange={onChange}
      />
    </div>
  )
}

export default LabelInput
