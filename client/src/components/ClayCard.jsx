const ClayCard = ({ children, className = '', title = '' }) => {
  return (
    <div className={`clay-card ${className}`}>
      {title && <h3 className="clay-card-title">{title}</h3>}
      <div className="clay-card-body">
        {children}
      </div>
    </div>
  );
};

export default ClayCard;
