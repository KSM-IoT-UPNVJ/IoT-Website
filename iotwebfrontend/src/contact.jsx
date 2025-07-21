export function Contact() {
    return(
        <div className="m-15">
            <div className="text-center">
                <h1 className="font-optima font-bold text-5xl my-10">Contact Us !</h1>
                <p className="text-xl px-50">Have a question or want to collaborate with KSM IoT UPNVJ? We’d love to hear from you! Reach out through the form below or connect with us via email or social media. Let’s build the future of technology together.</p>
            </div>

            <div>
                <div className="flex ">
                    <div className="flex flex-col">
                        <form action="" method="post" className="w-full ">
                            <input type="text" placeholder="Name" />
                            <div className="flex">
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Phone" />
                            </div>
                            <textarea name="message" placeholder="Message"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}