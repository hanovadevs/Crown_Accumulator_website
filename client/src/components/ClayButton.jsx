const ClayButton = ({ children, onClick, type = 'button', variant = 'default', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`clay-button ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default ClayButton;
