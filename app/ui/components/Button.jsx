const Button = ({ word }) => {
  return (
    <div className="text-sm inline-block py-3 px-4 bg-secondary font-bold text-white rounded-full transition-all duration-300 hover:scale-105 hover:text-background">
      <span>{word}</span>
    </div>
  )
}

export default Button