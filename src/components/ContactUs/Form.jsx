import user from '../../assets/images/user.svg'
import phone from '../../assets/images/phone.svg'
import email from '../../assets/images/email.svg'
const Form = () => {
    return (
        <section className='container mx-auto flex flex-wrap items-center justify-between md:mt-[120px] mt-5'>
            <div className='px-3 md:px-0'>
                <div className='flex items-center gap-4'>
                    <div className='w-2 h-[46px] bg-[#D82022] rounded-sm'></div>
                    <h1 className="font-bold text-[40px] text-[#1E1E1E]">تواصل <span className="text-[#B1060D]">معنا</span></h1>
                </div>
                <div className="md:w-[580px] h-[716px] rounded-sm my-10 px-6 py-5" style={{ boxShadow: '0px 0px 3px 0px #00000029' }}>
                    <div className="relative">
                        <label htmlFor="name" className="text-[#1E1E1E] text-base">الاسم <span className="text-[#D82022]">*</span></label>
                        <div className="flex items-center">
                            <img src={user} alt="Icon" className="absolute right-2 top-14" />
                            <input type="text" name="name" id="name" className="px-10 md:w-[532px] w-full h-14 bg-[#0000000D] rounded-sm mt-4 p-5 focus:outline-0" placeholder="ادخل الاسم" />
                        </div>
                    </div>

                    <div className="relative mt-8">
                        <label htmlFor="name" className="text-[#1E1E1E] text-base">رقم الجوال </label>
                        <div className="flex items-center">
                            <img src={phone} alt="Icon" className="absolute right-2 top-14" />
                            <input type="text" name="name" id="name" className="px-10 md:w-[532px] w-full h-14 bg-[#0000000D] rounded-sm mt-4 p-5 focus:outline-0" placeholder="ادخل رقم الجوال" />
                        </div>
                    </div>

                    <div className="relative mt-8">
                        <label htmlFor="name" className="text-[#1E1E1E] text-base">البريد الإلكترونى <span className="text-[#D82022]">*</span></label>
                        <div className="flex items-center">
                            <img src={email} alt="Icon" className="absolute right-2 top-14" />
                            <input type="text" name="name" id="name" className="px-10 md:w-[532px] w-full h-14 bg-[#0000000D] rounded-sm mt-4 p-5 focus:outline-0" placeholder="ادخل البريد الإلكترونى" />
                        </div>
                    </div>

                    <div className="relative mt-8">
                        <label htmlFor="name" className="text-[#1E1E1E] text-base">الرسالة <span className="text-[#D82022]">*</span></label>
                        <div className="flex items-center">
                            <img src={email} alt="Icon" className="absolute right-2 top-14" />
                            <textarea type="text" name="name" id="name" className="px-10 md:w-[532px] w-full h-[148px] bg-[#0000000D] rounded-sm mt-3 p-5 focus:outline-0" placeholder="ادخل البريد الإلكترونى" />
                        </div>
                    </div>
                    <button className='w-[270px] h-14 rounded-sm bg-[#D82022] text-white flex items-center justify-center mx-auto mt-10'>إرسال</button>
                </div>
            </div>
        </section>
    )
}

export default Form
