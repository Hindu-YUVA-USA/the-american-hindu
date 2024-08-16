import { UseFormRegister } from 'react-hook-form'

type InputProps = {
  register: UseFormRegister<any>
  label?: string
  name: string
  type?: 'email' | 'number' | 'password' | 'text' | 'textarea'
  required?: boolean
  placeholder?: string
  disabled?: boolean
  error: any
}

const Input: React.FC<InputProps> = ({
  register,
  label,
  name,
  type = 'text',
  required,
  placeholder,
  disabled,
  error,
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <label>
        {label}
        {required ? <span className="text-red-500">&nbsp;*</span> : ''}
      </label>
      <input
        placeholder={placeholder}
        className="p-2 w-96 rounded-sm bg-gray-200"
        type={type}
        {...register(name, {
          required,
        })}
        disabled={disabled}
      />
    </div>
  )
}

export default Input
