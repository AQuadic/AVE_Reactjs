import PropTypes from 'prop-types';

const ProcessStep = ({ iconSrc, number, title }) => (
    <div className="flex flex-col items-center">
        <div className="flex items-baseline gap-2">
            <img src={iconSrc} alt="Icon" />
            <p className="text-[#1E1E1E] text-[32px] font-bold">{number}</p>
        </div>
        <h2 className="text-[#1E1E1E] font-bold text-2xl text-center">{title}</h2>
    </div>
);

ProcessStep.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ProcessStep;
