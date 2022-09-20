const Dialog = ({ open, onClose, children }) => {
  if (open) {
    return (
      <div>
        <div>
          <h2>Speech settings</h2>
          {children}
          <span onClick={onClose}>Done</span>
        </div>
      </div>
    );
  }
  return null;
};

export default Dialog;
