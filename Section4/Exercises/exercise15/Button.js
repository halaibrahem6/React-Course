

export default function Button({ mode = 'filled', Icon, children, ...rest }) {
 
    const buttonClass = 
      mode === 'outline' ? 'button outline-button' :
      mode === 'text' ? 'button text-button' :
      'button filled-button'; 
  
    return (
      <button className={Icon ? `icon-button ${buttonClass}` : buttonClass} {...rest}>
        {Icon && <span className="button-icon"><Icon /></span>} 
        <span>{children}</span> 
      </button>
    );
  }
  