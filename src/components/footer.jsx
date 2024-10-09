import React from 'react'

function Footer() {
    return (
        <>

            <div class="relative bg-gray-800">
                <div class="absolute inset-x-0 bottom-0">
                    <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
                        <path
                            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
                        </path>
                    </svg>
                </div>
                <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                        <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Subscribe to our newsletter
                        </h2>
                        <p class="mb-6 text-base text-indigo-200 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae. explicabo. Sed ut perspiciatis unde omnis.
                        </p>
                        <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                            <input
                                placeholder="Email"
                                required=""
                                type="text"
                                class="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                            />
                            <a href="/"
                                class="bg-blue-600 hover:bg-red-600 inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none">
                                Subscribe
                            </a>
                        </form>
                        <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                        </p>
                        <a href="/" aria-label="Scroll down"
                            class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                <path
                                    d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <footer class="w-full">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-w-xs mx-auto sm:max-w-2xl lg:max-w-full">
                        <div class="col-span-full mb-10 max-lg:border-b max-lg:pb-8 lg:border-r border-gray-200 lg:col-span-2 lg:max-w-xs lg:mb-0">
                         <a href="#"><img src="https://th.bing.com/th/id/R.e03502c8d9132c06340d2c411d029d76?rik=HVTiPybteoF5Zg&pid=ImgRaw&r=0" alt="logo" className='hidden md:inline w-2/3 md:p-7'/></a>
                            <ul class="grid gap-5">
                                <li class="flex items-center justify-center gap-2 lg:justify-start">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.87798 3.83594L6.80031 7.08201C8.55849 8.13692 9.43758 8.66437 10.4034 8.64139C11.3693 8.6184 12.2223 8.04973 13.9283 6.91239L18.1246 3.83594M8.33464 14.6693H11.668C14.8107 14.6693 16.382 14.6693 17.3583 13.693C18.3346 12.7166 18.3346 11.1453 18.3346 8.0026C18.3346 4.85991 18.3346 3.28856 17.3583 2.31225C16.382 1.33594 14.8107 1.33594 11.668 1.33594H8.33464C5.19194 1.33594 3.62059 1.33594 2.64428 2.31225C1.66797 3.28856 1.66797 4.85991 1.66797 8.0026C1.66797 11.1453 1.66797 12.7166 2.64428 13.693C3.62059 14.6693 5.19194 14.6693 8.33464 14.6693Z" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                    support@pagedone.com
                                </li>
                                <li class="flex items-center justify-center gap-2 lg:justify-start">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9655 12.6929C15.672 12.5811 15.5252 12.5251 15.3708 12.5118C15.2164 12.4984 15.0622 12.5283 14.7538 12.5881L12.3984 13.0445C12.0235 13.1172 11.836 13.1535 11.6427 13.1227C11.4493 13.0918 11.2957 13.0064 10.9886 12.8356C9.07557 11.7718 7.78657 10.5439 6.95042 8.81181C6.827 8.55614 6.76529 8.4283 6.74183 8.25256C6.71837 8.07683 6.74863 7.91452 6.80915 7.5899L7.27298 5.1021C7.32932 4.79993 7.35749 4.64884 7.3442 4.49766C7.33092 4.34649 7.27683 4.20263 7.16866 3.91491L6.61323 2.43758C6.35178 1.74217 6.22105 1.39447 5.93618 1.19723C5.65132 1 5.27985 1 4.53692 1H2.68622C1.66783 1 0.866113 1.84144 1.01869 2.8481C1.39788 5.36068 2.51739 9.91727 5.78835 13.1882C9.22363 16.6235 14.172 18.1141 16.895 18.7072C17.9468 18.9357 18.8794 18.1159 18.8794 17.0388V15.3317C18.8794 14.592 18.8794 14.2222 18.6836 13.938C18.4877 13.6538 18.1421 13.5222 17.4509 13.2588L15.9655 12.6929Z" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    +91 945 658 3256
                                </li>
                                <li class="flex items-center justify-center gap-2 lg:justify-start">
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6654 8.60868C14.6654 11.8081 12.1279 14.3862 10.184 16.6526C9.22437 17.7713 8.74457 18.3307 7.9987 18.3307C7.25282 18.3307 6.77302 17.7713 5.81342 16.6526C3.86945 14.3862 1.33203 11.8081 1.33203 8.60868C1.33203 6.76685 2.03441 5.00046 3.28465 3.69809C4.5349 2.39573 6.23059 1.66406 7.9987 1.66406C9.76681 1.66406 11.4625 2.39573 12.7127 3.69809C13.963 5.00046 14.6654 6.76685 14.6654 8.60868Z" stroke="#4F46E5" stroke-width="1.6" />
                                        <path d="M9.66536 7.7406C9.66536 8.69945 8.91917 9.47676 7.9987 9.47676C7.07822 9.47676 6.33203 8.69945 6.33203 7.7406C6.33203 6.78175 7.07822 6.00445 7.9987 6.00445C8.91917 6.00445 9.66536 6.78175 9.66536 7.7406Z" stroke="#4F46E5" stroke-width="1.6" />
                                    </svg>
                                    61-A, Elm street, Gujarat, India.
                                </li>
                            </ul>
                        </div>
                        <div class="lg:mx-auto text-left ">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Home</a></li>
                                <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">About</a></li>
                                <li><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Pricing</a></li>
                            </ul>
                        </div>
                        <div class="lg:mx-auto text-left">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Products</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
                                <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                                <li><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                            </ul>
                        </div>
                        <div class="lg:mx-auto text-left ">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">FAQs</a></li>
                                <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Quick Start</a></li>
                                <li ><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Documentation</a></li>
                            </ul>
                        </div>
                        <div class="lg:mx-auto text-left ">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Support</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Customer Support</a></li>
                                <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">License</a></li>
                                <li ><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                            </ul>
                        </div>

                    </div>
                    <div class="py-7 border-t border-gray-200">
                        <div class="flex items-center justify-center ">
                            <span class="text-sm text-gray-500 ">©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.</span>

                        </div>
                    </div>
                </div>
            </footer>




        </>
    )
}

export default Footer