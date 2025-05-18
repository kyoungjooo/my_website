type BtnProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ text, ...props }: BtnProps) {
  return <button {...props}>{text}</button>;
}
