import React from 'react';

const Home = () => {
  return (
    <>
      <div className='-mt-[100px] text-[#f5f5f5] max-h-[100vh] w-[100vw] z-20 absolute '>
        <div className='flex flex-row'>
          <div className='flex-1 font-fira text-[120px] ml-[40px] mb-[25px] tracking-wide text-nowrap'>
            Full-stack
          </div>
        </div>
        <div className='flex flex-row justify-end right-0 items-center ml-[60px]'>
          <div className='font-open-sans align-middle text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            sit, quam quae esse in laborum dolore, ipsam dicta eius adipisci
            enim. Corporis natus animi libero soluta explicabo repellat nisi
            consequuntur?
          </div>
          <div className='right-0 font-fira text-[110px] ml-[40px] mr-[40px] px-[90px] tracking-wide text-nowrap text-end text-green-500'>
            {'<Developer />'}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
