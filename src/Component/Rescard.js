import React from 'react';
import { CDN_URL } from './utills/constant';

function Rescard(props) {
  const data = props.menu.info;

  return (
    <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="res-card transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
        <img alt="res-logo" className="res-logo" src={CDN_URL + data.cloudinaryImageId} />
        <h3 className="mt-4 font-bold text-xl">{data.name}</h3>
        <div>
          <h4 className="cuisines" style={{ wordWrap: 'break-word' }}>
            {data.cuisines.join(',')}
          </h4>
        </div>
        <div className="avgRating-costForTwo flex justify-between mt-4">
          <h4 className="font-bold">⭐{data.avgRating}</h4>
          <h4 className="font-bold">{data.costForTwo}</h4>
        </div>
        <h4 className="mt-4 font-bold">60% OFF TRYNEW</h4>
      </div>
    </div>
  );
}

export default Rescard;
