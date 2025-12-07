export default function LinkButton({ text, className, ...props }) {
  return (
    <button {...props} type="button" className={`btn-base ${className}`}>
      {text}
    </button>
  );
}
