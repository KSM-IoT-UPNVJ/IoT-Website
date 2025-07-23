import { Phone, Mail, MapPinned } from 'lucide-react';
import Map from './components/map'

export function Contact() {
    const imageSrc = "foto_upn.jpg"
    
    return(
        <div className="m-15">
            <div className="text-center my-10">
                <h1 className="font-optima font-bold text-5xl my-10">Contact Us !</h1>
                <p className="text-xl px-50">Have a question or want to collaborate with KSM IoT UPNVJ? We’d love to hear from you! Reach out through the form below or connect with us via email or social media. Let’s build the future of technology together.</p>
            </div>

            <div>
                <div className="flex justify-around ">
                    <div className=" flex-3/5 p-10">
                        <form action="" method="post" className="flex flex-col w-full gap-2.5">
                            <input type="text" placeholder="Name" className="border-2 border-biru-sedang bg-biru-muda rounded-2xl py-3 px-[19px] w-full"/>
                            <div className="flex gap-2 justify-center">
                                <input type="email" placeholder="Email" className="border-2 border-biru-sedang bg-biru-muda rounded-2xl py-3 px-[25px] flex-1 " />
                                <input type="text" placeholder="Phone" className="border-2 border-biru-sedang bg-biru-muda rounded-2xl py-3 px-[25px] flex-1 "/>
                            </div>
                            <textarea name="message" placeholder="Message" className="block border-2 border-biru-sedang bg-biru-muda rounded-2xl py-[7px] px-[19px] w-full"></textarea>
                            <button type="submit" className="bg-biru-sedang w-[231px] h-12 rounded-xl text-white shadow-lg shadow-blue-500/50 ">Submit</button>
                        </form>
                    </div>

                    <div className="flex flex-col gap-2 flex-2/5 p-10">
                        <div className="relative h-24 rounded-2xl overflow-hidden">
                            <img
                            src={imageSrc}
                            alt="Top"
                            className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 text-white backdrop-blur-[1px] bg-black/50 flex items-center px-4 gap-4">
                                <div className="bg-biru-sedang p-2 rounded-full">
                                    <Phone />
                                </div>
                                <div>
                                    <p className="font-bold">Phone</p>
                                    <p className="text-sm">+62 813-1552-6318</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-24 rounded-2xl overflow-hidden">
                            <img
                            src={imageSrc}
                            alt="Middle"
                            className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 text-white bg-black/50 flex backdrop-blur-[1px] items-center px-4 gap-4">
                                <div className="bg-biru-sedang p-2 rounded-full">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="font-bold">Email</p>
                                    <p className="text-sm break-all">internetofthings.upnvj@gmail.com</p>
                                </div>
                            </div>

                        </div>

                        <div className="relative h-24 rounded-2xl overflow-hidden">
                            <img
                            src={imageSrc}
                            alt="Bottom"
                            className="w-full h-full object-cover object-bottom"
                            />
                            <div className="absolute inset-0 text-white bg-black/50 backdrop-blur-[1px] flex items-center px-4 gap-4">
                                <div className='bg-biru-sedang p-2 rounded-full'>
                                    <MapPinned />
                                </div>
                                <div>
                                    <p className="font-bold">Address</p>
                                    <p className="text-sm break-all">Jl. Raya Limo Kecamatan Limo Kota Depok 16515</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Map />
        </div>
    )
}