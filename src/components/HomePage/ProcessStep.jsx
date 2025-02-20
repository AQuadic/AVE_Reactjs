import PropTypes from 'prop-types';

const ProcessStep = ({ iconSrc, number, title }) => (
    <div className="flex flex-col items-center lg:w-64  md:w-56 w-32">
        <div className="flex items-baseline gap-2">
            <img src={iconSrc} className='md:w-12 md:h-12 w-6 h-6' alt="Icon" />
            <p className="text-[#1E1E1E] md:text-[32px] text-xl font-bold">{number}</p>
        </div>
        <h2 className="text-[#1E1E1E] md:font-bold text-normal lg:text-2xl md:text-xl text-sm text-center">{title}</h2>
    </div>
);

ProcessStep.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ProcessStep;
