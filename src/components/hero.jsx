import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center  text-white" style={{ backgroundImage: "url('https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/62307899_1207224956124819_7431316938556440576_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeEhb-CFND6CW1djyIqSBvCsZh0TwooICalmHRPCiggJqebCEXNDoHN--LY2MwyaJUGGwVILxfgsfTUviX_CE8ur&_nc_ohc=HVtfufuJ5WMQ7kNvgG0aHi0&_nc_ht=scontent.fcnx3-1.fna&oh=00_AYBPqI-DgpzuMPf2U0w0ge4JtpocGTB-PMnDqsPcfvtZrQ&oe=66F424F1')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center py-24 px-16 ">
        <h1 className="text-5xl font-bold mb-4 "><span className='text-amber-300 rop-shadow-lg font-extrabold'>Welcome</span> to <span className='text-blue-500 font-extrabold drop-shadow-lg'>CSMJU</span> Directory</h1>
        <p className="text-lg mb-8 ">
          This website for example to show about Computer Science Directory of Maejo University
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">
          Sign In / Register
        </button>
        <div className="flex flex-col sm:space-x-2 gap-y-3 sm:flex-row md:space-x-5 bg-gray-800 p-5 rounded-lg">
          <input className="px-4 py-2 rounded bg-gray-200 text-black" type="text" placeholder="ค้นหาจากสาขา" />
          <input className="px-4 py-2 rounded bg-gray-200 text-black" type="text" placeholder="ค้นหาจากชื่อ" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
