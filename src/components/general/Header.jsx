import PropTypes from 'prop-types';

const Header = ({ title, description, imageUrl, button }) => {
    return (
        <div className="relative overflow-hidden animate__animated animate__fadeIn">
            <img src={imageUrl} className="w-full h-44 md:h-full object-center object-cover" alt="Header Image" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#1E1E1E99]"></div>
            <div className="absolute md:top-1/2 top-5 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center">
                <h1 className="md:text-[#FAFAFA] text-[#DDDDDD] font-normal xl:text-[56px] lg:text-5xl md:text-3xl text-xl text-center">{title}</h1>
                <p className="lg:w-[590px] text-[rgb(250,250,250)] md:text-2xl text-sm font-normal text-center mx-auto md:mt-6 mt-2">{description}</p>
                {button && (
                    <button className="md:w-[215px] w-[120px] h-10 md:h-14 bg-[#D82022] text-white rounded-sm md:font-bold md:text-lg text-sm mt-2 md:mt-8">
                        {button}
                    </button>
                )}
            </div>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    button: PropTypes.string,
};

export default Header;
