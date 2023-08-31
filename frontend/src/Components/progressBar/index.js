import React from 'react';
import './style.scss'; // Importez vos styles CSS

                               function ProgressBar(props) {
const { percentage } = props;

return (
<div className="progress-bar">
<div className="progress" style={{ width: `${percentage}%` }}></div>
</div>
);
}

export default ProgressBar;