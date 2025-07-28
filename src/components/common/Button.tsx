type BtnProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ text, className, ...props }: BtnProps) {
  return (
    <button {...props} className={`btn-base ${className}`}>
      {text}
    </button>
  );
}
