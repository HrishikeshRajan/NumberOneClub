export interface OTPInputProps {
    className?: string;
    phoneNumber?: string;
    onVerify?: (otp: string) => void;
    onChangeNumber?: () => void;
    back?:() => void;
  }
  
  export interface OTPSlotProps {
    index: number;
    inputRef: (el: HTMLInputElement | null) => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
    className?:string;
    wrapperClassName?:string;
  }