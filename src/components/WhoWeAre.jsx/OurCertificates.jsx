import certificates from '../../assets/images/certificates.webp'
const OurCertificates = () => {
    const certificatesArray = Array(4).fill(certificates);
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:mt-[120px] mt-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-2 h-[46px] bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold text-[40px] text-[#1E1E1E]">شهاداتنا</h1>
                </div>
                <div className="mt-[35px] p-5 lg:px-60 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-12">
                    {certificatesArray.map((image, index) => (
                        <img key={index} src={image} alt="Certificates" className="w-full max-w-[200px]" />
                    ))}
                </div>


            </div>
        </section>
    )
}

export default OurCertificates
