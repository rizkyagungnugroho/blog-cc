import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: <MdLocationPin className="w-6 h-6" />, 
      contact: "Yogyakarta, Indonesia",
    },
    {
      icon: <MdEmail className="w-6 h-6" />, 
      contact: "rizkyagungnugroho.02@gmail.com",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />, 
      contact: "+62 857 2934 7347",
    },
  ];

  return (
    <section className="relative py-14 bg-gray-900 flex justify-center items-center ">
      <div className="relative z-10 max-w-screen-md mx-auto px-4 text-gray-400 md:px-8 text-center">
        <div className="max-w-lg mx-auto">
          <h3 className="text-amber-400 text-3xl font-semibold sm:text-4xl">Contact</h3>
          <p className="mt-3">For any inquiries, feel free to contact me through the following methods:</p>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col gap-y-4 items-center text-white">
            {contactMethods.map((item, idx) => (
              <li key={idx} className="flex items-center gap-x-3">
                <div className="flex-none text-gray-400">{item.icon}</div>
                <p>{item.contact}</p>
              </li>
            ))}
            <li className="flex gap-x-6 text-gray-400 mt-4">
              <a href="https://www.facebook.com/rizkyagung.naxganteng" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48">
                  <g clipPath="url(#a)">
                    <path
                      fill="currentColor"
                      d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h48v48H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://github.com/rizkyagungnugroho" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48">
                  <g clipPath="url(#clip0_910_44)">
                    <path
                      fillRule="evenodd"
                      d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
     
      </div>
    </section>
  );
}