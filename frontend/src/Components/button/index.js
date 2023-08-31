import './style.scss'

const PwButton = ({link, title, variant, size, fit}) => {
    return (
        <a href={link} className={`pw-button ${size === '' ? `pw-button-${variant}` : `pw-button-${variant}__${size}`} ${fit && 'pw-button-fit'}`}>
            {title}
        </a>
    );
};

export default PwButton;